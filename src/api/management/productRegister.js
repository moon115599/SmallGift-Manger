import axios from "axios";

export const axiosRegisterProduct = async (payload) => {
  try {
    const response = await axios.post("/api/manager/registration/product", payload);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
    } else {
      alert(response.message);
    }
  } catch (error) {
    alert("등록이 실패하였습니다.");
  }
};
