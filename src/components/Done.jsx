import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Done = ({ task, tasksDone, handleDelete, handleTick }) => {
  return (
    <div className="task-container">
      <div className="tick">
        <BiArrowBack
          style={{
            fontSize: "22px",
          }}
          onClick={() => handleTick(task.id, tasksDone)} //Handle the tick functionality
        />
      </div>
      <div className="task">
        <p
          style={{
            textDecorationLine: "line-through",
            textDecorationColor: "red",
            textDecorationThickness: "2px",
            fontStyle: "italic",
          }}
        >
          {task.task}
        </p>
      </div>
      <div className="bin">
        <MdDelete
          style={{ fontSize: "22px" }}
          onClick={() => handleDelete(task.id, tasksDone)}
        />
      </div>
    </div>
  );
};

export default Done;
