import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storeReducer from './storeSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThumk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
