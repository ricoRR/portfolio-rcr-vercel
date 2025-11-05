import { useRuntimeConfig } from '#imports';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

type SanitizedContactFormInput = ContactFormInput;

function sanitizePayload(payload: ContactFormInput): SanitizedContactFormInput {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || name.length < 2) {
    throw new Error('Le nom doit contenir au moins 2 caractères.');
  }

  if (!email || !emailRegex.test(email)) {
    throw new Error('Merci de renseigner un email valide.');
  }

  if (!message || message.length < 10) {
    throw new Error('Le message doit contenir au moins 10 caractères pour être exploitable.');
  }

  return { name, email, message };
}

function resolveMessage(
  response: unknown,
  fallback: string
): string {
  if (!response) {
    return fallback;
  }

  if (typeof response === 'string') {
    return response;
  }

  if (typeof response === 'object') {
    const message =
      (response as Record<string, unknown>).message ??
      (response as Record<string, unknown>).error;

    if (typeof message === 'string' && message.trim().length > 0) {
      return message;
    }
  }

  return fallback;
}

export function useContactForm() {
  const config = useRuntimeConfig();
  const publicEndpoint = config.public.contactFormEndpoint;
  const endpoint = publicEndpoint || '/api/contact';
  const defaultSuccess =
    config.public.contactFormSuccessMessage ??
    'Message envoyé. Merci pour votre confiance, je vous réponds rapidement.';
  const defaultError =
    config.public.contactFormErrorMessage ??
    'Impossible d’envoyer votre message pour le moment. Merci de réessayer plus tard.';

  async function submitContactRequest(payload: ContactFormInput): Promise<string> {
    const sanitizedPayload = sanitizePayload(payload);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(sanitizedPayload),
    });

    let parsedBody: unknown = null;

    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      parsedBody = await response.json().catch(() => null);
    } else {
      parsedBody = await response.text().catch(() => null);
    }

    if (!response.ok) {
      if (!publicEndpoint && response.status === 404) {
        throw new Error(
          'Le traitement du formulaire nécessite un hébergement avec API (Nuxt server ou endpoint externe).'
        );
      }

      throw new Error(resolveMessage(parsedBody, defaultError));
    }

    return resolveMessage(parsedBody, defaultSuccess);
  }

  return {
    submitContactRequest,
    defaultSuccessMessage: defaultSuccess,
    defaultErrorMessage: defaultError,
  };
}
