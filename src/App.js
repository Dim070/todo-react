import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";


function App() {
    const [inputTitle, setInputTitle] = useState('')
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('Все')
    const [filteredTodos, setFilteredTodos] = useState([])

    // Фильтр
    function sortTitle(a, b) {
        const bandA = a.title.toUpperCase();
        const bandB = b.title.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }


    useEffect(() => {
        filteredHandler()
    },[todos, status])


    const filteredHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break
            case 'waiting':
                setFilteredTodos(todos.filter(todo => todo.waiting === true))
                break
            case 'inProgress':
                setFilteredTodos(todos.filter(todo => todo.inProgress === true))
                break
            // сортировка по алфавиту
            case 'title':
                setFilteredTodos(todos.sort(sortTitle))
                // setFilteredTodos(todos.sort((a, b) => a.title.localeCompare(b.title))) Фильтр
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }

  return (
    <div className="App">
      <header>
          <h1>To-Do List</h1>
      </header>
        <Form todos = {todos}
              setTodos = {setTodos}
              inputTitle = {inputTitle}
              setInputTitle = {setInputTitle}
              inputText = {inputText}
              setInputText = {setInputText}
              setStatus = {setStatus} />
        <div className="list">
            <TodoList filteredTodos = {filteredTodos}
                      setTodos = {setTodos}
                      todos = {todos}/>
            <TodoEdit/>
        </div>
    </div>
  )
}

export default App;
