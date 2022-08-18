import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./TaskSteps.scss";
import { useSelector, useDispatch } from "react-redux";
function TaskSteps({ item, state, index, Tindex }) {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.Reducer);
  const handlesteponchange = () => {
    console.log(lists[state].Tasks[Tindex].steps[index]);
    dispatch({ type: "statecheckupdate", paylod: { index, Tindex, state } });
  };
  const handledeletstep = () => {
    dispatch({ type: "Deletestep", paylod: { index, Tindex, state } });
  };
  return (
    <div className="StepItem_main">
      <input
        type="checkbox"
        className={"stepitem_check "}
        onChange={() => handlesteponchange()}
        checked={item.status}
      />
      <div
        className={
          item.status ? "Stepitem_naeme Stepitem_naeme_true" : "Stepitem_naeme"
        }
      >
        {item.name}
      </div>
      <AiOutlineClose className="stepitme_icon" onClick={handledeletstep} />
    </div>
  );
}

export default TaskSteps;
