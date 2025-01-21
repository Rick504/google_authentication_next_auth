'use client';

import { useStore } from 'react-redux';
import { RootState } from '../redux/store';

export default function UserTest() {
  const _store = useStore();
  const { store } = _store.getState() as RootState;
  return (
    <div suppressHydrationWarning>
      testando state:
      {store.user ? store.user.name : 'Usuário não encontrado'}
    </div>
  );
}
