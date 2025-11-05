import { defineNuxtRouteMiddleware, navigateTo } from '#app';
import { useAuthState } from '~/composables/useAuthState';

export default defineNuxtRouteMiddleware((to, from) => {
  const authState = useAuthState();

  if (authState.value.isAuthenticated) {
    return;
  }

  const query = {
    redirectedFrom: to.fullPath,
    auth: 'required',
  };

  if (process.server) {
    return navigateTo({ path: '/', query }, { redirectCode: 302 });
  }

  if (!from || from.fullPath === to.fullPath) {
    return navigateTo({ path: '/', query });
  }

  return navigateTo({ path: '/', query });
});
