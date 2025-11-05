import { defineEventHandler, readBody } from 'h3';
import {
  validateContactPayload,
  saveContactMessage,
  sendContactEmail,
} from '../services/contactService';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const payload = validateContactPayload(body);
  const config = useRuntimeConfig();

  const contactId = saveContactMessage(payload);

  try {
    await sendContactEmail(payload, config);
    return {
      success: true,
      message: 'Message envoyé et enregistré. Je vous réponds rapidement !',
      contactId,
    };
  } catch (error) {
    console.error('[contact] échec d’envoi email', error);
    return {
      success: true,
      message: 'Message enregistré, mais l’envoi d’email a échoué. Je vous recontacte via la base.',
      contactId,
      delivery: 'failed',
    };
  }
});
