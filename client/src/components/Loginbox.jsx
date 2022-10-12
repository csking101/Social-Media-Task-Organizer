import React from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { loginUser } from "../service/api.js";

const Platform = styled(Paper)`
  padding: 20px;
  height: 60vh;
  width: 30vw;
  margin: 16vh auto;
  text-align: center;
`;

const UserIcon = styled(AccountCircleRoundedIcon)`
  color: green;
  transform: scale(3);
  margin: 20px auto;
  margin-bottom: 30px;
`;

const HeadingText = styled(Typography)`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 30px;
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
`;

const Submit = styled(Button)`
  color: black;
  background-color: yellow;
  margin-top: 25px;
  height: 8vh;
  width: 10vw;
`;

const Loginbox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitAction = () => {
    const data = {
      email: email,
      password: password,
    };

    loginUser(data);

    console.log("Loginbox component:User logged in successfully");
  };

  return (
    <Grid align="center">
      <Platform elevation={10}>
        <UserIcon></UserIcon>
        <HeadingText>Sign In</HeadingText>
        <Grid direction="column">
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
        </Grid>
        <Submit variant="contained" onClick={submitAction}>
          Log in
        </Submit>
      </Platform>
    </Grid>
  );
};

export default Loginbox;
