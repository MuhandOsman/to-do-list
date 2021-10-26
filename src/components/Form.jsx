import React from 'react'

import  {v4 as uuidv4} from "uuid"

const Form = ({task , setTask , handleSubmit, inputRef}) => {
    return (
        <form>
           <label htmlFor="">please enter your task</label> 
           <input type="text" 
           value={task.task} 
           maxLength="100" 
           ref={inputRef}
           onChange={(e) => 
            setTask({id: uuidv4(),task : e.target.value , done :false})} />
           <button onClick={handleSubmit} >add</button>
        </form>
    )
}

export default Form
