import React, { useState } from "react";
import AddButton from "./AddButton";

const GoalList = () => {
  const [goals] = useState([]);

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <AddButton listType="goal" elements={goals} />
      </div>
      <br />

      <div className="d-flex">
        <input className="ms-2" type="checkbox" />
        <h3 className="ms-2">Goal</h3>
      </div>
    </div>
  );
};

export default GoalList;
