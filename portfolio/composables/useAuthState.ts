export type AuthState = {
  isAuthenticated: boolean;
  email: string | null;
};

export const useAuthState = () =>
  useState<AuthState>('auth-state', () => ({
    isAuthenticated: false,
    email: null,
  }));
