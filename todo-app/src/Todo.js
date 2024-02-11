import React, { useState } from "react";
import axios from "axios";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { MdDelete, MdEdit } from "react-icons/md";
import Popup from "./Popup";

const Todo = (props) => {
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState();
  axios.defaults.withCredentials = true;

  const handelUpdate = (id) => {
    axios
      .put("http://localhost:5050/api/update/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handelDelete = (id) => {
    axios
      .delete("http://localhost:5050/api/delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const OpenPopup = () => {
    setPopup(true);
  };

  return (
    <div>
      <div className="task-box">
        <div className="left" onClick={() => handelUpdate(props.id)}>
          <div className="checkbox">
          {props.done ? (
            <RiCheckboxCircleFill />
          ) : (
            <RiCheckboxBlankCircleLine />
          )}
          </div>
        <div className="text">
          <h3 className={props.done ? "line_word" : ""}>{props.text}</h3>
        </div>
        </div>
        <div className="right">
          <MdEdit className="edit-button" onClick={() => OpenPopup()} />
          <MdDelete className="delete-button" onClick={() => handelDelete(props.id)} />
        </div>
      </div>
      {popup === true ? <Popup setPopup={setPopup} id={props.id} /> : <></>}
    </div>
  );
};

export default Todo;
