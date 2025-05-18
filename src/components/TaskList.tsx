import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // For some reason, this import works inside GoalList.tsx as well.
import AddButton from "./AddButton";

const TaskList = () => {
  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">To-do list:</h2>
        <AddButton listType="task" />
      </div>
      <br />

      <div className="d-flex">
        <input className="ms-2" type="checkbox" />
        <h3 className="ms-2">Test</h3>
      </div>
    </div>
  );
};

export default TaskList;
