const AUTH_KEY = "user";

interface AuthToken {
  accessToken: string;
}

export const setToken = ({ accessToken }: AuthToken) => {
  localStorage.setItem(AUTH_KEY, accessToken);
};

export const getToken = () => {
  return localStorage.getItem(AUTH_KEY);
};

export const removeToken = () => {
  return localStorage.removeItem(AUTH_KEY);
};
