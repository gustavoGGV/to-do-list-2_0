import { useState } from 'react';
import TaskList from './lists/TaskList';
import GoalList from './lists/GoalList';
import type { TaskElement, GoalElement } from '../types/Elements.types';

const InsideBodyContent = () => {
  const [tasks, setTasks] = useState<TaskElement[]>([]);
  const [goals, setGoals] = useState<GoalElement[]>([]);

  return (
    <div className="d-flex">
      <div className="w-50 p-5">
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
      <div className="w-50 p-5 float-end">
        <GoalList setGoals={setGoals} goals={goals} />
      </div>
    </div>
  );
};

export default InsideBodyContent;
