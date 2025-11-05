import { createError } from 'h3';
import bcrypt from 'bcryptjs';

export type AuthCredentials = {
  email: string;
  password: string;
};

export type AuthConfig = {
  authEmail?: string;
  authPassword?: string;
  authMaxAttempts?: number | string;
  authLockMinutes?: number | string;
};

type AttemptState = {
  failedAttempts: number;
  blockedUntil?: number;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hashedPasswordRegex = /^\$2[aby]\$[\d]+\$[./A-Za-z0-9]{53}$/;
const attempts = new Map<string, AttemptState>();

export function sanitizeCredentials(credentials: AuthCredentials): AuthCredentials {
  const email = credentials.email?.trim().toLowerCase();
  const password = credentials.password?.trim();

  if (!email || !emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'INVALID_EMAIL',
      message: 'Email invalide.',
    });
  }

  if (!password || password.length < 8) {
    throw createError({
      statusCode: 400,
      statusMessage: 'WEAK_PASSWORD',
      message: 'Le mot de passe doit comporter au moins 8 caractères.',
    });
  }

  return { email, password };
}

function resolveLimits(config: AuthConfig) {
  const maxAttempts = Number(config.authMaxAttempts ?? 5);
  const lockMinutes = Number(config.authLockMinutes ?? 15);

  return {
    maxAttempts: Number.isFinite(maxAttempts) && maxAttempts > 0 ? maxAttempts : 5,
    lockDurationMs:
      Number.isFinite(lockMinutes) && lockMinutes > 0 ? lockMinutes * 60_000 : 15 * 60_000,
  };
}

function ensureNotBlocked(email: string, config: AuthConfig) {
  const attempt = attempts.get(email);
  const { lockDurationMs } = resolveLimits(config);

  if (!attempt?.blockedUntil) {
    return;
  }

  if (Date.now() < attempt.blockedUntil) {
    const minutesRemaining = Math.ceil((attempt.blockedUntil - Date.now()) / 60_000);
    throw createError({
      statusCode: 429,
      statusMessage: 'TOO_MANY_ATTEMPTS',
      message: `Trop de tentatives infructueuses. Réessayez dans ${minutesRemaining} minute(s).`,
    });
  }

  attempts.delete(email);
}

function registerFailure(email: string, config: AuthConfig) {
  const { maxAttempts, lockDurationMs } = resolveLimits(config);
  const attempt = attempts.get(email) ?? { failedAttempts: 0 };
  attempt.failedAttempts += 1;

  if (attempt.failedAttempts >= maxAttempts) {
    attempt.blockedUntil = Date.now() + lockDurationMs;
  }

  attempts.set(email, attempt);

  if (attempt.blockedUntil) {
    throw createError({
      statusCode: 429,
      statusMessage: 'ACCOUNT_LOCKED',
      message: 'Compte temporairement bloqué après plusieurs échecs.',
    });
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'INVALID_CREDENTIALS',
    message: 'Identifiants invalides.',
  });
}

function resetAttempts(email: string) {
  attempts.delete(email);
}

function comparePassword(input: string, stored: string) {
  if (hashedPasswordRegex.test(stored)) {
    return bcrypt.compareSync(input, stored);
  }

  return input === stored;
}

export function authenticate(credentials: AuthCredentials, config: AuthConfig) {
  const sanitizedCredentials = sanitizeCredentials(credentials);
  const { authEmail, authPassword } = config;

  if (!authEmail || !authPassword) {
    throw createError({
      statusCode: 500,
      statusMessage: 'SERVER_AUTH_MISCONFIGURED',
      message: 'Paramètres d’authentification non configurés côté serveur.',
    });
  }

  ensureNotBlocked(sanitizedCredentials.email, config);

  if (
    sanitizedCredentials.email === authEmail.toLowerCase() &&
    comparePassword(sanitizedCredentials.password, authPassword)
  ) {
    resetAttempts(sanitizedCredentials.email);
    return {
      email: authEmail,
    };
  }

  registerFailure(sanitizedCredentials.email, config);
}

export function __resetAuthAttempts() {
  attempts.clear();
}
