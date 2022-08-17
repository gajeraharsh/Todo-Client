import React from "react";
import "./TaskItem.scss";
import { BiBookmark, BiDotsHorizontal } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
function TaskItem({ item, handlecheckclick }) {
  return (
    <div className="Task">
      <div className="Task_left">
        <input
          type="checkbox"
          className="TaskLeft_check"
          onClick={handlecheckclick}
          checked={item.status}
        />
        <div
          className={
            item.status ? "TaskLeft_name TaskLeft_Over" : "TaskLeft_name "
          }
        >
          {item.name}
        </div>
      </div>
      <div className="Task_right">
        <BiBookmark className="Task_icon" />
        <AiOutlineStar className="Task_icon" />
      </div>
    </div>
  );
}

export default TaskItem;
