'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function UserTest() {
  const { user } = useSelector((state: RootState) => state.store);

  return (
    <div suppressHydrationWarning>
      testando state name: {user.name} <br />
      testando state email: {user.email} <br />
      testando state image: {user.image} <br />
    </div>
  );
}
