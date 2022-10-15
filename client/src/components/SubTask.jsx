import { styled, Card, Typography } from "@mui/material";
import DelIconST from "./DelIconST";
import React from "react";

const CardContainer = styled(Card)`
  background-color: #04151f;
  padding: 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

const Heading = styled(Typography)`
  font-size: 30px;
  color: #39a2ae;
`;

const Deadline = styled(Typography)`
  font-size: 20px;
  color: #ea3546;
`;

const Platform = styled(Typography)`
  font-size: 20px;
  color: #ff9000;
`;

const CreatedBy = styled(Typography)`
  font-size: 14px;
  color: #39a2ae;
`;

const Description = styled(Typography)`
  font-size: 14px;
  color: #39a2ae;
`;

const FileAttached = styled(Typography)`
  font-size: 14px;
  color: #ff9000;
`;

const Status = styled(Typography)`
  font-size: 14px;
  color: #ea3546;
`;

const SubTask = (props) => {
  let file;
  if (!props.file) file = "None";
  else file = props.file;

  const setItemView = props.setItemView;

  const cardClick = () => {
    setItemView({
      view: "subtask",
      title: props.title,
      deadline: props.deadline,
      desc: props.desc,
      platform: props.platform,
      createdby: props.createdby,
      subtasks: props.subtasks,
      file: props.file,
      status: props.status,
      id: props.id,
    });
  };

  console.log(props);

  return (
    <CardContainer onClick={cardClick}>
      <DelIconST id={props.id} />
      <Heading>{props.title.toUpperCase()}</Heading>
      <Status>
        <b>STATUS:</b> {props.status}
      </Status>
      <Deadline>{props.deadline.toString().slice(0, 10)}</Deadline>
      <Platform>{props.platform}</Platform>
      <CreatedBy>{props.createdby}</CreatedBy>
      <Description>{props.desc}</Description>
      <FileAttached>
        <b>ATTACHMENTS:</b> {file}
      </FileAttached>
    </CardContainer>
  );
};

export default SubTask;
