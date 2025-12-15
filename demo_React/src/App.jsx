import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import reactLogo from './assets/react.svg'
import { useState } from "react"

const App = () => {
  const dataTest = "Hello React"
  const age = 18;
  const data = {
    name: "ReactJS",
    version: "18+"
  }
  const addNewTodo = (name) => {
    const test = { id: radomID(1,100000), title: name };
    setTodoList([...todoList, test]);
  }

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Doing homework" },
    { id: 2, title: "Watching movie" },
    { id: 3, title: "Playing game" },
  ]);

  const radomID = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={dataTest}
        age={age}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="react-logo" />
      </div>

    </>
  )
}

export default App
