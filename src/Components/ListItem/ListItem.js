import React from "react";
import "./ListItem.scss";
import { MdLightMode } from "react-icons/md";

function ListItem({ name, count, icon, onClick }) {
  return (
    <div className="list_item" onClick={onClick}>
      <div className="listitem_wrappper">
        <div className="Icon_div">{icon}</div>
        <div className="ListItem_name">{name}</div>
        <div className="ListItem_Count">{count}</div>
      </div>
    </div>
  );
}

export default ListItem;
