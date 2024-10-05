import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  isAuth: boolean,
  email: string | null,
  phoneNumber: string | null,
}


export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    email: null,
    phoneNumber: null,
  } as User,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;