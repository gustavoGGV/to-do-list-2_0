import React, { useState } from "react";
import AddGoalPopup from "./AddGoalPopup";
import { elementTogglePopup } from "../utils/popup.utils";
import { getRandomNumber } from "../utils/misc.utils";
import type { GoalElement, GoalProp } from "../types/Elements.types";

const AddGoalButton = ({ setGoals, goals }: GoalProp) => {
  const [goalInput, setGoalInput] = useState<GoalElement>({ id: '', content: '', type: 'money', moneyQty: null, steps: null });
  const [popup, setPopup] = useState(false);

  const addGoal = () => {
    const goal: GoalElement = {
      id: getRandomNumber(9999),
      content: goalInput.content,
      type: goalInput.type,
      moneyQty: goalInput.moneyQty,
      steps: goalInput.steps,
    };

    setGoals([...goals, goal]);
    setGoalInput({ id: '', content: '', type: 'money', moneyQty: null, steps: null });
  };

  // Needed so we can call more than one funciton inside an element.
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    addGoal();
    elementTogglePopup(setPopup, popup, event);
  };

  return (
    <>
      <a className="link-button float-end me-2" onClick={(event) => elementTogglePopup(setPopup, popup, event)}>
        <i className="bi bi-plus-square"></i>
      </a>

      {popup && (
        <AddGoalPopup
          setGoalInput={setGoalInput}
          goalInput={goalInput}
          setPopup={setPopup}
          popup={popup}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default AddGoalButton;
