// app/redux-provider.tsx

'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import store from './redux/store'; // Ajuste o caminho para o seu store

interface Props {
  children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
