import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddButton from "./AddButton";
import { deleteElement } from "../utils/elements.utils";
import type { TaskElement } from "../types/Elements.types";

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskElement[]>([{ id: "0000", content: "Ir ao mercado" }]);

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Task list:</h2>
        <AddButton listType="task" setElements={setTasks} elements={tasks} />
      </div>
      <br />

      {tasks.map(task => (
        <div className={task.id + " d-flex"} key={task.id}>
          <input className="ms-2" type="checkbox" onClick={deleteElement(task.id, setTasks)} />
          <h3 className="ms-2">{task.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
