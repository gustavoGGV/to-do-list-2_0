import AddTaskButton from "./AddTaskButton";
import "bootstrap-icons/font/bootstrap-icons.css";
import { deleteElement } from "../utils/elements.utils";
import type { TaskElement, TaskProp } from "../types/Elements.types";

const TaskList = ({ setTasks, tasks }: TaskProp) => {
  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Task list:</h2>
        <AddTaskButton setTasks={setTasks} tasks={tasks} />
      </div>
      <br />

      {tasks.map(task => (
        <div className={task.id + " d-flex"} key={task.id}>
          <input className="ms-2" type="checkbox" onClick={deleteElement<TaskElement>(task.id, setTasks)} />
          <h3 className="ms-2">{task.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
