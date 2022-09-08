import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const isLogin = () => {
  if (cookies.get("token") === "undefined") {
    return false;
  }
  return cookies.get("token");
};
