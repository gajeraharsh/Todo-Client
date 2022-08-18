import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./TaskItem.scss";
function TaskInput({ value, onChange, onSubmit }) {
  return (
    <div className="TaskInput_main">
      <div className="TaskInput_Wrapper">
        <div className="TaskInput_icondiv">
          <IoMdAdd className="TaskInput_Icon" />
        </div>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={value}
            type="text"
            className="Task_Input"
            placeholder="New Task"
          />
        </form>
      </div>
    </div>
  );
}

export default TaskInput;
