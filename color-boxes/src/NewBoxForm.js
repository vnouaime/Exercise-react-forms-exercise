import React, { useState } from 'react'
import "./NewBoxForm.css"

/**
 * Returns formatted NewBoxForm with inputs of background color, width, and height. Has logic for handling creation of box. 
 * 
 * Props: addBox function
 * 
 * State: array of form data
 */

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        backgroundColor: "", 
        width: "", 
        height: ""
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
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='backgroundColor'>Background Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder='Background Color'
                value={formData.backgroundColor}
                onChange={handleChange}
            >
            </input>

            <label htmlFor='width'>Width (pixels)</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder='Width'
                value={formData.width}
                onChange={handleChange}
            >
            </input>

            <label htmlFor='height'>Height (pixels)</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder='Height'
                value={formData.height}
                onChange={handleChange}
            >
            </input>

            <button className="NewBoxForm-submitButton">Add Box</button>
        </form>
    )
    
}

export { NewBoxForm };