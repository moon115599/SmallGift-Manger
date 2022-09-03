export const validateUsername = (username) => {
  if (username.length < 2 || username.length > 10) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};

export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (!passwordRegex.test(password)) {
    return false;
  }
  return true;
};

export const validateRePassword = (password, rePassword) => {
  if (password === rePassword) {
    return true;
  }
  return false;
};
