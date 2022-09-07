import axios from "axios";

export const axiosGetProduct = async (setState) => {
  try {
    const response = await axios.get("/api/manager/productList/on");
    if (response.code === 200) {
      console.log("성공적으로 데이터를 가져왔습니다.");
      setState(response);
    } else {
      alert("데이터를 가져오는 데 실패하였습니다.");
    }
  } catch (error) {
    alert("데이터를 가져오는 데 실패하였습니다.");
  }
};

export const axiosRemoveProduct = async (productId) => {
  try {
    const response = await axios.delete("/api/manager/productList/remove", productId);
    if (response.code === 200) {
      console.log("삭제가 완료되었습니다.");
    } else {
      alert("삭제가 실패하였습니다.");
    }
  } catch (error) {
    alert("삭제가 실패하였습니다.");
  }
};

export const axiosModifyProduct = async (payload) => {
  try {
    const response = await axios.post("/api/manager/productList/modify", payload);
    if (response.code === 200) {
      console.log("수정이 완료되었습니다.");
    } else {
      alert(response.message);
    }
  } catch (error) {
    alert("삭제가 실패하였습니다.");
  }
};

export const axiosOnProduct = async (payload) => {
  try {
    const response = await axios.patch("/api/manager/productList", payload);
    if (response.code === 200) {
      console.log("노출 상태가 변경되었습니다.");
    } else {
      alert(response.message);
    }
  } catch (error) {
    alert("노출 상태 변경에 실패하였습니다.");
  }
};
