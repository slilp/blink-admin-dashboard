export interface AuthStateSelector {
  user: UserInfoApiRes;
  isAuthenticated: boolean;
}

export interface UserInfoApiRes {
  username: string;
  firstName: string;
  lastName: string;
  img: string;
  permission: string[];
}

export interface LoginPara {
  username: string;
  password: string;
}
