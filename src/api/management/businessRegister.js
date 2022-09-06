import axios from "axios";

export const axiosRegisterBusiness = async (payload, setSubmitError) => {
  try {
    const response = await axios.post("/api/manager/registration/manager", payload);
    if (!response.code === 200) {
      alert(response.message);
      return false;
    }
  } catch (error) {
    alert(error);
    return false;
  }
  return true;
};

export const axiosCheckAccountValid = async (payload, setValidMsg) => {
  try {
    const response = await axios.post("/api/manager/check/account", payload);
    if (!response.code === 200) {
      setValidMsg(response.message);
      return false;
    }
    return false;
  } catch (error) {
    alert(error);
    return false;
  }
};
