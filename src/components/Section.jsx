import React from 'react'

import TaskContainer from "./TaskContainer"
import DoneContainer from "./DoneContainer"

const Section = ({tasks ,tasksDone  , handleTick ,handleDelete }) => {
    return (
        <section>
            <TaskContainer tasks={tasks} handleDelete={handleDelete} handleTick={handleTick} />
            <DoneContainer tasksDone={tasksDone} handleDelete={handleDelete} handleTick={handleTick}/>
        </section>
    )
}

export default Section
