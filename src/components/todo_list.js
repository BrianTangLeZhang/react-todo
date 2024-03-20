import TodoItem from "./todo_item";

export default function TodoList(props) {
  const { todos, setTodos } = props;
  const updateHandler = (id) => {
    const newTodo = todos.find((t) => t.id === id);
    newTodo.isCompleted = !newTodo.isCompleted;
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos([newTodo, ...newTodos]);
  };

  return (
    <ul className="list-group">
      {todos.map((todo) => {
        const { id, task, isCompleted } = todo;
        return (
          <TodoItem
            key={id}
            id={id}
            task={task}
            isCompleted={isCompleted}
            onDelete={(id) => setTodos(todos.filter((t) => t.id !== id))}
            onMarking={(id) => updateHandler(id)}
          />
        );
      })}
    </ul>
  );
}
