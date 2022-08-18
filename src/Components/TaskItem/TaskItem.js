import React, { useState } from "react";
import "./TaskItem.scss";
import { BiBookmark, BiDotsHorizontal } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
function TaskItem({
  item,
  handlecheckclick,
  setopenstep,
  taskstep,
  settaskstep,
  index,
}) {
  const dispatch = useDispatch();
  const handleonclick = () => {
    setopenstep(true);
    settaskstep(index);
    dispatch({ type: "addcurrent", paylod: item });
  };
  return (
    <>
      <div className="Task">
        <div className="Task_left" onClick={() => handleonclick(item)}>
          <div
            className={
              item.status ? "TaskLeft_name TaskLeft_Over" : "TaskLeft_name"
            }
          >
            {item.name}
          </div>
        </div>
        <div className="Task_right">
          <BiBookmark className="Task_icon" />
          <AiOutlineStar className="Task_icon" />
        </div>
        <input
          type="checkbox"
          className="TaskLeft_check"
          onChange={handlecheckclick}
          checked={item.status}
        />
      </div>
    </>
  );
}

export default TaskItem;
