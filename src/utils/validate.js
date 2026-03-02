export const checkValidData = (email, password) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
      password,
    );

  if (!isValidEmail) {
    return "Invalid email";
  }
  if (!isValidPassword) {
    return "Invalid password";
  }
  return null;
};
