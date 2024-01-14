import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { Box } from './Box'
import { NewBoxForm } from './NewBoxForm'

/**
 * Returns NewBoxForm and any box components that have been stored in state
 * 
 * Props: none
 * 
 * State: array of boxes
 */
const Boxlist = () => {
    const INITIAL_STATE = []

    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const deleteBox = (deleteBox) => {
        setBoxes(boxes => boxes.filter(box => box.id !== deleteBox))
    }

    return (
        <>
        <h1>Add a Colored Box!</h1>
        <NewBoxForm addBox={addBox}/>
        {boxes.map(({ id, backgroundColor, width, height }) => (
            <Box 
                key={id} 
                id={id} 
                backgroundColor={backgroundColor} 
                width={width} 
                height={height} 
                deleteBox={deleteBox}
            />
        ))}

        </>
    )
}

export { Boxlist }