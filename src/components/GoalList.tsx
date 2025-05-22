import React, { useState } from "react";
import AddButton from "./AddButton";

const GoalList = () => {
  const [goals, setGoals] = useState(["Treinar"]);

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <AddButton listType="goal" setElements={setGoals} elements={goals} />
      </div>
      <br />

      {goals.map((goal, key) => (
        <div className="d-flex" key={key}>
          <input className="ms-2" type="checkbox" />
          <h3 className="ms-2">{goal}</h3>
        </div>
      ))}
    </div>
  );
};

export default GoalList;
