import axios from "axios";
import { api } from "../server/Api";

export const axiosEmailCheck = async ({ email, msg, setMsg }) => {
  try {
    const response = await api.post(`/api/admin/${email}/exists`, {});
    setMsg({ ...msg, emailCheck: response.message });
    if (!response.success) {
      return false;
    }
    return true;
  } catch (error) {
    alert("중복 확인에 실패하였습니다.");
  }
  return 0;
};
export const axiosUsernameCheck = async (username, msg, setMsg) => {
  try {
    const response = await api.post(`/api/admin/${username}/exists`, {});
    setMsg({ ...msg, usernameCheck: response.message });
    if (!response.success) {
      return false;
    }
    return true;
  } catch (error) {
    alert("중복 확인에 실패하였습니다.");
  }
  return 0;
};

export const axiosSignUpUser = async (dataTosubmit) => {
  try {
    const response = await api.post("/api/admin/signup", dataTosubmit);
    if (!response.success) {
      alert(response.message);
      return false;
    }
    return true;
  } catch (error) {
    alert("회원가입에 실패하였습니다.");
  }
  return 0;
};
