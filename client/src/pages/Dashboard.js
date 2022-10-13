import react from "react";
import { Navigate } from "react-router-dom";

import jwt_decode from 'jwt-decode';
import { getUserData } from "../service/api";

const Dashboard = () => {
  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("loggedin"));

  if (localStorage.getItem("loggedin") === "true") {

    const userData =  jwt_decode(localStorage.getItem("token"));
    console.log(userData);
    return <div>You have logged in successfully</div>;
  } else {
    return (
      <Navigate to='/login' />
    );
  }
};

export default Dashboard;
