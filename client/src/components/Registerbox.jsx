import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { registerUser } from "../service/api.js";

const Platform = styled(Paper)`
  padding: 20px;
  width: 30vw;
  margin: 16vh auto;
  text-align: center;
  background-color: #39a2ae;
`;

const UserIcon = styled(AccountCircleRoundedIcon)`
  color: #04151f;
  transform: scale(3);
  margin: 20px auto;
  margin-bottom: 30px;
`;

const HeadingText = styled(Typography)`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 30px;
  color: #04151f;
`;

const SubHeadingText = styled(Typography)`
  font-size: 20px;
  font-weight: 250;
  margin-left: 0;
`;

const InputField = styled(TextField)`
  margin: 10px;
  padding: 10px;
  width: 20vw;
  color: #ea3546;
`;

const Submit = styled(Button)`
  background-color: #04151f;
  color: #39a2ae;
  margin-top: 25px;
  margin-bottom: 20px;
  height: 8vh;
  width: 10vw;
`;

const LoginRedirect = styled('p')({
  "text-decoration" : "none",
  "color" : "#04151F",
})

const Registerbox = () => {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [club, setClub] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const submitAction = () => {
    const data = {
      name: name,
      rollno: rollno,
      club: club,
      email: email,
      password: password,
      password2: cpassword,
    };

    registerUser(data);

    console.log("User registered successfully");
  };

  return (
    <Grid align="center">
      <Platform elevation={10}>
        <UserIcon></UserIcon>
        <HeadingText>Register</HeadingText>
        <Grid>
          <InputField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            id="standard-basic"
            label="Roll Number"
            variant="standard"
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
            required
          />
          <InputField
            id="standard-basic"
            label="Club"
            variant="standard"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            required
          />
          <InputField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            type="password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
          />
        </Grid>
        <Submit variant="contained" onClick={submitAction}>
          Register
        </Submit>
        <Link to="/login"><LoginRedirect>Sign in instead</LoginRedirect></Link>
      </Platform>
    </Grid>
  );
};

export default Registerbox;
