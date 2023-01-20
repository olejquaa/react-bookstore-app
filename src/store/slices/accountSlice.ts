import { createSlice } from "@reduxjs/toolkit";

interface IAccount {
  name: null | string;
  email: null | string;
  token: string;
  avatar: "";
  isAuth: boolean;
}

const initialState: IAccount = {
  name: "incognito",
  email: "",
  token: "",
  avatar: "",
  isAuth: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    getUserInfo: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export default accountSlice.reducer;

export const { toggleAuth, getUserInfo } = accountSlice.actions;
