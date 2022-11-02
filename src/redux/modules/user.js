import { createSlice } from "@reduxjs/toolkit";
import { delStorage, setStorage } from "../../common";

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      setStorage("token", action.payload);

      state.token = action.payload;
    },
    clearToken: (state) => {
      delStorage("token");

      state.token = null;
    },
  },
});

export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
