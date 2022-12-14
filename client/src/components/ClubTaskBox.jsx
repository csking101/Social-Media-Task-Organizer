import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Platform } from "./Platform";
import { Heading } from "./Heading";
import PlusIcon from "./PlusIcon";
import Task from "./Task";
import { getTaskDataByClub } from "../service/api";

const Divider = styled("hr")({
  color: "#04151F",
});

const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const platformSort = (taskData) => {
  const groupByPlatform = groupBy("platform");

  const dict = groupByPlatform(taskData);

  let dataArr = [];
  for (let platform in dict) {
    for (let ind in dict[platform]) {
      dataArr.push(dict[platform][ind]);
    }
  }

  return dataArr;
};

const ClubTaskBox = (props) => {
  const club = props.club;
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTaskDataByClub(club);
      //setTaskData(data.data);
      setTaskData(platformSort(data.data));
      console.log("Data set perfectly");
    };
    fetchData();
  }, []);

  if (!(taskData === [])) {
    console.log(taskData);

    return (
      <Platform style={{ overflow: "auto", scrollbarWidth: "none" }}>
        <PlusIcon redirect="/addtask" />
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
