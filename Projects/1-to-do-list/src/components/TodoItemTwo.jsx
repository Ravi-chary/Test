function TodoItemTwo() {
  let todoName = "Go to college";
  let todoDate = "25-01-2024"
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          {todoName}
        </div>
        <div className="col-sm-4">
          {todoDate}
        </div>
        <div className="col-sm-2">
          <button className="btn btn-outline-danger w-100">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItemTwo;
