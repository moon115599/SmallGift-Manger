import axios from "axios";
import React, { useState } from "react";
import { LOGIN_USER, SIGNUP_USER } from "./types";
import { axiosLogInUser } from "../../api/user/logIn";
import { axiosSignUpUser } from "../../api/user/signUp";

// 로그인
export const logInUser = (dataTosubmit) => {
  return {
    type: LOGIN_USER,
    payload: axiosLogInUser(dataTosubmit),
  };
};
// 회원가입
export const signUpUser = (dataTosubmit) => {
  return {
    type: SIGNUP_USER,
    payload: axiosSignUpUser(dataTosubmit),
  };
};
