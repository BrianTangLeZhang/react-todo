import TodoList from "./components/todo_list";
import AddNewForm from "./components/add_new_form";
import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([]);
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todos={todos} setTodos={setTodos} />
        <AddNewForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
