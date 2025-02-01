import http from './config/index';
import { RegistrationService } from '@/app/types/user';
import { AxiosError } from 'axios';

export const registrationAccount = async (user: RegistrationService) => {
  try {
    const { data } = await http.post('/api/register', {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch {
    return false;
  }
};

export const getUserInfo = async (token: string) => {
  try {
    const { data } = await http.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data || { message: 'Erro desconhecido' };
  }
};
