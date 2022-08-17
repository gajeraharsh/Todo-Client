import "./App.scss";
import ListItem from "./Coponents/ListItem/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";
import TaskItem from "./Coponents/TaskItem/TaskItem";
import TaskInput from "./Coponents/TaskItem/TaskInput";
import { useEffect, useState } from "react";

function App() {
  const [inputlist, setinputlist] = useState("");
  const [inputtask, setinputtask] = useState("");

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
    data.Tasks.push({ name: inputtask, status: false });

    dispatch({
      type: "addtaskinlist",
      paylod: { index: state, ddata: data },
    });

    setinputtask("");
  };

  const handlecheckclick = (index) => {
    dispatch({
      type: "updatecheckstatusTask",
      paylod: { index: state, indext: index },
    });
  };

  useEffect(() => {
    dispatch({ type: "addcurrent", paylod: lists[0] });
  }, []);

  return (
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
              <TaskItem
                key={index}
                item={item}
                handlecheckclick={() => handlecheckclick(index)}
              />
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
  );
}

export default App;
