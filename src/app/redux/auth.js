import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    YOUR_AUTH_KEY: "NO",
    YOUR_REFRESH_KEY: "KEY",
  },
  reducers: {
    setAuthToker: (state, action) => {
      state.YOUR_AUTH_KEY = action.payload;
    },
    setRefToker: (state, action) => {
      state.YOUR_REFRESH_KEY = action.payload;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const selecAuthKey = (state) => state.auth.YOUR_AUTH_KEY
export const selecRefKey = (state) => state.auth.YOUR_REFRESH_KEY
export const { setAuth, setRefToker, setAuthToker  } = authSlice.actions;
export default authSlice.reducer;
