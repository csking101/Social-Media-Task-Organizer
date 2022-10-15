import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRadioGroup } from "@mui/material/RadioGroup";
import {
  Grid,
  Typography,
  styled,
  Paper,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import {
  postNewSubtask,
  getTaskDataByClub,
  getTaskDataByTitle,
} from "../service/api";

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

const AddSubtaskBox = () => {
  const userData = jwt_decode(localStorage.getItem("token"));

  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [platform, setPlatform] = useState("");
  const [assignee, setAssignee] = useState(userData.name); //Assigning by name, to be changed later
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [club, setclub] = useState(userData.club);
  const [taskOf, setTaskOf] = useState("");
  const [taskData, setTaskData] = useState([]);
  const [taskID, setTaskID] = useState("");
  const creator = userData.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTaskDataByClub(club);
      setTaskData(data.data);
      console.log("Data set perfectly");
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  if (localStorage.getItem("loggedin") === "true") {
    const submitAction = async () => {
      for (var x in taskData) {
        if (taskData[x].title === taskOf) {
          console.log(taskData[x]);
          console.log(taskData[x].title);
          console.log(taskData[x]._id);
          console.log(taskOf);
          setTaskID(taskData[x]._id);
          console.log(taskID);
        }
      }

      const data = {
        id: id,
        title: title,
        desc: description,
        platform: platform,
        deadline: deadline,
        club: club,
        creator: creator,
        assignee: assignee,
        status: status,
        task: taskID,
      };
      console.log(data.task);
      await postNewSubtask(data);

      //navigate("/dashboard");
    };

    return (
      <Grid align="center">
        <Platform elevation={10}>
          <HeadingText>ADD SUBTASK</HeadingText>
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
              label="File"
              variant="standard"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
            <InputField
              id="standard-basic"
              label="Status"
              variant="standard"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
            <RadioGroup
              name="radioGroup"
              onChange={(e) => setTaskOf(e.target.value)}
            >
              {taskData.map((task) => {
                return (
                  <FormControlLabel
                    value={task.title}
                    label={task.title}
                    control={<Radio />}
                  />
                );
              })}
            </RadioGroup>
          </Grid>
          <Submit variant="contained" onClick={submitAction}>
            Add Subtask
          </Submit>
        </Platform>
      </Grid>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AddSubtaskBox;
