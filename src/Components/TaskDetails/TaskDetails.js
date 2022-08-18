import React, { useState } from "react";
import "./TaskDetails.scss";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { AiFillCloseCircle, AiTwotoneDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import TaskSteps from "../TaskSteps/TaskSteps";
import { useDispatch, useSelector } from "react-redux";
function TaskDetails({ openstep, setopenstep, state, item, index }) {
  const [inputstep, setinputstep] = useState("");
  const { lists, current } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  const handlestepadd = (e, item) => {
    e.preventDefault();
    const data = lists[state];
    data.Tasks[index].steps.push({ name: inputstep, status: false });
    console.log(data);
    dispatch({ type: "addstep", paylod: { data, index: state } });
  };
  const handledeltetask = () => {
    setopenstep(false);
    dispatch({ type: "deltetask", paylod: { index, state } });
    dispatch({ type: "removecount", paylod: { state } });
  };
  return (
    <>
      {" "}
      <div
        className={
          openstep
            ? "TaskDetail_main "
            : "TaskDetail_main TaskDetail_main_false"
        }
      >
        <div className="TaskBox_main">
          <div className="Taskbox">
            <div className="Task_Step_head">
              <div className="TaskHead_name">{item.name}</div>
              <BsFillBookmarksFill className="taskhead_icon" />
              <AiOutlineStar className="taskhead_icon" />
              <AiFillCloseCircle
                className="taskhead_icon"
                onClick={() => setopenstep(false)}
              />
            </div>
            <div className="StepItem_wraper">
              {item.steps.map((item, i) => {
                return (
                  <TaskSteps
                    key={i}
                    item={item}
                    state={state}
                    index={i}
                    Tindex={index}
                  />
                );
              })}
            </div>
            <div className="StepInput_main">
              <IoMdAdd />
              <form onSubmit={(e) => handlestepadd(e, item)}>
                <input
                  type="text"
                  className="TaskHead_name"
                  placeholder="Next Step.."
                  onChange={(e) => setinputstep(e.target.value)}
                  value={inputstep}
                />
              </form>
            </div>
          </div>
          <div className="TaskDetail_icon_div">
            <AiTwotoneDelete
              className="TaskDetail_icon"
              onClick={handledeltetask}
            />
          </div>
        </div>
      </div>{" "}
      <div className={openstep ? "Asider" : "Asider Asider_false"}></div>
    </>
  );
}

export default TaskDetails;
