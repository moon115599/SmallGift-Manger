import axios from "axios";
import { accessApi, api } from "../server/Api";

export const axiosRegisterBusiness = async (payload) => {
  try {
    const response = await accessApi.post("/api/manager", payload);
    if (!response.status === 200) {
      alert(response.msg);
      return false;
    }
    console.log("suuccess");
    return true;
  } catch (error) {
    // alert(error);
    console.log(error);

    return false;
  }
};

export const axiosGetBusiness = async (setData) => {
  try {
    const response = await accessApi.get("/api/1/manager");
    if (!response.status === 200) {
      alert(response.msg);
      return false;
    }
    setData(response.data.data);
    console.log("suuccess");
    return true;
  } catch (error) {
    // alert(error);
    console.log(error);
    return false;
  }
};

export const axiosCheckAccountValid = async (payload, setValidMsg) => {
  try {
    const response = await api.post("/api/manager/check/account", payload);
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
    const response = await api.post("/api/manager/submit/file", payload);
    if (!response.code === 200) {
      return false;
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};
