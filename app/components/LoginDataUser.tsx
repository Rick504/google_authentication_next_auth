import { signIn } from 'next-auth/react';
import { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import { useDispatch } from 'react-redux';
import { isLoading } from '../redux/storeSlice';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginDataUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const dispatch = useDispatch();

  const isEmailValid = (email: string) => {
    return isEmail(email);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    }

    setEmailError('');
    dispatch(isLoading(true));

    signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <div className='flex flex-col items-center'>
      <form className='text-center' onSubmit={handleLogin}>
        <div className='flex flex-col items-start my-2'>
          <label htmlFor='email' className='my-2'>
            E-mail:
          </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={50}
            className={`border border-black p-1 flex-grow px-2 ${
              emailError ? 'border-red-500' : ''
            }`}
          />
        </div>
        {emailError && (
          <div className='text-red-500 text-sm mt-1'>{emailError}</div>
        )}
        <div className='flex flex-col items-start my-2'>
          <label htmlFor='password' className='my-2'>
            Senha:
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={150}
            className='border border-black p-1 flex-grow px-2'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='relative left-64 transform -translate-y-7 -translate-x-6 text-gray-600'
          >
            {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button
          type='submit'
          className='mt-4 w-full py-2 bg-blue-500 text-white rounded'
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
