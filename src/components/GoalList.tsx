import { useState } from "react";
import AddButton from "./AddButton";
import { deleteElement } from "../utils/elements.utils";
import type { GoalElement } from "../types/Elements.types";

const GoalList = () => {
  const [goals, setGoals] = useState<GoalElement[]>([{ id: "0000", content: "Fazer CNH" }]);

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <AddButton listType="goal" setElements={setGoals} elements={goals} />
      </div>
      <br />

      {goals.map(goal => (
        <div className={goal.id + " d-flex"} key={goal.id}>
          <input className="ms-2" type="checkbox" onClick={deleteElement(goal.id, setGoals)} />
          <h3 className="ms-2">{goal.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default GoalList;
