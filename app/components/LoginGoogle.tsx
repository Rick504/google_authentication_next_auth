import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { isLoading } from '../redux/storeSlice';

export default function LoginGoogle({ text }: { text: string }) {
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    dispatch(isLoading(true));
    const result = await signIn('google', { callbackUrl: '/dashboard' });
    console.log('result::', result);
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
