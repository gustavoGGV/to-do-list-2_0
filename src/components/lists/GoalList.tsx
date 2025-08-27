import { useState } from 'react';
import AddGoalButton from '../add-buttons/AddGoalButton';
import { deleteElement } from '../../utils/elements.utils';
import type { GoalProp, GoalElement } from '../../types/Elements.types';
import { setDelay } from '../../utils/misc.utils';

const GoalList = ({ setGoals, goals }: GoalProp) => {
  // Needed to force an update.
  const [goalWasDone, setGoalWasDone] = useState(false);

  const isGoalDone = async (event: React.ChangeEvent<HTMLInputElement>, goal: GoalElement) => {
    if (
      (goal.moneyQty && Number(event.currentTarget.value) >= goal.moneyQty) ||
      (goal.steps && Number(event.currentTarget.value) >= goal.steps)
    ) {
      await setDelay(500);

      goal.isDone = true;
      setGoalWasDone(!goalWasDone);

      await setDelay(2000);
      deleteElement(goal.id, setGoals);
    }
  };

  return (
    <div className="component p-4 rounded-4">
      <div className="d-flex">
        <h2 className="w-100 mb-1">Goal list:</h2>
        <AddGoalButton setGoals={setGoals} goals={goals} />
      </div>
      <br />

      {goals.map((goal) => (
        <div className={goal.id + ' d-flex align-items-center'} key={goal.id}>
          {goal.moneyQty && !goal.isDone && (
            <p className="fs-4 w-25 mb-1">
              $ <input className="money-qty-input" type="number" onChange={(event) => isGoalDone(event, goal)} /> / $
              {goal.moneyQty}
            </p>
          )}

          {!goal.isDone && (
            <>
              <h3 className="ms-2 mb-1 w-50">{goal.content}</h3>
              <a className="trash-can ms-2 float-end" onClick={() => deleteElement<GoalElement>(goal.id, setGoals)}>
                <i className="bi bi-trash-fill"></i>
              </a>
            </>
          )}

          {goal.isDone && (
            <h3 className="text-success">
              Done <i className="bi bi-check2"></i>
            </h3>
          )}
        </div>
      ))}
    </div>
  );
};

export default GoalList;
