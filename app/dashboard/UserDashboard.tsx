'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { UserGoole } from '../interfaces/user';

export default function UserDashboard({ user }: { user: UserGoole }) {
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-20'>
      {user.image && (
        <Image
          src={user.image}
          width={100}
          height={100}
          alt='Picture of the author'
          style={{
            borderRadius: '50%',
          }}
        />
      )}
      <p>Bem Vindo a Home {user.name}!</p>
      <p>Email: {user.email}</p>

      <button className='border' onClick={() => signOut()}>
        Sair
      </button>
    </div>
  );
}
