import axios from "axios";
import { api, accessApi } from "../server/Api";

export const axiosRegisterProduct = async (payload, managerId) => {
  try {
    const response = await accessApi.post(`./api/managers/${managerId}/shop/products`, payload);
    if (response.status === 201 || response.status === 200) {
      console.log("등록이 완료되었습니다.");
      return true;
    }
    alert(response.message);
    return false;
  } catch (error) {
    alert("등록이 실패하였습니다.");
    console.log(error);
    return false;
  }
};

export const axiosFileSubmit = async (payload) => {
  try {
    const response = await api.post("../api/manager/submit/file");
    if (!response.code === 200) {
      return false;
    }
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};
