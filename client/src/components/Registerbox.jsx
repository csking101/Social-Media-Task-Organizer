import React from "react";
import {
  Grid,
  Paper,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Platform = styled(Paper)`
  padding: 20px;
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
    color:black;
    background-color:yellow;
    margin-top:25px;
    margin-bottom:20px;
    height:8vh;
    width:10vw;
`

function Loginbox() {
  return (
    <Grid align="center">
      <Platform elevation={10}>
        <UserIcon></UserIcon>
        <HeadingText>Register</HeadingText>
        <Grid direction="column">
        <InputField
            id="standard-basic"
            label="Name"
            variant="standard"
            required
          />
          <InputField
            id="standard-basic"
            label="Roll Number"
            variant="standard"
            required
          />
          <InputField
            id="standard-basic"
            label="Club"
            variant="standard"
            required
          />
          <InputField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            required
          />
          <InputField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            required
          />
          <InputField
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            type="password"
            required
          />
        </Grid>
        <Submit variant="contained">Register</Submit>
      </Platform>
    </Grid>
  );
}

export default Loginbox;
