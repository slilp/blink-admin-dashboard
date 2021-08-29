import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateSelector, UserInfoApiRes } from "./type";

const initialState: AuthStateSelector = {
  user: {
    username: "",
    firstName: "",
    lastName: "",
    img: "https://www.thaiticketmajor.com/variety/img_content/imgeditor/188556131_2373130352820950_3415082810901880747_n.jpg",
    permission: ["HOME", "MENU_2", "MENU_2_1", "MENU_3"],
  },
  isAuthenticated: true,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthRedux: (state, { payload }: PayloadAction<UserInfoApiRes>) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    clearAuthRedux: (state) => {
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
  },
});

// Actions
export const { setAuthRedux, clearAuthRedux } = AuthSlice.actions;

export default AuthSlice.reducer;
