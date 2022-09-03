import axios from "axios";

export const axiosEmailCheck = async (email) => {
  try {
    const response = await axios.post(`/api/admin/${email}/exists`, {});
    return {
      response,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};
export const axiosUsernameCheck = async (id) => {
  try {
    const response = await axios.post(`/api/admin/${id}/exists`, {});
    return {
      response,
    };
  } catch (error) {
    console.log(error);
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
