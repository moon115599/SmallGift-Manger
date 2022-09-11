import axios, { AxiosRequestConfig } from "axios";
import { useCookies } from "react-cookie";
import { RefreshTokenResponse } from "util/types/Response";
import { server } from "config/config.json";
import moment from "moment";

export const reIssueToken = async ({ cookies, setCookies, removeCookies }) => {
  const refreshToken = cookies.refreshToken;
  const expire = localStorage.getItem("expireAccessToken");
  let accessToken = cookies.token;

  // 토큰이 만료 10초전이고, refreshToken 이 저장되어 있을 때
  if (moment(expire).diff(moment()) < 0 && refreshToken) {
    const body = {
      jwtAccessToken: accessToken,
      jwtRefreshToken: refreshToken,
    };

    try {
      const response = await axios.post("/api/admin/reissueAccessToken", body);
      if (response.code === 200) {
        const today = new Date();
        const TOKEN_TIME_OUT = 600 * 1000;
        const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;
        setCookies("token", response.data.jwtAccessToken, {
          expires: new Date(expireAccessToken),
        });
        localStorage.setItem("expireAccessToken", expireAccessToken);
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert("token이 갱신되지 않았습니다.");
    }
  }
};

export const reIssueErrorHandle = () => {
  removeCookies("reissue_token");
};
