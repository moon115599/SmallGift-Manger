import axios from "axios";
import { accessApi } from "../server/Api";

export const axiosGetHome = async (setState) => {
  try {
    const response = await axios.get("../api/manager/home");
    if (response.code === 200) {
      console.log("데이터를 불러오는데 성공했습니다.");
      setState(response);
    } else {
      alert(response.massage);
    }
  } catch (error) {
    alert("데이터를 불러오는데 실패했습니다.");
  }
};

export const axiosGetManger = async () => {
  try {
    const response = await accessApi.get("./api/manager/info");
    console.log(response.data);
    if (response.status === 200) {
      console.log("데이터를 불러오는데 성공했습니다.");
      // window.localStorage.setItem("managerId", responsee);
    } else {
      alert(response.msg);
    }
  } catch (error) {
    alert("데이터를 불러오는데 실패했습니다.");
  }
};
