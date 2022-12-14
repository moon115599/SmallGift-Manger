import axios from "axios";
import { api } from "../server/Api";

export const axiosEmailCheck = async (email) => {
  try {
    const response = await api.post(`../api/manager/${email}/exists`, {});
    if (!response.success) {
      alert(response.message);
      return false;
    }
    console.log(response);
    return true;
  } catch (error) {
    console.log("중복 확인에 실패하였습니다.");
    console.log(error);
    return false;
  }
};
export const axiosUsernameCheck = async (username) => {
  try {
    const response = await api.post(`../api/manager/${username}/exists`, {});
    if (!response.success) {
      alert(response.message);
      return false;
    }
    return true;
  } catch (error) {
    console.log("중복 확인에 실패하였습니다.");
    console.log(error);
    return false;
  }
};

export const axiosSignUpUser = async (dataTosubmit) => {
  try {
    const response = await api.post("../api/user/signup", dataTosubmit);
    if (!response.status == 200) {
      alert(response.msg);
      return false;
    }
    console.log("회원가입에 완료했습니다.");
    return true;
  } catch (error) {
    console.log(error);
    alert("회원가입에 실패하였습니다.");
    return false;
  }
};
