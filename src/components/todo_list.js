import TodoItem from "./todo_item";

export default function TodoList(props) {
  const { todos, setTodos } = props;
  const updateHandler = (id) => {
    const newTodo = todos.find((t) => t.id === id);
    newTodo.isComplete = !newTodo.isComplete;
    console.log(todos.find((t) => t.id === id));
    setTodos([...todos]);
  };

  return (
    <ul className="list-group">
      {todos.map((todo) => {
        const { id, task, isComplete } = todo;
        return (
          <TodoItem
            key={id}
            id={id}
            task={task}
            isComplete={isComplete}
            onDelete={(id) => setTodos(todos.filter((t) => t.id !== id))}
            onMarking={(id) => updateHandler(id)}
          />
        );
      })}
    </ul>
  );
}
