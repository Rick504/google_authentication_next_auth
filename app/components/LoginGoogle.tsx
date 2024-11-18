import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { isLoading } from '../redux/storeSlice';

export default function LoginGoogle() {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(isLoading(true));
    signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <div>
      <button className='flex border p-2' onClick={() => handleSignIn()}>
        <Image
          src='/imgs/icons/svg/google.svg'
          alt='Descrição do Icone'
          width={24}
          height={24}
        />
        <p>Login Google</p>
      </button>
    </div>
  );
}
