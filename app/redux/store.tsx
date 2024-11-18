import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './userSlice';

const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
