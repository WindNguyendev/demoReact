import React, { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    const [valueInput, setValueInput] = useState("hallo");

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }
    const handleChange = (name) => {

        setValueInput(name);
    }
    return (
        <>
            <div className="todo-input">
                <input type="text"
                    onChange={(e) => handleChange(e.target.value)}
                    value={valueInput}
                />
                <button
                    onClick={handleClick}
                >Add</button>
            </div>

        </>
    )
}
export default TodoNew;