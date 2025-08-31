import AddTaskButton from '../add-buttons/AddTaskButton';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { setTaskDone } from '../../utils/elements.utils';
import type { TaskProp } from '../../types/Elements.types';

const TaskList = ({ setTasks, tasks }: TaskProp) => {
  return (
    <div className="component p-4 rounded-4">
      <div className="d-flex">
        <h2 className="w-100">Task list:</h2>
        <AddTaskButton setTasks={setTasks} tasks={tasks} />
      </div>
      <br />

      {tasks.length <= 0 && <h3>No tasks!</h3>}

      {tasks.length > 0 &&
        tasks.map((task) => (
          <div className={task.id + ' d-flex'} key={task.id}>
            <input type="checkbox" onClick={(event) => setTaskDone(task.id, setTasks, event)} />
            <h3 className="ms-2">{task.content}</h3>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
