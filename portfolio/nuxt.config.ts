// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    baseURL: isGithubPages ? '/portfolio-rcr/' : '/',
  },

  nitro: {
    preset: isGithubPages ? 'github-pages' : undefined,
  },

  runtimeConfig: {
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS,
    mailRecipient: process.env.MAIL_RECIPIENT || process.env.MAIL_USER,
    authEmail: process.env.AUTH_EMAIL,
    authPassword: process.env.AUTH_PASSWORD,
    authMaxAttempts: process.env.AUTH_MAX_ATTEMPTS,
    authLockMinutes: process.env.AUTH_LOCK_MINUTES,

    public: {
      siteName: 'Portfolio',
      contactFormEndpoint: process.env.NUXT_PUBLIC_CONTACT_FORM_ENDPOINT,
      contactFormSuccessMessage: process.env.NUXT_PUBLIC_CONTACT_FORM_SUCCESS_MESSAGE,
      contactFormErrorMessage: process.env.NUXT_PUBLIC_CONTACT_FORM_ERROR_MESSAGE,
    },
  },

  modules: ["@nuxt/image"],
  image: {
    dir: 'assets/',
  },
});
