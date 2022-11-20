import axios from "axios";

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
