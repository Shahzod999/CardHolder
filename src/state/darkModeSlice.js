import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("dark")) || false,
};

export const counterSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.value = !state.value;
      localStorage.setItem("dark", JSON.stringify(state.value))
    },
  },
});

export const { darkMode } = counterSlice.actions;
export const selectedDark = (state) => state.darkTheme.value; //то что написанно в store
export default counterSlice.reducer;
