import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storeReducer from './storeSlice';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

const store = configureStore({
  reducer: {
    store: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThumk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
