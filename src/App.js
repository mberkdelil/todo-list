import { Route, Routes } from "react-router-dom";
import TodoList from "./TodoList"
import EditTodo from "./EditTodo";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/edittodo/:id" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
