import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // For some reason, this import works inside GoalList.tsx as well.
import AddButton from "./AddButton";

export type TaskElement = {
  id: string;
  content: string;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskElement[]>([{id: "0000", content: "Ir ao mercado"}]);

  const deleteTask = (key: string) => {
    // Had to return a React.MouseEvent because TypeScript says it's needed with onClick events.
    return async (event: React.MouseEvent) => {
      // Needed to get the div element.
      const taskListing = (event.target as HTMLTextAreaElement).parentElement;
      const classNameOriginalValue = taskListing?.className;

      if(taskListing) {
        // Needed to check if the className of the div element from the task that was passed has the task's key. 
        if(classNameOriginalValue?.includes(key)) {
          taskListing.className = key + " d-flex greyed-out";
        }
      }

      // Delay 1 second (1000 ms).
      await setDelay(1000);

      setTasks((tasks) => tasks.filter((task) => task.id != key));
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

      {tasks.map(task => (
        <div className={task.id + " d-flex"} key={task.id}>
          <input className="ms-2" type="checkbox" onClick={deleteTask(task.id)} />
          <h3 className="ms-2">{task.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
