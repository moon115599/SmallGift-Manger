import axios from "axios";

export const axiosFindId = async (dataTosubmit, setData) => {
  try {
    const response = await axios.post("/api/admin/find/id", dataTosubmit);
    if (response.code === 200) {
      setData(response.username);
      return true;
    }
  } catch (error) {
    return false;
  }
  return 0;
};

export const axiosFindPwd = async (dataTosubmit, setData) => {
  try {
    const response = await axios.post("/api/admin/find/password", dataTosubmit);
    if (response.code === 200) {
      setData(response.username);
      return true;
    }
  } catch (error) {
    return false;
  }
  return 0;
};
