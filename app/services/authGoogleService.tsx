import api from '@/app/services/config/index';
import { AuthProviderGoogle } from '@/app/interfaces/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from '../redux/storeSlice';
import { useDispatch } from 'react-redux';

export const authenticateWithGoogle = createAsyncThunk(
  '/login/provider/google',
  async (authProviderGoogle: AuthProviderGoogle) => {
    try {
      const dispatch = useDispatch();
      const { data } = await api.post(
        '/login/provider/google',
        authProviderGoogle
      );
      const { user } = data;
      const _user = {
        name: user.name,
        email: user.email,
        image: user.image,
      };
      dispatch(setUser(_user));
      return data;
    } catch {
      throw new Error('Erro ao autenticar com Google');
    }
  }
);

// export class AuthService {
//   async authenticateWithGoogle(authProviderGoogle: AuthProviderGoogle) {
//     try {
//       const { data } = await api.post(
//         '/login/provider/google',
//         authProviderGoogle
//       );
//       return data;
//     } catch {
//       throw new Error('Erro ao autenticar com Google');
//     }
//   }
// }

// export const authService = new AuthService();
