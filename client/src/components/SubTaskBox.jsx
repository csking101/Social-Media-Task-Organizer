import React, { useState, useEffect } from "react";

import { styled } from "@mui/material";
import { Platform } from "./Platform";
import { Heading } from "./Heading";
import SubTask from "./SubTask";
import { getSubtaskDataByName } from "../service/api";

const Divider = styled("hr")({
  color: "#04151F",
});

const SubTaskBox = (props) => {
  const name = props.name;
  const [subtaskData, setSubtaskData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSubtaskDataByName(name);
      setSubtaskData(data.data);
      console.log("Data set perfectly in subtaskbox");
    };
    fetchData();
  }, []);

  if (!(subtaskData === [])) {
    console.log(subtaskData);
    return (
      <Platform style={{ overflow: "auto", scrollbarWidth: "none" }}>
        <div style={{ textAlign: "center", padding: "15px" }}>
          <Heading>ASSIGNED SUBTASKS</Heading>
          <Divider />
        </div>
        {subtaskData.map((subtask) => {
          return (
            <SubTask
              title={subtask.title}
              desc={subtask.desc}
              platform={subtask.platform}
              createdby={subtask.createdby}
              deadline={subtask.deadline}
              file={subtask.file}
              status={subtask.status}
            />
          );
        })}
      </Platform>
    );
  } else {
    return (
      <Platform>
        <div style={{ textAlign: "center", padding: "15px" }}>
          <Heading>ASSIGNED SUBTASKS</Heading>
          <Divider />
        </div>
      </Platform>
    );
  }
};

export default SubTaskBox;
