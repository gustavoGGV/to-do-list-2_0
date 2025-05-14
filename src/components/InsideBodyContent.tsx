import React from "react";
import TaskList from "./TaskList";
import GoalList from "./GoalList";

const InsideBodyContent = () => {
  return (
    <div className="d-flex">
      <div className="w-50 p-5">
        <TaskList />
      </div>
      <div className="w-50 p-5 float-end">
        <GoalList />
      </div>
    </div>
  );
};

export default InsideBodyContent;
