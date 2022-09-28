import axios from "axios";

export const axiosChangePwd = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/change/password", dataTosubmit);
    if (response.code === 200) {
      return true;
    }
    alert(response.msg);
    return false;
  } catch (error) {
    return false;
  }
};
