import axios from "axios";

export const axiosLogInUser = async (dataTosubmit, setCookies) => {
  try {
    const response = await axios.post("/api/admin/login", dataTosubmit);
    if (!response.success) {
      alert(response.message);
      return false;
    }
    const today = new Date();
    const TOKEN_TIME_OUT = 600 * 1000;
    const expireAccessToken = today.getTime() + TOKEN_TIME_OUT;
    const expireReissueToken = today.setDate(today.getDate() + 7);
    setCookies("token", response.data.accessToken, {
      expires: new Date(expireAccessToken),
    });
    setCookies("reissue_token", response.data.reissueToken, {
      expires: new Date(expireReissueToken),
    });

    return true;
  } catch (error) {
    alert("로그인에 실패하였습니다.");
  }
  return 0;
};
