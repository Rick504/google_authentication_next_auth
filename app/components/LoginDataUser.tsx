import { signIn } from 'next-auth/react';
import { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export default function LoginDataUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEmailValid = (email: string) => {
    return isEmail(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    }

    setEmailError('');

    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <div>
      <form className='text-center' onSubmit={handleLogin}>
        <div className='flex items-center my-2'>
          <label htmlFor='email' className='mr-2'>
            E-mail:
          </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={50}
            className={`border p-1 flex-grow ${
              emailError ? 'border-red-500' : ''
            }`}
          />
        </div>
        {emailError && (
          <div className='text-red-500 text-sm mt-1'>{emailError}</div>
        )}
        <div className='flex items-center my-2'>
          <label htmlFor='password' className='mr-2 w-full text-right'>
            Senha:
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={150}
            className='border p-1 flex-grow'
          />
        </div>
        <button
          type='submit'
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
