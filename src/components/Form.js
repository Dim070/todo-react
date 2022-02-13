import React from "react";
import "./Form.css"


const Form = ({ todos, setTodos, inputTitle, setInputTitle, inputText, setInputText, setStatus}) => {

    const inputTextHandler = (event) => {
// ловлю текст с инпута
        setInputText(event.target.value)
    }
    const inputTitleHandler = (event) => {
// ловлю текст с инпута
        setInputTitle(event.target.value)
    }

    const submitHandler = (event) => {
        //отменяю действие кнопки по умлчанию (отмена перезагрузки)
        event.preventDefault()
          //пушу в массив todos свой список дел
        setTodos ([
            ...todos,
            { text: inputText,
              title: inputTitle,
              id: Math.random() * 1000,
                completed: false,
                inProgress: false,
                waiting: true,
                // status: {
                //     completed: false,
                //     inProgress: false,
                //     waiting: true,
                // }
              }
        ])
        setInputTitle('')
        setInputText('')
    }
    
    const statusHandler = (event) => {
      setStatus(event.target.value)
    }

    return (
        <form>
            <input onInput={inputTitleHandler}
                   value={inputTitle}
                   className={'title'}
                   type='title'
                   placeholder={'Назовите свою задачу'}
                   required />

            <input onInput={inputTextHandler}
                   value={inputText}
                   className={'text'}
                   type='text'
                   placeholder={'Здесь должна быть ваша задача'}
                   required />

            <input className={'number'}
                   type='number'
                   name='number'
                   list='number-list'
                   min="1" max="10"
                   placeholder={'Номер'} />

            <button onClick={submitHandler} className={'btn'} type='submit'>Add</button>
            <select onChange={statusHandler} className={'status'} name="todos" >
                <option value="all">Все</option>
                <option value="waiting">Ожидает</option>
                <option value="inProgress">В процессе</option>
                <option value="completed">Выполнено</option>
                <option value="title">По имени</option>
            </select>
        </form>
    )
}

export default Form