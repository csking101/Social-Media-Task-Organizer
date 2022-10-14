import react from "react";
import { Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode";
import { Grid, styled, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import ClubTaskBox from "../components/ClubTaskBox";
import SubTaskBox from "../components/SubTaskBox";
import ItemView from "../components/ItemView";

const Dashboard = () => {
  console.log(JSON.parse(localStorage.getItem("token")));
  console.log(localStorage.getItem("loggedin"));

  if (localStorage.getItem("loggedin") === "true") {
    const userData = jwt_decode(localStorage.getItem("token"));
    console.log(userData);

    const Flexbox = styled("Box")`
      display: flex;
      justify-content: space-between;
      height: 82vh;
      margin-top: 4vh;
    `;

    return (
      <div>
        <Navbar />
        <Flexbox>
          <ClubTaskBox club={userData.club} />
          <SubTaskBox name={userData.name}/>
          <ItemView />
        </Flexbox>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Dashboard;
