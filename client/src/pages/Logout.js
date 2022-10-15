import { Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.setItem("token", "");
  localStorage.setItem("loggedin", "false");

  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("loggedin"));

  return <Navigate to="/login" />;
};

export default Logout;
