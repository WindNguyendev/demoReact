const TodoData = (props) => {
    console.log("Props received in TodoData:", props);
    const { name, age, todoList} = props;
   
    return (
        <>
            <div className="todo-list">
                <div className="todo-item">{JSON.stringify(todoList)}</div>
            </div>
        </>
    );
}

export default TodoData;