import { defineEventHandler, readBody } from 'h3';
import { authenticate } from '../../services/authService';

export default defineEventHandler(async (event) => {
  const credentials = await readBody(event);
  const config = useRuntimeConfig();

  const user = authenticate(credentials, config);

  return {
    success: true,
    user,
    message: 'Connexion réussie, accès autorisé aux ressources protégées.',
  };
});
