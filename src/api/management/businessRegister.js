import axios from "axios";
import { accessApi } from "../server/Api";

export const axiosRegisterBusiness = async (payload, setSubmitError) => {
  try {
    const response = await accessApi.post("/api/manager", payload);
    if (!response.code === 200) {
      alert(response.message);
      return false;
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};

export const axiosCheckAccountValid = async (payload, setValidMsg) => {
  try {
    const response = await accessApi.post("/api/manager/check/account", payload);
    if (!response.code === 200) {
      setValidMsg(response.message);
      return false;
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};

export const axiosFileSubmit = async (payload) => {
  try {
    const response = await accessApi.post("/api/manager/submit/file", payload);
    if (!response.code === 200) {
      return false;
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};
