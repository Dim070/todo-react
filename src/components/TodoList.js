import React from "react";
import "./TodoList.css"
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className={'todoList'}>
            <h2>Список:</h2>
            <ul>
                {filteredTodos.map((todo) => (
                    <Todo
                        todo={todo}
                        setTodos = {setTodos}
                        todos = {todos}
                        key = {todo.id}
                        title = {todo.title}
                        text = {todo.text}
                        // status = {todo.status}
                    />
                    )
                )}

            </ul>
        </div>
    )
}

export default TodoList