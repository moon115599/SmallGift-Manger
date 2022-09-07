import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const isLogin = () => {
  return !!cookies.get("token");
};
