import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // For some reason, this import works inside GoalList.tsx as well.
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const TaskList = () => {
  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">To-do list:</h2>
        <a className="link-button float-end me-2">
          <Popup
            trigger={<i className="bi bi-plus-square"></i>}
            position="right center"
          >
            <p>test</p>
          </Popup>
        </a>
      </div>
      <br />
      <div className="d-flex">
        <input className="ms-2" type="checkbox" />
        <h3 className="ms-2">Test</h3>
        <a className="link-button trash-can float-end ms-2">
          <i className="bi bi-trash3"></i>
        </a>
      </div>
    </div>
  );
};

export default TaskList;
