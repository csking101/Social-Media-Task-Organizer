import React from "react";

import { Paper, Typography, styled } from "@mui/material";

const HeadingViewNone = styled(Typography)`
  font-size: 36px;
  margin-top: 60%;
  color: #04151f;
`;
const Heading = styled(Typography)`
  font-size: 40px;
  color: #04151f;
  margin-top: 15px;
  text-decoration: underline;
  margin-bottom: 15px;
`;

const Deadline = styled(Typography)`
  font-size: 26px;
  margin-left: 20px;
  color: #ea3546;
  background-color: #04151f;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const Platform = styled(Typography)`
  font-size: 26px;
  margin-left: 20px;
  color: #ff9000;
  background-color: #04151f;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const Description = styled(Typography)`
  font-size: 20px;
  color: #39a2ae;
  background-color: #04151f;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const CreatedBy = styled(Typography)`
  font-size: 14px;
  color: #39a2ae;
`;

const IDNumber = styled(Typography)`
  font-size:28px;
  position:absolute;
  right:40px;
  margin-top:10px;
  color: #39a2ae;
  background-color: #04151f;
  border-radius:50px;
  padding:10px;
`

const ElevationViewNone = styled(Paper)`
  background-color: #39a2ae;
  width: 95%;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

const Elevation = styled(Paper)`
  background-color: #39a2ae;
  width: 95%;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;

const ItemView = (props) => {
  const viewType = props.itemView;

  console.log(`The item view is in ${viewType.view} mode.`);

  if (viewType.view === "task") {
    let { title, deadline, platform, createdby, desc, subtasks, id } = viewType;

    if (!desc) desc = "None";

    return (
      <Elevation style={{ overflow: "auto", scrollbarWidth: "none" }}>
        <IDNumber>{id}</IDNumber>
        <Heading>
          <center>{title.toUpperCase()}</center>
        </Heading>
        <Deadline>
          <b>DEADLINE: </b>
          {deadline.toString().slice(0, 10)}
        </Deadline>
        <Platform>
          <b>PLATFORM: </b>
          {platform}
        </Platform>
        <Description>
          <b>
            <center>DESCRIPTION</center>
          </b>
          {desc}
        </Description>
        <CreatedBy>{createdby}</CreatedBy>
      </Elevation>
    );
  } else if (viewType.view === "subtask") {
  } else {
    return (
      <ElevationViewNone>
        <HeadingViewNone>SELECT A TASK OR SUBTASK</HeadingViewNone>
      </ElevationViewNone>
    );
  }
};

export default ItemView;
