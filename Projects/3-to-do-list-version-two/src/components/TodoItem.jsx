function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button className="btn btn-outline-danger w-100">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
