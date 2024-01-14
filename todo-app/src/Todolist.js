import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { Todo } from './Todo'
import { NewTodoForm } from './NewTodoForm'
import './Todolist.css'

/**
 * Returns NewTodoForm and any todo components that have been stored in state
 * 
 * Props: none
 * 
 * State: array of todos
 */

const Todolist = () => {
    const INITIAL_STATE = []

    const [todos, setTodos] = useState(INITIAL_STATE)
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }
    const deleteTodo = (deleteTodoId) => {
        setTodos(todos => todos.filter(todo => todo.id !== deleteTodoId))
    }

    return (
        <>
        <h1>Add a Todo!</h1>
        <NewTodoForm addTodo={addTodo}/>
        <ul><b>Todo List:</b>
           {todos.map(({ id, todo}) => (
            <li key={id}>
                <Todo 
                key={id} 
                id={id} 
                todo={todo}
                deleteTodo={deleteTodo}
                />
            </li>
            ))} 
        </ul>
        </>
    )
}

export { Todolist }