import axios from "axios";
import { accessApi } from "../server/Api";

export const axiosGetHome = async (setState) => {
  try {
    const response = await axios.get("./api/manager/home");
    if (response.code === 200) {
      console.log("데이터를 불러오는데 성공했습니다.");
      setState(response);
    } else {
      alert(response.massage);
    }
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.");
  }
};

export const axiosGetManager = async () => {
  try {
    const response = await accessApi.get("./api/manager/info");
    if (response.status === 200) {
      console.log("데이터를 불러오는데 성공했습니다.");
      if (!window.localStorage.getItem("managerId")) {
        window.localStorage.setItem("managerId", response.data.data.managerId);
        console.log("managerId 추가");
      }
    } else {
      console.log(response.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
