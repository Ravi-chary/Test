function AddTodo() {
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-sm-6">
          <input
            className="form-control"
            type="text"
            placeholder="enter you text"
          />
        </div>
        <div className="col-sm-4">
          <input
            className="form-control"
            type="date"
            placeholder="enter you text"
          />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success w-100">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
