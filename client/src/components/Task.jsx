import { styled, Card, Typography } from "@mui/material";
import React from "react";

const CardContainer = styled(Card)`
  background-color: #04151f;
  padding:15px;
  margin-left:15px;
  margin-right:15px;
  margin-bottom:15px;
`;

const Heading = styled(Typography)`
  font-size:30px;
  color:#39A2AE;
`

const Deadline = styled(Typography)`
  font-size:20px;
  color:#EA3546;
`

const Platform = styled(Typography)`
  font-size:20px;
  color:#FF9000;
`

const CreatedBy = styled(Typography)`
  font-size:14px;
  color:#39A2AE;
`

const Task = (props) => {
  console.log(props);
  return (<CardContainer>
    <Heading>{props.title.toUpperCase()}</Heading>
    <Deadline>{props.deadline.toString().slice(0,10)}</Deadline>
    <Platform>{props.platform}</Platform>
    <CreatedBy>{props.createdby}</CreatedBy>
  </CardContainer>);
};

export default Task;
