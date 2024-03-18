export default function TodoItem({ todo }) {
  const { text, isCompleted } = todo;
  let color = "light";
  let bi = "square";
  let textDecoration = "";
  if (isCompleted) {
    color = "success";
    bi = "check-square";
    textDecoration = "text-decoration-line-through";
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button class={"btn btn-sm btn-" + color}>
          <i class={"bi bi-" + bi}></i>
        </button>
        <span class={"ms-2 " + textDecoration}>{text}</span>
      </div>
      <div>
        <button class="btn btn-sm btn-danger">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
