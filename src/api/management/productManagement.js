import axios from "axios";

export const axiosGetProduct = () => {
  try {
    const response = await axios.get("/api/manager/productList");
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
      return response;
    } else {
      console.log(response.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
