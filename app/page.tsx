'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <div className='flex justify-center mt-20'>
        <button
          className='flex border p-2'
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <Image
            src='/imgs/icons/svg/google.svg'
            alt='Descrição do Icone'
            width={24}
            height={24}
          />
          <p>Login Google</p>
        </button>
      </div>
    </>
  );
}
