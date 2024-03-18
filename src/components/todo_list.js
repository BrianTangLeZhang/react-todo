import TodoItem from "./todo_item";

export default function TodoList() {
  const Todos = [
    { id: 1, text: "Task 1", isCompleted: true },
    { id: 2, text: "Task 2", isCompleted: false },
    { id: 3, text: "Task 3", isCompleted: false },
  ];
  return (
    <ul className="list-group">
      {Todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
