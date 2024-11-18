import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'store',
  initialState: {
    user: {},
    loading: false,
  },
  reducers: {
    isLoading: (state) => {
      return { ...state, loading: true };
    },
    setUser: (state, { payload }) => {
      return { ...state, user: payload };
    },
  },
});

export const { isLoading, setUser } = slice.actions;
export default slice.reducer;
