import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { isLoading } from '../redux/storeSlice';
// import { getServerSession } from 'next-auth';
// import { SessionGoole } from '../interfaces/user';
// import { AuthProviderGoogle } from '../interfaces/auth';
// import { authService } from '@/app/services/authGoogleService';

type LoginGoogleProps = {
  text: string;
};

export default function LoginGoogle({ text }: LoginGoogleProps) {
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    dispatch(isLoading(true));
    const result = await signIn('google', { callbackUrl: '/dashboard' });

    console.log('asddd', result);

    // const authProviderGoogle: AuthProviderGoogle = {
    //   provider: 'google',
    //   idTokenGoogle: process.env.GOOGLE_ID || '',
    //   ...session,
    // };

    // const { token } = await authService.authenticateWithGoogle(
    //   authProviderGoogle
    // );

    // console.log('token user page', token);
  };

  return (
    <div className='center-full mt-4'>
      <small className='mb-2'>{text}</small>
      <button className='flex border p-2' onClick={() => handleSignIn()}>
        <Image
          src='/imgs/icons/svg/google.svg'
          alt='Descrição do Icone'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
