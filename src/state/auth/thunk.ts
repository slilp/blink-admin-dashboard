import { signIn, checkToken } from "./api";
import { setToken, getToken, removeToken } from "./storage";
import { setAuthRedux, clearAuthRedux } from "./index";
import { LoginPara } from "./type";

export const login =
  (request: LoginPara) => async (dispatch: any, getState: any) => {
    try {
      const loginApi = await signIn(request);
      setToken({ accessToken: "my_token" });
      if (loginApi) {
        dispatch(
          setAuthRedux({
            username: request.username,
            firstName: "ทดสอบ",
            lastName: "ระบบ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQinCbJxl4NTCNp3fump_DZucXVXGGBVKiw&usqp=CAU",
            permission: [],
          })
        );
        return true;
      } else {
        dispatch(clearAuthRedux());
        return false;
      }
    } catch (error) {
      dispatch(clearAuthRedux());
      throw Error(error);
    }
  };

export const logout = () => async (dispatch: any) => {
  dispatch(clearAuthRedux());
  removeToken();
};

export const checkUser = () => async (dispatch: any) => {
  try {
    const token = getToken();
    if (token) {
      const check = await checkToken();
      if (check) {
        dispatch(
          setAuthRedux({
            username: "tester",
            firstName: "ทดสอบ",
            lastName: "ระบบ",
            permission: [],
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQinCbJxl4NTCNp3fump_DZucXVXGGBVKiw&usqp=CAU",
          })
        );
        return true;
      } else {
        dispatch(clearAuthRedux());
        removeToken();
        return false;
      }
    } else {
      dispatch(clearAuthRedux());
      removeToken();
      return false;
    }
  } catch (error) {
    dispatch(clearAuthRedux());
    removeToken();
    throw Error(error);
  }
};
