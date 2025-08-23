import { useState } from "react";
import TaskList from "./TaskList";
import GoalList from "./GoalList";
import type { TaskElement, GoalElement } from "../types/Elements.types";

const InsideBodyContent = () => {
  const [tasks, setTasks] = useState<TaskElement[]>([{ id: "0000", content: "Do the dishes" }]);
  const [goals, setGoals] = useState<GoalElement[]>([{ id: "0000", content: "Buy a car", type: "money", moneyQty: 20000, steps: null }]);

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
