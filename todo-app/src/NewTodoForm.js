import React, { useState } from 'react'
import './NewTodoForm.css'

/**
 * Returns formatted NewTodoForm with inputs of todo. Has logic for handling creation of todo. 
 * 
 * Props: addTodo function
 * 
 * State: array of form data
 */

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        todo: "", 
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Todo</label>
            <input
                id="todo"
                type="text"
                name="todo"
                placeholder='Todo'
                value={formData.todo}
                onChange={handleChange}
            >
            </input>

            <button className="NewTodoForm-submitButton">Add Todo</button>
        </form>
    )
    
}

export { NewTodoForm };