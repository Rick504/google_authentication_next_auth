import api from '@/app/services/config/index';
import { AuthProviderGoogle, AuthLogin } from '@/app/interfaces/auth';

export const authenticateWithGoogle = async (
  authProviderGoogle: AuthProviderGoogle
) => {
  try {
    const { data } = await api.post(
      '/login/provider/google',
      authProviderGoogle
    );
    return data;
  } catch {
    throw new Error('Erro ao autenticar Usuário com Google');
  }
};

export const authenticateLogin = async (authLogin: AuthLogin) => {
  try {
    const { data } = await api.post('/login', {
      email: authLogin.email,
      password: authLogin.password,
    });
    if (!data.user) throw new Error('Usuário não encontrado');
    return data;
  } catch {
    throw new Error('Erro ao autenticar Usuário');
  }
};
