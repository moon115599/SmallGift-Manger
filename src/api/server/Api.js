import axios from "axios";
import { server } from "./server.js";
import { reIssueErrorHandle, reIssueToken } from "../user/reIssueToken";
import { useCookies } from "react-cookie";

const [cookies] = useCookies([]);

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
    Authorization: `Bearer ${cookies.token}`,
  },
});

accessApi.interceptors.request.use(reIssueToken, reIssueErrorHandle);
