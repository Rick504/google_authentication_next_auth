'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { UserGoole } from '../types/user';
import { useDispatch } from 'react-redux';
import { setUser, isLoading } from '../redux/storeSlice';
import Cookies from 'js-cookie';
import { persistor } from '../redux/store';

export default function UserDashboard({ user }: { user: UserGoole }) {
  const defaultProfile = '/imgs/icons/png/profile.png';
  const dispatch = useDispatch();
  dispatch(isLoading(false));
  dispatch(setUser(user));

  async function _signOut() {
    persistor.purge();
    Cookies.remove('x-access-token');
    signOut({ callbackUrl: '/' });
  }
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-20'>
      <Image
        src={user.image || defaultProfile}
        width={100}
        height={100}
        alt='Picture of the author'
        style={{
          borderRadius: '50%',
        }}
      />
      <p>Bem Vindo a Home {user.name}!</p>
      <p>Email: {user.email}</p>

      <button className='border' onClick={() => _signOut()}>
        Sair
      </button>
    </div>
  );
}
