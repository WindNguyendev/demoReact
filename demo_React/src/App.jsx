import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import reactLogo from './assets/react.svg'
import { useState } from "react"

const App = () => {

  const addNewTodo = (name) => {
    const test = { id: radomID(1, 100000), title: name };
    setTodoList([...todoList, test]);
  }
  const deleteItemTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }
  const updateItemTodo = (id, name) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, title: name };
      }
      return item;
    });
    setTodoList(newTodoList);
  }
  const [todoList, setTodoList] = useState([
  ]);

  const radomID = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {todoList.length > 0 ? (
        <TodoData
          todoList={todoList}
          deleteItemTodo={deleteItemTodo}
          updateItemTodo={updateItemTodo}
        />
      ) : (

        <div className="todo-image">
          <img src={reactLogo} className="react-logo" />
        </div>
      )}



    </>
  )
}

export default App
