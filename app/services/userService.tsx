import http from './config/index';
import { RegistrationService } from '@/app/types/user';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

export const registrationAccount = async (user: RegistrationService) => {
  try {
    const { data } = await http.post('/api/register', {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    if (data && data.token) {
      Cookies.set('x-access-token', data.token, { expires: 1 / 24 });
    }

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      success: false,
      message: axiosError.response?.data,
    };
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
    return {
      success: false,
      message: axiosError.response?.data,
    };
  }
};
