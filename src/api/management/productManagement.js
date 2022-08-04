import axios from "axios";

export const axiosGetProduct = async (setState) => {
  try {
    const response = await axios.get("/api/manager/productList");
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
      setState(response);
    }
  } catch (error) {
    console.log(error);
  }
};
