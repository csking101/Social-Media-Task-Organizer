import axios from "axios";

export const registerUser = async (data) => {
  URL = "http://localhost:5000";

  try {
    return await axios
      .post(`${URL}/api/register-user`, data)
      .then(console.log("User registered successfully!"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
