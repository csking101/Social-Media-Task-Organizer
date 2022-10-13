import react from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("loggedin"));

  if (localStorage.getItem("loggedin") === "true") {
    return <div>You have logged in successfully</div>;
  } else {
    return (
      <Navigate to='/login' />
    );
  }
};

export default Dashboard;
