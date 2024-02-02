import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  inputVal: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += parseFloat(state.inputVal);
    },
    decrement: (state) => {
      state.value -= parseFloat(state.inputVal);
    },
    InputVal: (state, action) => {
      state.inputVal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, InputVal } = counterSlice.actions;

export default counterSlice.reducer;
