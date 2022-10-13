import axios from "axios";

const URL = "http://localhost:5000";

export const registerUser = async (data) => {
  try {
    return await axios
      .post(`${URL}/api/register-user`, data)
      .then((response) => {
        console.log(response);
        console.log("Axios: User registered successfully!");
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios
      .post(`${URL}/api/login-user`, data)
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        console.log("Axios: User logged in successfully!");
        localStorage.setItem("token", token);
        localStorage.setItem("loggedin", true);
        console.log("Axios: Token has been set");
        return token;
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong Password!");
        localStorage.setItem("token", "");
        localStorage.setItem("loggedin", false);
        console.log("Axios: Token has been cleared");
        return "";
      });
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (email) => {
  try {
    return await axios
      .get(`${URL}/api/users/${email}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
};
