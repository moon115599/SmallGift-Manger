import axios from "axios";

export const axiosGetProduct = async (setState) => {
  try {
    const response = await axios.get("/api/manager/productList/on");
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
      setState(response);
    }
  } catch (error) {
    console.log(error);
  }
};

export const axiosRemoveProduct = async (productId) => {
  try {
    const response = await axios.delete("/api/manager/productList/remove", productId);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const axiosModifyProduct = async (productId) => {
  try {
    const response = await axios.post("/api/manager/productList/modify", productId);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const axiosOnProduct = async (productId) => {
  try {
    const response = await axios.patch("/api/manager/productList", productId);
    if (response.code === 200) {
      console.log("등록이 완료되었습니다.");
    }
  } catch (error) {
    console.log(error);
  }
};
