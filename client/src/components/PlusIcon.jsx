import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Iconthing = styled(AddBoxIcon)`
  position: absolute;
  transform: scale(2);
  left: 2.9vw;
  top: 18vh;
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
