import axios from "axios";

export const axiosRegisterProduct = (payload) => {
  try {
    const response = await axios.post("/api/manager/registration/product", payload);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
    } else {
      console.log(response.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
