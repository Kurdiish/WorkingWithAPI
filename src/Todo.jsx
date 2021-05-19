import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
const Todo = () => {
  const [todoDetails, setTodoDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>ID: {id}</h1>
          <h1>TodoId: {todoId}</h1>
          <h1>Title: {title}</h1>
          <h1>{`Completed: ${completed}`}</h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
export default Todo;
