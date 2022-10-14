import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Grid,
  Typography,
  styled,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import jwt_decode from "jwt-decode";
import { postNewTask } from "../service/api";

const Platform = styled(Paper)`
  padding: 20px;
  width: 30vw;
  margin: 16vh auto;
  text-align: center;
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
  margin-bottom: 20px;
  height: 8vh;
  width: 10vw;
`;

const AddTaskBox = () => {
  const userData = jwt_decode(localStorage.getItem("token"));

  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [deadline, setDeadline] = useState("");
  const [club, setclub] = useState(userData.club);
  const creator = userData.id;

  const navigate = useNavigate();

  if (localStorage.getItem("loggedin") === "true") {
    const submitAction = async () => {
      const data = {
        id:id,
        title:title,
        desc:description,
        platform:platform,
        deadline:deadline,
        club:club,
        creator:creator
      };

      await postNewTask(data);

      navigate("/dashboard");
    };

    return (
      <Grid align="center">
        <Platform elevation={10}>
          <HeadingText>ADD TASK</HeadingText>
          <Grid>
            <InputField
              id="standard-basic"
              label="ID number"
              variant="standard"
              value={id}
              onChange={(e) => setID(parseInt(e.target.value))}
              required
            />
            <InputField
              id="standard-basic"
              label="Title"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <InputField
              id="standard-basic"
              label="Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputField
              id="standard-basic"
              label="Platform"
              variant="standard"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              required
            />
            <InputField
              id="standard-basic"
              label="Date(YYYY-MM-DD)"
              variant="standard"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </Grid>
          <Submit variant="contained" onClick={submitAction}>
            Add Task
          </Submit>
        </Platform>
      </Grid>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AddTaskBox;
