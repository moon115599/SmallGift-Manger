import axios from "axios";
import { server } from "./server.js";
import { reIssueErrorHandle, reIssueToken } from "../user/reIssueToken";

export const Api = axios.create({
  baseURL: server,
  timeout: 10000,
  params: {},
});

Api.interceptors.request.use(reIssueToken, reIssueErrorHandle);
