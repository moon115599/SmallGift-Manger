import axios from "axios";
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from "./types";

export const logInUser = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/v1/login", dataTosubmit);
    return {
      type: LOGIN_USER,
      payload: response,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};
// 회원가입
export const signUpUser = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/v1/signup", dataTosubmit);
    return {
      type: SIGNUP_USER,
      payload: response,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};

export const logOutUser = async () => {
  try {
    const response = await axios.get("/api/v1/logout");
    return {
      type: LOGOUT_USER,
      payload: response,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};
