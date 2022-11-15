import axios from "axios";
import { accessApi } from "../server/Api";

export const axiosGetProduct = async (setState) => {
  try {
    const response = await accessApi.get("../api/shops/1/products");
    if (response.status === 200) {
      console.log("성공적으로 데이터를 가져왔습니다.");
      // console.log(response.data.data);
      setState(response.data.data);
    } else {
      alert("데이터를 가져오는 데 실패하였습니다.");
    }
  } catch (error) {
    alert("데이터를 가져오는 데 실패하였습니다.");
    console.log(error);
  }
};

export const axiosRemoveProduct = async (productId) => {
  try {
    const response = await accessApi.delete(`../api/shops/1/products/${productId}`);
    if (response.status === 200) {
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
    const response = await accessApi.post("../api/manager/productList/modify", payload);
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
    const response = await accessApi.patch("../api/manager/productList", payload);
    if (response.code === 200) {
      console.log("노출 상태가 변경되었습니다.");
    } else {
      alert(response.message);
    }
  } catch (error) {
    alert("노출 상태 변경에 실패하였습니다.");
  }
};
