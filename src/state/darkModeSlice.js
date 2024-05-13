import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    selectDark: (state) => {
      state.value = !state.value;
    },
  },
});

export const { selectDark } = counterSlice.actions;
export default counterSlice.reducer;
