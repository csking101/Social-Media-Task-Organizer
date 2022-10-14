import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Paper, styled, Grid, Typography, Box } from "@mui/material";

/*
    black = #04151F
    blue = #39A2AE
    red = #EA3546
    yellow = #FF9000
*/

const Platform = styled(Paper)`
  background-color: #04151f;
  width: 100%;
  height: 10vh;
`;

const Name = styled(Typography)`
  color: #ff9000;
  font-size: 26px;
  font: montserrat;
  padding: 20px;
  margin-left: 5px;
`;

const Club = styled(Typography)`
  color: #39a2ae;
  font-size: 26px;
  font: montserrat;
  padding: 20px;
  font-weight: 400;
  text-align:center;
`;

const Logout = styled(Typography)`
  color: #ea3546;
  font-size: 26px;
  font: montserrat;
  padding: 20px;
`;

const Flexbox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Linker = styled(Link)`
  color: #ea3546;
  text-decoration: none;
`;

function Navbar() {
  const { name, club } = jwt_decode(localStorage.getItem("token"));

  return (
    <div>
      <Platform elevation={10}>
        <Flexbox>
          <Name>WELCOME, {name.toUpperCase()}</Name>
          <Club>CLUB: {club.toUpperCase()}</Club>

          <Logout>
            <Linker to="/logout">LOGOUT</Linker>
          </Logout>
        </Flexbox>
      </Platform>
    </div>
  );
}

export default Navbar;
