import { describe, it, expect, beforeEach, vi } from 'vitest';
import db from '../server/utils/db';
import {
  validateContactPayload,
  saveContactMessage,
  getRecentContactMessages,
  sendContactEmail,
  type MailConfig,
} from '../server/services/contactService';

function expectThrow(executable: () => unknown, statusCode: number) {
  try {
    executable();
  } catch (error: any) {
    expect(error.statusCode).toBe(statusCode);
    return error;
  }

  throw new Error(`Expected to throw with status ${statusCode}`);
}

describe('contactService', () => {
  beforeEach(() => {
    db.exec('DELETE FROM contact_messages');
  });

  it('validates and trims the payload', () => {
    const payload = validateContactPayload({
      name: '  Ricardo ',
      email: ' user@example.com ',
      message: '   Merci pour votre retour détaillé.   ',
    });

    expect(payload).toEqual({
      name: 'Ricardo',
      email: 'user@example.com',
      message: 'Merci pour votre retour détaillé.',
    });
  });

  it('rejects invalid payload', () => {
    const invalidEmail = expectThrow(
      () =>
        validateContactPayload({
          name: 'Ricardo',
          email: 'bad-email',
          message: 'Message suffisant.',
        }),
      400
    );

    expect(invalidEmail.message).toContain('email');

    expectThrow(
      () =>
        validateContactPayload({
          name: 'R',
          email: 'user@example.com',
          message: 'Message suffisant.',
        }),
      400
    );
  });

  it('persists contact messages into sqlite', () => {
    const payload = {
      name: 'Ricardo',
      email: 'user@example.com',
      message: 'Message suffisamment long.',
    };

    const id = saveContactMessage(payload);
    expect(id).toBeGreaterThan(0);

    const [message] = getRecentContactMessages(1);
    expect(message).toMatchObject({
      id,
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });
  });

  it('sends email through the provided transporter', async () => {
    const sendMail = vi.fn().mockResolvedValueOnce({});
    const fakeTransporter = { sendMail } as any;
    const payload = {
      name: 'Ricardo',
      email: 'user@example.com',
      message: 'Message suffisamment long.',
    };
    const config: MailConfig = {
      mailHost: 'smtp.example.com',
      mailPort: 587,
      mailUser: 'portfolio@example.com',
      mailPass: 'secret',
      mailRecipient: 'contact@example.com',
    };

    await sendContactEmail(payload, config, fakeTransporter);

    expect(sendMail).toHaveBeenCalledTimes(1);
    expect(sendMail.mock.calls[0][0]).toMatchObject({
      from: config.mailUser,
      to: config.mailRecipient,
    });
  });

  it('fails when mail configuration is incomplete', async () => {
    const payload = {
      name: 'Ricardo',
      email: 'user@example.com',
      message: 'Message suffisamment long.',
    };

    await expect(
      sendContactEmail(payload, { mailHost: 'smtp.example.com' }, { sendMail: vi.fn() } as any)
    ).rejects.toMatchObject({ statusCode: 500 });
  });
});
