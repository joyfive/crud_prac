import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestLogin } from "../../axios/index";

const initialState = {
  token: null,
};

export const __requestLogin = createAsyncThunk(
  "__requestLogin",
  async (payload, thunkAPI) => {
    const response = await requestLogin(payload);

    const token = response.headers.Authorization;

    localStorage.setItem("token", token);

    thunkAPI.dispatch(setToken(token));
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {},
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
