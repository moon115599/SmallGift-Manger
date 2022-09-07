import axios from "axios";

export const axiosLogInUser = async (dataTosubmit, setCookies) => {
  try {
    const response = await axios.post("/api/admin/login", dataTosubmit);
    if (!response.success) {
      alert(response.message);
      return false;
    }
    setCookies("token", response.data.token);
    return true;
  } catch (error) {
    alert("로그인에 실패하였습니다.");
  }
  return 0;
};
