import api from '@/app/services/config/index';
import { AuthProviderGoogle } from '@/app/interfaces/auth';

export class AuthService {
  async authenticateWithGoogle(authProviderGoogle: AuthProviderGoogle) {
    try {
      const { data } = await api.post(
        '/login/provider/google',
        authProviderGoogle
      );
      return data;
    } catch {
      throw new Error('Erro ao autenticar com Google');
    }
  }
}

export const authService = new AuthService();
