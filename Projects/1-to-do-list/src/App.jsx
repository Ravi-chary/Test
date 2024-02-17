import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItemOne from "./components/TodoItemOne"
import TodoItemTwo from "./components/TodoItemTwo"



function App() {
  return <div className="container">
    <div className="row">
      <AppName/>
      <AddTodo className="mt-2"/>
      <TodoItemOne/>
      <TodoItemTwo/>
    </div>
  </div>
}

export default App
