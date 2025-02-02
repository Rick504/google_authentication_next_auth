import http from '@/app/services/config/index';
import { AuthProviderGoogle, AuthLogin } from '@/app/types/auth';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

export const authenticateWithGoogle = async (
  authProviderGoogle: AuthProviderGoogle
) => {
  try {
    const { data } = await http.post(
      '/api/login/provider/google',
      authProviderGoogle
    );
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      success: false,
      message: axiosError.response?.data,
    };
  }
};

export const authenticateLogin = async (authLogin: AuthLogin) => {
  try {
    const { data } = await http.post('/api/login', {
      email: authLogin.email,
      password: authLogin.password,
    });

    if (data && data.token) {
      Cookies.set('x-access-token', data.token, { expires: 1 / 24 });
    }

    if (!data.user) throw new Error('Usuário não encontrado');
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      success: false,
      message: axiosError.response?.data,
    };
  }
};
