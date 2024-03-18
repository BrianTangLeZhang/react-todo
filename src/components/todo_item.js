export default function TodoItem({ todo }) {
  const { text, isCompleted } = todo;
  let color = "light";
  let bi = "square";
  if (isCompleted) {
    color = "success";
    bi = "check-square";
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button class={"btn btn-sm btn-" + color}>
          <i class={"bi bi-" + bi}></i>
        </button>
        <span class="ms-2 text-decoration-line-through">{text}</span>
      </div>
      <div>
        <button class="btn btn-sm btn-danger">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
