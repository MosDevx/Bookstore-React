import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const categoriesSlice = createSlice({

  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under Construction',
  },
});

export const selectStatus = (state) => state.categories;

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
