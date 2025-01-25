'use client';

import { useState } from 'react';
import { LoginGoogle, LoginDataUser, RegisterUser, Loader } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

export default function Login() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const loading = useSelector((state: RootState) => state.store.loading);

  const loginGoogleText = isUserLoggedIn
    ? 'Ou registre-se com:'
    : 'Conectar com:';

  return (
    <>
      {loading && <Loader />}
      <div className='flex flex-col justify-center items-center mt-20 gap-10'>
        <div className='p-12 w-96 border border-black'>
          <div className='flex justify-center gap-5'>
            <button
              className='mt-4 w-full py-2 bg-green-500 text-white'
              onClick={() => setIsUserLoggedIn(true)}
            >
              Registro
            </button>
            <button
              className='mt-4 w-full py-2 bg-green-500 text-white'
              onClick={() => setIsUserLoggedIn(false)}
            >
              Logar
            </button>
          </div>
          {!isUserLoggedIn ? <LoginDataUser /> : <RegisterUser />}
          <LoginGoogle text={loginGoogleText} />
        </div>
      </div>
    </>
  );
}
