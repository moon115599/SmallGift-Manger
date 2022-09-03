import axios from "axios";

export const axiosFindId = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/find/id", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    alert(error);
    console.log(error);
    return {
      error,
    };
  }
};

export const axiosFindPwd = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/find/password", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    alert(error);
    console.log(error);
    return {
      error,
    };
  }
};
