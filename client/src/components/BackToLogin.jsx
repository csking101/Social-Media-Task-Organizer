import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Iconthing = styled(ArrowBackIcon)`
  position: relative;
  color:#39A2AE;
  transform: scale(2);
  position: absolute;
  left:50px;
  top:50px;
`;

const BackToLogin = () => {
  return (
    <div>
      <Link to="/login" style={{ color: "#04151F" }}>
        <Iconthing />
      </Link>
    </div>
  );
};

export default BackToLogin;
