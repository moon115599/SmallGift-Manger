import axios from "axios";

export const axiosGetStatus = async (payload, setState) => {
  try {
    const response = await axios.get("../api/manager/sales/status", payload);
    if (response.code === 200) {
      console.log("성공적으로 데이터를 가져왔습니다.");
      setState(response);
    } else {
      alert(response.msg);
    }
  } catch (error) {
    alert("데이터를 가져오는 데 실패했습니다.");
  }
};
