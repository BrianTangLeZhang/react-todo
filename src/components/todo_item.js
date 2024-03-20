export default function TodoItem(props) {
  const { task, isComplete, id, onDelete, onMarking } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {!isComplete ? (
          <>
            <button
              className="btn btn-sm btn-light"
              onClick={() => onMarking(id)}
            >
              <i className="bi bi-square"></i>
            </button>
            <span className="ms-2">{task}</span>
          </>
        ) : (
          <>
            <button
              className="btn btn-sm btn-success"
              onClick={() => onMarking(id)}
            >
              <i className="bi bi-check-square"></i>
            </button>
            <span className="ms-2 text-decoration-line-through">{task}</span>
          </>
        )}
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
