'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
// import { redirect } from 'next/navigation';

export default function UserTest() {
  const { user } = useSelector((state: RootState) => state.store);
  const { name, email, image } = user;
  // if (!name || !email) return redirect('/');

  return (
    <div suppressHydrationWarning>
      testando state name: {name} <br />
      testando state email: {email} <br />
      testando state image: {image ? image : 'sem imagem'} <br />
    </div>
  );
}
