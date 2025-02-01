import http from '@/app/services/config/index';
import { AuthProviderGoogle, AuthLogin } from '@/app/types/auth';

export const authenticateWithGoogle = async (
  authProviderGoogle: AuthProviderGoogle
) => {
  try {
    const { data } = await http.post(
      '/api/login/provider/google',
      authProviderGoogle
    );
    return data;
  } catch {
    throw new Error('Erro ao autenticar Usuário com Google');
  }
};

export const authenticateLogin = async (authLogin: AuthLogin) => {
  try {
    const { data } = await http.post('/api/login', {
      email: authLogin.email,
      password: authLogin.password,
    });
    if (!data.user) throw new Error('Usuário não encontrado');
    return data;
  } catch {
    return false;
  }
};
