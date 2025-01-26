import api from '@/app/services/config/index';
import { AuthProviderGoogle, AuthLogin } from '@/app/interfaces/auth';
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
      throw new Error('Erro ao autenticar Usuário com Google');
    }
  }
);

export const authenticateLogin = createAsyncThunk(
  '/login',
  async (authLogin: AuthLogin) => {
    try {
      const dispatch = useDispatch();
      const { data } = await api.post('/login', authLogin);
      const { user } = data;
      if (!user) throw new Error('Usuário não encontrado');

      const _user = {
        name: user.name,
        email: user.email,
        image: user.image,
      };
      dispatch(setUser(_user));
      return _user;
    } catch {
      throw new Error('Erro ao autenticar Usuário');
    }
  }
);
