import axios from "axios";

export const axiosFindId = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/find/id", dataTosubmit);
    if (response.code === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
  return 0;
};

export const axiosFindPwd = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/find/password", dataTosubmit);
    if (response.code === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
  return 0;
};
