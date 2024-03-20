import { useState } from "react";

export default function AddNewForm(props) {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState("");
  return (
    <div className="mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([
            ...todos,
            { id: Math.random(), task: todo, isComplete: false },
          ]);
          setTodo("");
        }}
        className="d-flex justify-content-between align-items-center"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
  );
}
