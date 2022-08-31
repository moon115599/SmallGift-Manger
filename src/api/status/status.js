import axios from "axios";

export const axiosGetStatus = async (payload, setState) => {
  try {
    const response = await axios.get("/api/manager/sales/status", payload);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
      setState(response);
    } else {
      console.log(response.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
