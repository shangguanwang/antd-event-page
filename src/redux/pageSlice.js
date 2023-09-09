import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;
export const selectCurrentPage = (state) => state.pagination.currentPage;
export default pageSlice.reducer;
