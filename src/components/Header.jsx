import React from "react";

import logo from "../assets/logo.png";
import Form from "./Form";

const Header = ({task,setTask, handleSubmit, inputRef}) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Form 
      task={task} 
      setTask={setTask} 
      handleSubmit={handleSubmit} 
      inputRef={inputRef}/>
    </header>
  );
};

export default Header;
