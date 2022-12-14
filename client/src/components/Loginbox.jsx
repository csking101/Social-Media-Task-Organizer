import React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  background-color:#39A2AE;
`;

const UserIcon = styled(AccountCircleRoundedIcon)`
  color: #04151F;
  transform: scale(3);
  margin: 20px auto;
  margin-bottom: 30px;
`;

const HeadingText = styled(Typography)`
  font-size: 22px;
  color: #04151F;
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
  color: #EA3546;
`;

const Submit = styled(Button)`
  background-color: #04151F;
  color: #39A2AE;
  margin-top: 25px;
  height: 8vh;
  width: 10vw;
`;

const RegisterRedirect = styled('p')({
  "textDecoration" : "none",
  "color" : "#04151F",
})

const Loginbox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitAction = async () => {
    const data = {
      email: email,
      password: password,
    };

    await loginUser(data);

    const token = localStorage.getItem("token");

    await console.log("submitAction function: Token obtained is-", token);

    navigate("/dashboard");
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
        <Link to="/register"><RegisterRedirect>Sign up instead</RegisterRedirect></Link>
      </Platform>
    </Grid>
  );
};

export default Loginbox;
