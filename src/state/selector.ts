import { useSelector } from "react-redux";
import { AuthStateSelector } from "./auth/type";
import { State } from "./type";

export const useAuthSelector = (): AuthStateSelector => {
  const auth = useSelector((state: State) => state.auth);
  return auth;
};
