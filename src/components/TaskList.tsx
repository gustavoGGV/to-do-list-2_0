import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // For some reason, this import works inside GoalList.tsx as well.
import AddButton from "./AddButton";

const TaskList = () => {
  const [tasks, setTasks] = useState(["Ir ao mercado"]);

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Task list:</h2>
        <AddButton listType="task" setElements={setTasks} elements={tasks} />
      </div>
      <br />

      {tasks.map((task, key) => (
        <div className="d-flex" key={key}>
          <input className="ms-2" type="checkbox" />
          <h3 className="ms-2">{task}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
