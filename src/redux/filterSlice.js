import { createSlice } from '@reduxjs/toolkit';

const filter = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    onFilterChange(state, action) {
        state = action.payload;
        return state;
    },
  }, 
});

export const { onFilterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;