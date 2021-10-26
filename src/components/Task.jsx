import React from 'react'
import {TiTick} from "react-icons/ti"
import {MdDelete} from "react-icons/md"

const Task = ({task ,tasks ,  handleDelete, handleTick}) => {
    return (
        <div className="task-container" >
            <div className='tick'>
        <TiTick
          style={{
            fontSize: '22px',
          }}
          onClick={() => handleTick(task.id, tasks)} //Handle the tick functionality
        />
      </div>
            <div className="task"><p>{task.task}</p></div>
            <div className="bin">< MdDelete style={{fontSize:"22px"}} onClick={()=>handleDelete(task.id, tasks)} /></div>
        </div>
    )
}

export default Task
