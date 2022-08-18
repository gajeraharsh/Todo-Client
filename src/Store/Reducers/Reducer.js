import { MdLightMode } from "react-icons/md";
import { AiOutlineStar, AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";

const initstate = {
  lists: [
    {
      name: "My Day",
      icon: <MdLightMode className="Light_icon" />,
      count: 0,
      Tasks: [],
    },
    {
      name: "Important",
      icon: <AiOutlineStar className="Light_icon" />,
      count: 0,
      Tasks: [],
    },
    {
      name: "BookMakred",
      icon: <BsFillBookmarksFill className="Light_icon" />,
      count: 0,
      Tasks: [],
    },
  ],
  current: {},
};

export const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case "addlist":
      var list = {
        name: action.paylod,
        count: 0,
        icon: <AiOutlineUnorderedList />,
        Tasks: [],
      };

      return { ...state, lists: [...state.lists, list] };
    case "addcurrent":
      console.log(action.paylod);
      return { ...state, current: action.paylod };
    case "addcount":
      const demoaded = [...state.lists];
      console.log(demoaded[action.paylod.state]);
      demoaded[action.paylod.state].count =
        state.lists[action.paylod.state].count + 1;
      return { ...state, lists: demoaded };
    case "removecount":
      const demoremove = [...state.lists];
      demoremove[action.paylod.state].count =
        state.lists[action.paylod.state].count - 1;
      return { ...state, lists: demoremove };
    case "addtaskinlist":
      return {
        ...state,
        lists: state.lists.map((item, i) =>
          i === action.paylod.index ? action.paylod.ddata : item
        ),
      };
    case "addstep":
      return {
        ...state,
        lists: state.lists.map((item, i) =>
          i === action.paylod.index ? action.paylod.data : item
        ),
      };

    case "updatecheckstatusTask":
      const newarray = [...state.lists];
      // newarray[action.paylod.index].Tasks[action.paylod.indext].status = false;
      if (
        newarray[action.paylod.index].Tasks[action.paylod.indext].status ===
        true
      ) {
        newarray[action.paylod.index].Tasks[
          action.paylod.indext
        ].status = false;
      } else {
        newarray[action.paylod.index].Tasks[action.paylod.indext].status = true;
      }
      return { ...state, lists: newarray };

    case "statecheckupdate":
      const demoarray = [...state.lists];

      if (
        demoarray[action.paylod.state].Tasks[action.paylod.Tindex].steps[
          action.paylod.index
        ].status === true
      ) {
        demoarray[action.paylod.state].Tasks[action.paylod.Tindex].steps[
          action.paylod.index
        ].status = false;
      } else {
        demoarray[action.paylod.state].Tasks[action.paylod.Tindex].steps[
          action.paylod.index
        ].status = true;
      }
      return { ...state, lists: demoarray };

    case "deltetask":
      const demotask = [...state.lists];
      const data = demotask[action.paylod.state].Tasks.filter(
        (item, i) => i != action.paylod.index
      );
      demotask[action.paylod.state].Tasks = data;

      return {
        ...state,
        lists: demotask,
      };
    case "Deletestep":
      const demostep = [...state.lists];
      const taskdata = demostep[action.paylod.state].Tasks[
        action.paylod.Tindex
      ].steps.filter((item, i) => i != action.paylod.index);
      // console.log(
      //   demostep[action.paylod.state].Tasks[action.paylod.Tindex].steps
      // );
      console.log(taskdata);
      demostep[action.paylod.state].Tasks[action.paylod.Tindex].steps =
        taskdata;

      return {
        ...state,
        lists: demostep,
      };
    default:
      return state;
  }
};
