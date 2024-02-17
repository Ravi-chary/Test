import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

const todoItems = [
  { name: "Buy Milk", dueDate: "24-01-2024" },
  { name: "Go to college", dueDate: "24-01-2024" },
  { name: "Ghee", dueDate: "24-01-2024" },
];

function App() {
  return (
    <div className="container">
      <div className="row">
        <AppName />
        <AddTodo className="mt-2" />
        <TodoItems todoItems={todoItems} />
      </div>
    </div>
  );
}

export default App;
