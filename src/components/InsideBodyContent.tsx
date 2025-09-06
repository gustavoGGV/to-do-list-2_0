import { useState } from 'react';
import TaskList from './lists/TaskList';
import GoalList from './lists/GoalList';
import type { TaskElement, GoalElement } from '../types/Elements.types';

const InsideBodyContent = () => {
  const [tasks, setTasks] = useState<TaskElement[]>([]);
  const [goals, setGoals] = useState<GoalElement[]>([]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 p-5">
          <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
        <div className="col-12 col-lg-6 p-5">
          <GoalList setGoals={setGoals} goals={goals} />
        </div>
      </div>
    </div>
  );
};

export default InsideBodyContent;
