import { useState } from 'react';
import AddGoalButton from '../add-buttons/AddGoalButton';
import { deleteElement, setGoalDone } from '../../utils/elements.utils';
import type { GoalProp, GoalElement } from '../../types/Elements.types';

const GoalList = ({ setGoals, goals }: GoalProp) => {
  // Needed to force an update.
  const [goalWasDone, setGoalWasDone] = useState(false);
  const [stepsWereUpdated, setStepsWereUpdated] = useState(false);

  // Needed to set a goal listing done.
  const isGoalDone = async (event: React.ChangeEvent<HTMLInputElement>, goal: GoalElement) => {
    if (
      (goal.moneyQty && Number(event.currentTarget.value) >= goal.moneyQty) ||
      (goal.steps && Number(event.currentTarget.value) >= goal.steps)
    ) {
      setGoalDone(setGoalWasDone, goalWasDone, setGoals, goal);
    }
  };

  // Needed to update the steps input of a goal listing from the user.
  const updateStepsInput = (isAddition: boolean, goal: GoalElement) => {
    if (goal.steps) {
      if (goal.stepsInput >= goal.steps - 1) {
        setGoalDone(setGoalWasDone, goalWasDone, setGoals, goal);
      }
    }

    if (isAddition) {
      goal.stepsInput++;
    }

    // Needed so the user cannot put negative steps input.
    if (goal.stepsInput > 0) {
      if (!isAddition) {
        goal.stepsInput--;
      }
    }

    setStepsWereUpdated(!stepsWereUpdated);
  };

  return (
    <div className="component p-4 rounded-4">
      <div className="d-flex">
        <h2 className="w-100 mb-1">Goal list:</h2>
        <AddGoalButton setGoals={setGoals} goals={goals} />
      </div>
      <br />

      {goals.length <= 0 && <h3>No goals!</h3>}

      {goals.length > 0 &&
        goals.map((goal) => (
          <div className={goal.id + ' d-flex flex-row align-items-center'} key={goal.id}>
            {goal.moneyQty && !goal.isDone && (
              <p className="fs-4 w-25 mb-1">
                $ <input className="money-qty-input" type="number" onChange={(event) => isGoalDone(event, goal)} /> / $
                {goal.moneyQty}
              </p>
            )}

            {goal.steps && !goal.isDone && (
              <div className="w-25 d-flex align-items-center">
                <a className="steps-btns fs-4" onClick={() => updateStepsInput(true, goal)}>
                  <i className="bi bi-plus-square"></i>
                </a>
                <a className="steps-btns fs-4 ms-1" onClick={() => updateStepsInput(false, goal)}>
                  <i className="bi bi-dash-square"></i>
                </a>
                <p className="fs-4 mb-1 ms-3">
                  {goal.stepsInput} / {goal.steps}
                </p>
              </div>
            )}

            {!goal.isDone && (
              <>
                <h3 className="ms-2 mb-1 w-50">{goal.content}</h3>
                <div className="d-flex justify-content-end w-25">
                  <a className="trash-can ms-2" onClick={() => deleteElement<GoalElement>(goal.id, setGoals)}>
                    <i className="bi bi-trash-fill"></i>
                  </a>
                </div>
              </>
            )}

            {goal.isDone && (
              <h3 className="text-success mb-1">
                {goal.content} done! <i className="bi bi-check2"></i>
              </h3>
            )}
          </div>
        ))}
    </div>
  );
};

export default GoalList;
