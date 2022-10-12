import axios from "axios";

const URL = "http://localhost:5000";

export const registerUser = async (data) => {
  try {
    return await axios
      .post(`${URL}/api/register-user`, data)
      .then(console.log("User registered successfully!"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios
      .post(`${URL}/api/login-user`, data)
      .then(console.log("Axios: logged user in successfully!"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
