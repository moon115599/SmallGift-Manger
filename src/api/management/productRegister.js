import axios from "axios";
import { api, accessApi } from "../server/Api";

export const axiosRegisterProduct = async (payload) => {
  try {
    const response = await accessApi.post("./api/shops/1/products", payload);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
    } else {
      alert(response.message);
    }
  } catch (error) {
    alert("등록이 실패하였습니다.");
    console.log(error);
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
