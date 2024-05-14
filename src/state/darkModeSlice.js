import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { darkMode } = counterSlice.actions;
export const selectedDark = (state) => state.darkTheme.value; //то что написанно в store
export default counterSlice.reducer;
