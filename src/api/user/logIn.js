import axios from "axios";
import { api } from "../server/Api";

export const axiosLogInUser = async (dataToSubmit, setCookies) => {
  try {
    const response = await api.post("./api/v1/login", JSON.stringify(dataToSubmit));
    if (!response.status === 200) {
      console.log(response);
      alert("로그인에 실패했습니다.");
      return false;
    }
    const today = new Date();
    const TOKEN_TIME_OUT = 600 * 1000;
    const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;
    const expireReissueToken = today.setDate(today.getDate() + 7);
    // 만료 시간 설정
    // window.localStorage.setItem("accessToken", 1);
    console.log(response);
    window.localStorage.setItem("accessToken", response.data.jwtAccessToken);
    window.localStorage.setItem("expireAccessToken", expireAccessToken);
    setCookies("refresh_token", response.data.jwtRefreshToken, {
      expires: new Date(expireReissueToken),
    });
    return true;
  } catch (error) {
    console.log(error);
    alert("로그인에 실패했습니다.");
    return false;
  }
  return false;
};
