import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'store',
  initialState: {
    user: {
      name: 'client value',
      email: 'client value',
      image: 'client value',
    },
    loading: false,
  },
  reducers: {
    isLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { isLoading, setUser } = slice.actions;
export default slice.reducer;
