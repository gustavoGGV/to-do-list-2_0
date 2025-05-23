import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // For some reason, this import works inside GoalList.tsx as well.
import AddButton from "./AddButton";

const TaskList = () => {
  const [tasks, setTasks] = useState(["Ir ao mercado"]);

  const deleteTask = (taskToDelete: string) => {
    // Had to return a React.MouseEvent because TypeScript says it's needed with onClick events.
    return async (event: React.MouseEvent) => {
      // Delay 1 second (1000 ms).
      await setDelay(1000);
      // Delete the marked task.
      setTasks((tasks) => tasks.filter((task) => task !== taskToDelete));
      event.preventDefault();
    };
  };

  // Function to set delay.
  function setDelay(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Task list:</h2>
        <AddButton listType="task" setElements={setTasks} elements={tasks} />
      </div>
      <br />

      {tasks.map((task, key) => (
        <div className="d-flex" key={key}>
          <input className="ms-2" type="checkbox" onClick={deleteTask(task)} />
          <h3 className="ms-2">{task}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
