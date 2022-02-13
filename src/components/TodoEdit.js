import React from "react";
import "./TodoEdit.css"
import Todo from "./Todo";

const TodoEdit = () => {
    return (
        <div className={'todoEdit'}>
            <h2>Редактирование</h2>
            <Todo/>
        </div>
    )
}

export default TodoEdit