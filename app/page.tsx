'use client';

import LoginGoogle from './components/LoginGoogle';
import LoginDataUser from './components/LoginDataUser';

export default function Login() {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-20 gap-10'>
        <LoginDataUser />
        <LoginGoogle />
      </div>
    </>
  );
}
