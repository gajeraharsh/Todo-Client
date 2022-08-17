import { MdLightMode } from "react-icons/md";
import { AiOutlineStar, AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";

const initstate = {
  lists: [
    {
      name: "My Day",
      icon: <MdLightMode className="Light_icon" />,
      count: 1,
      Tasks: [],
    },
    {
      name: "Important",
      icon: <AiOutlineStar className="Light_icon" />,
      count: 1,
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
      return { ...state, current: action.paylod };
    case "addtaskinlist":
      return {
        ...state,
        lists: state.lists.map((item, i) =>
          i === action.paylod.index ? action.paylod.ddata : item
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

    default:
      return state;
  }
};
