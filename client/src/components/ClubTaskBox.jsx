import React, { useState, useEffect } from "react";

import { styled } from "@mui/material";
import { Platform } from "./Platform";
import { Heading } from "./Heading";
import Task from "./Task";
import { getTaskDataByClub } from "../service/api";

const Divider = styled("hr")({
  color: "#04151F",
});

const ClubTaskBox = (props) => {
  const club = props.club;
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTaskDataByClub(club);
      setTaskData(data.data);
      console.log("Data set perfectly");
    };
    fetchData();
  }, []);

  if (!(taskData === [])) {
    console.log(taskData);
    return (
      <Platform style={{ overflow: "auto", scrollbarWidth: "none" }}>
        <div style={{ textAlign: "center", padding: "15px" }}>
          <Heading>CLUB TASKS</Heading>
          <Divider />
        </div>
        {taskData.map((task) => {
          console.log(task.title, task.desc);
          return (
            <Task
              title={task.title}
              desc={task.desc}
              platform={task.platform}
              createdby={task.createdby}
              deadline={task.deadline}
              id={task.id}
              setItemView={props.setItemView}
            />
          );
        })}
      </Platform>
    );
  } else {
    return (
      <Platform>
        <div style={{ textAlign: "center", padding: "15px" }}>
          <Heading>CLUB TASKS</Heading>
          <Divider />
        </div>
      </Platform>
    );
  }
};

export default ClubTaskBox;
