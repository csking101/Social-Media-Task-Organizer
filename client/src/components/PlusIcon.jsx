import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Iconthing = styled(AddBoxIcon)`
  position: relative;
  transform: scale(2);
  margin-left:2vw;
  
  margin-bottom:-7vh;
`;

const PlusIcon = () => {
  return (
    <div>
      <Link to="/addTask" style={{ color: "#04151F" }}>
        <Iconthing />
      </Link>
    </div>
  );
};

export default PlusIcon;
