import React from "react"
import "./Box.css"

/**
 * Box component takes params backgroundColor, width, and height.
 * 
 * Returns div element with styles given by props passed through.
 * When button is clicked, removes box from DOM.
 * 
 * Props: id, backgroundColor, width, height, deleteBox
 * 
 * State: none
 */
const Box = ({id, backgroundColor, width, height, deleteBox}) => {
    const boxStyles = {
        backgroundColor, 
        width: `${width}px`,
        height: `${height}px`
    }

    const handleDelete = (e) => {
        deleteBox(id)
    }

    return (
        <div className="Box" id={id}>
            <div style={boxStyles}></div>
            <button className="Box-delete-button" onClick={handleDelete}>X</button>
        </div>
    )
}

export { Box };