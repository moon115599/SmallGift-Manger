import axios from "axios";
import { server } from "./server";
import { useReIssueErrorHandle, useReIssueToken } from "../user/reIssueToken";
import { useCookies } from "react-cookie";

export const api = axios.create({
  baseURL: server,
  timeout: 10000,
  params: {},

  headers: {
    "Content-Type": "application/json",
  },
});

export const accessApi = axios.create({
  baseURL: server,
  timeout: 10000,
  params: {},

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  },
});

accessApi.interceptors.request.use(useReIssueToken, useReIssueErrorHandle);
