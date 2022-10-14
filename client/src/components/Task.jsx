import { styled, Card, Typography } from "@mui/material";
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

const Task = (props) => {
  const setItemView = props.setItemView;

  const cardClick = () => {
    setItemView({
      view: "task",
      title: props.title,
      deadline: props.deadline,
      desc: props.desc,
      platform: props.platform,
      createdby: props.createdby,
      subtasks: props.subtasks,
      id: props.id,
    });

    console.log("Item view has been set by a task cards")
  }

  console.log(props);
  return (
    <CardContainer onClick={cardClick}>
      <Heading>{props.title.toUpperCase()}</Heading>
      <Deadline>{props.deadline.toString().slice(0, 10)}</Deadline>
      <Platform>{props.platform}</Platform>
      <CreatedBy>{props.createdby}</CreatedBy>
    </CardContainer>
  );
};

export default Task;
