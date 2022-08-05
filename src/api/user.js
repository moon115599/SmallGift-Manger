import axios from "axios";

export const axiosLogInUser = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/login", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    alert(error);
    return {
      error,
    };
  }
};

export const axiosSignUpUser = async (dataTosubmit) => {
  try {
    const response = await axios.post("/api/admin/signup", dataTosubmit);
    return {
      response,
    };
  } catch (error) {
    console.log(error);
    alert(error);
    return {
      error,
    };
  }
};
