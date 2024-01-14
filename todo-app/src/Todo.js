import React from "react"
import "./Todo.css"

/**
 * Todo component takes param task.
 * 
 * Returns div element with task given by props.
 * When button is clicked, removes todo from DOM.
 * 
 * Props: id, todo, deleteTodo
 * 
 * State: none
 */
const Todo = ({id, todo, deleteTodo}) => {
    const handleDelete = (e) => {
        deleteTodo(id)
    }

    return (
        <div className="Todo" id={id}>
            <div>{todo}</div>
            <button className="Todo-delete-button" onClick={handleDelete}>X</button>
        </div>
    )
}

export { Todo };