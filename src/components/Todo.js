import React from "react";
import "./Todo.css"

const Todo = ({title, text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const competeHandler = (event) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                if (event.target.value === 'completed') {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else if (event.target.value === 'waiting') {
                    return {
                        ...item,
                        waiting: !item.waiting
                    }
                }
            } else if (event.target.value === 'inProgress') {
                return {
                    ...item,
                    inProgress: !item.inProgress
                }
            }
            return item
        }))
    }

    // поправить присвоение статуса на селект
    // const competeHandler = (event) => {
    //     setTodos(todos.map((item) => {
    //         // const statusChange = item.status
    //         if(item.id === todo.key) {
    //             if (event.target.value === 'completed') {
    //                 console.log(...item.status)
    //                 return {
    //                     ...item.status,
    //                     completed: !item.status.completed
    //                 }
    //             } else if (event.target.value === 'waiting') {
    //                 return {
    //                     ...item.status,
    //                     waiting: !item.status.waiting
    //                 }
    //             }
    //         } else if (event.target.value === 'inProgress') {
    //             return {
    //                 ...item.status,
    //                 inProgress: !item.status.inProgress
    //             }
    //         }
    //
    //         return item
    //     }))
    // }

    // комплит на кнопу
    // const competeHandler = () => {
    //     setTodos(todos.map((item) => {
    //         if(item.id === todo.id) {
    //             return {
    //               ...item,
    //               completed: !item.status.completed
    //           }
    //         }
    //     }))
    // }

    //toggle          {`btn-complete${todo.completed ? ' completed' : ''}`}
    // ${todo.completed ? 'completed' : null}

    return (
        <li className={'todo'}>
            <div className={`todo__title`}>
                {title}
            </div>
            <div className={`todo__text`}>
                {text}
            </div>
            <div className={'todo__btns'}>
                {/*<button onClick={competeHandler} className={`btn-complete${todo.completed ? ' completed' : ''}`}>Complete</button>*/}
                <select onClick={competeHandler} className={'btn-complete'} name="status" >
                {/*<select className={'btn-complete'} name="todos" >*/}
                    <option value="waiting">Ожидает</option>
                    <option value="inProgress">В процессе</option>
                    <option value="completed">Выполнено</option>
                </select>

                <button className={'btn-edit'}>Edit</button>
                <button onClick={deleteHandler} className={'btn-delete'}>Delete</button>
            </div>
        </li>
    )
}

export default Todo