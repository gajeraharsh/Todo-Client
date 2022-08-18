import "./App.scss";
import ListItem from "./Components/ListItem/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";
import TaskItem from "./Components/TaskItem/TaskItem";
import TaskInput from "./Components/TaskItem/TaskInput";
import { useEffect, useState } from "react";
import TaskDetails from "./Components/TaskDetails/TaskDetails";

function App() {
  const [inputlist, setinputlist] = useState("");
  const [inputtask, setinputtask] = useState("");
  const [openstep, setopenstep] = useState(false);
  const [taskstep, settaskstep] = useState(0);
  //know state

  const [state, setstate] = useState(0);

  const { lists, current } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  const handleaddList = (e) => {
    e.preventDefault();
    dispatch({ type: "addlist", paylod: inputlist });
    setinputlist("");
  };

  // handle tab
  const handlelistclick = (i) => {
    dispatch({ type: "addcurrent", paylod: lists[i] });
    setstate(i);
  };

  // add task
  const handletaskadd = (e) => {
    e.preventDefault();
    const data = lists[state];
    data.Tasks.push({ name: inputtask, status: false, steps: [] });

    dispatch({
      type: "addtaskinlist",
      paylod: { index: state, ddata: data },
    });

    dispatch({ type: "addcount", paylod: { state } });

    setinputtask("");
  };

  const handlecheckclick = (index) => {
    dispatch({
      type: "updatecheckstatusTask",
      paylod: { index: state, indext: index },
    });
  };

  return (
    <>
      <main className="Todo_main">
        <div className="Todo_Left">
          {lists.map((item, i) => {
            return (
              <ListItem
                key={i}
                name={item.name}
                count={item.count}
                icon={item.icon}
                onClick={() => handlelistclick(i)}
              />
            );
          })}

          <div className="list_item">
            <div className="listitem_wrappper">
              <div className="Icon_div">
                <IoMdAdd />
              </div>
              <div className="ListItem_Input">
                <form onSubmit={handleaddList}>
                  <input
                    type="text"
                    className="Listitem_input"
                    placeholder="New List"
                    onChange={(e) => setinputlist(e.target.value)}
                    value={inputlist}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="Todo_Right">
          <div className="TodoRight_Head">
            <div className="TodoRight_Headnaem">{lists[state].name}</div>
            <BiDotsHorizontal className="Todoright_headicon" />
          </div>

          <div className="TodoRight_TaskMain">
            {lists[state].Tasks.map((item, index) => {
              return (
                <div key={index}>
                  <TaskItem
                    item={item}
                    handlecheckclick={() => handlecheckclick(index)}
                    openstep={openstep}
                    setopenstep={setopenstep}
                    taskstep={taskstep}
                    settaskstep={settaskstep}
                    index={index}
                  />
                  {index === taskstep && (
                    <TaskDetails
                      openstep={openstep}
                      setopenstep={setopenstep}
                      state={state}
                      item={item}
                      index={index}
                    />
                  )}
                </div>
              );
            })}
            <TaskInput
              onChange={(e) => setinputtask(e.target.value)}
              value={inputtask}
              onSubmit={handletaskadd}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
