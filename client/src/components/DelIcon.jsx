import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material";
import { deleteTask } from "../service/api";
import { useNavigate } from "react-router-dom";

const DeleteCan = styled(DeleteIcon)`
  position: relative;
  float: right;
  color: #ea3546;
`;

const DelIcon = (props) => {
  const navigate = useNavigate();

  const onDelete = () => {
    deleteTask(props.id);
    navigate("/dashboard");
  };

  return (
    <div onClick={onDelete}>
      <DeleteCan />
    </div>
  );
};

export default DelIcon;
