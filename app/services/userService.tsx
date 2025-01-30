import http from '@/app/services/config/index';
import { RegistrationService } from '@/app/types/user';

export const registrationAccount = async (user: RegistrationService) => {
  try {
    const data = await http.post('/register', {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return data;
  } catch {
    throw new Error('Erro ao criar conta de Usuário');
  }
};
