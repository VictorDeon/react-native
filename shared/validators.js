export const validateEmail = email => {
  if (!email) {
    return false;
  }

  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return true;
  }

  return false;
};
