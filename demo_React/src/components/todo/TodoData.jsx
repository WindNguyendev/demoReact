const TodoData = (props) => {
    console.log("Props received in TodoData:", props);
    const { todoList, deleteItemTodo } = props;
    const handleClickDelete = (id) => {
        deleteItemTodo(id);
    }
    const handleClickUpdate = (id) => {
        const newTitle = prompt("Enter new title:");
        if (newTitle) {
            props.updateItemTodo(id, newTitle);
        }
    }

    return (
        <>
            <div className="todo-list">
                {/* <div className="todo-item">{JSON.stringify(todoList)}</div> */}
                {todoList.map((item) => (
                   
                        <div key={item.id} className="todo-item">
                            {item.title}
                            <button onClick={() => handleClickUpdate(item.id)}>Update</button>
                            <button onClick={() => handleClickDelete(item.id)}>Delete</button>
                        </div>
                        
                  
                ))}
            </div>
        </>
    );
}

export default TodoData;