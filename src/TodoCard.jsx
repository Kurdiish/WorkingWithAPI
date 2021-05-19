import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  let history = useHistory();
  return (
    <div
      style={{
        backgroundColor: "gray",
        margin: "15px",
        padding: "5px",
        width: "300px"
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
      <h3>{title}</h3>
      <h6>{`${completed}`}</h6>
    </div>
  );
};
export default TodoCard;
