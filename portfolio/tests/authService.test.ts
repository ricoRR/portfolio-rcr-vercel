import { describe, it, expect, beforeEach } from 'vitest';
import bcrypt from 'bcryptjs';
import {
  authenticate,
  __resetAuthAttempts,
  type AuthConfig,
} from '../server/services/authService';

function expectThrowWithStatus(executable: () => unknown, statusCode: number) {
  try {
    executable();
  } catch (error: any) {
    expect(error.statusCode).toBe(statusCode);
    return error;
  }

  throw new Error(`Expected function to throw with status ${statusCode}`);
}

describe('authService.authenticate', () => {
  const baseConfig: AuthConfig = {
    authEmail: 'admin@example.com',
    authPassword: 'Password123',
  };

  beforeEach(() => {
    __resetAuthAttempts();
  });

  it('authenticates with plain credentials', () => {
    const user = authenticate(
      { email: 'ADMIN@example.com', password: 'Password123' },
      baseConfig
    );

    expect(user.email).toBe('admin@example.com');
  });

  it('supports bcrypt hashed password', () => {
    const hashedPassword = bcrypt.hashSync('Password123', 10);
    const config: AuthConfig = {
      authEmail: 'admin@example.com',
      authPassword: hashedPassword,
    };

    const user = authenticate(
      { email: 'admin@example.com', password: 'Password123' },
      config
    );

    expect(user.email).toBe('admin@example.com');
  });

  it('rejects invalid email format', () => {
    const error = expectThrowWithStatus(
      () => authenticate({ email: 'invalid-email', password: 'Password123' }, baseConfig),
      400
    );

    expect(error.message).toContain('Email invalide');
  });

  it('rejects short passwords', () => {
    const error = expectThrowWithStatus(
      () => authenticate({ email: 'admin@example.com', password: 'short' }, baseConfig),
      400
    );

    expect(error.message).toContain('mot de passe');
  });

  it('rejects incorrect password and increments attempts', () => {
    const error = expectThrowWithStatus(
      () => authenticate({ email: 'admin@example.com', password: 'wrongpass' }, baseConfig),
      401
    );

    expect(error.message).toContain('Identifiants invalides');
  });

  it('blocks further attempts after max failures', () => {
    const strictConfig: AuthConfig = {
      ...baseConfig,
      authMaxAttempts: 2,
      authLockMinutes: 1,
    };

    expectThrowWithStatus(
      () => authenticate({ email: 'admin@example.com', password: 'wrongpass' }, strictConfig),
      401
    );

    const lockError = expectThrowWithStatus(
      () => authenticate({ email: 'admin@example.com', password: 'wrongpass' }, strictConfig),
      429
    );

    expect(lockError.message).toContain('bloqué');
  });
});
