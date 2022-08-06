import axios from "axios";

export const axiosLogInUser = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/login", dataTosubmit);
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
