import { useState } from "react";
import ElementList from "./ElementList";
import type { TaskElement, GoalElement } from "../types/Elements.types";

const InsideBodyContent = () => {
  const [tasks, setTasks] = useState<TaskElement[]>([{ id: "0000", content: "Do the dishes" }]);
  const [goals, setGoals] = useState<GoalElement[]>([{ id: "0000", content: "Buy a car" }]);

  return (
    <div className="d-flex">
      <div className="w-50 p-5">
        <ElementList listType="task" setElements={setTasks} elements={tasks} />
      </div>
      <div className="w-50 p-5 float-end">
        <ElementList listType="goal" setElements={setGoals} elements={goals} />
      </div>
    </div>
  );
};

export default InsideBodyContent;
