import axios from "axios";
import React, { useState } from "react";
import { LOGIN_USER, SIGNUP_USER } from "./types";
import { axiosLogInUser, axiosSignUpUser } from "../../api/user";

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
