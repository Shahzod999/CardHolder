import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    darkTheme: darkModeReducer,
    authUserState: authReducer,
  },
});
