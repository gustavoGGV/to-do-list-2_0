import { useState } from 'react';
import AddGoalButton from './AddGoalButton';
import { deleteElement } from '../utils/elements.utils';
import type { GoalProp, GoalElement } from '../types/Elements.types';
import { setDelay } from '../utils/misc.utils';

const GoalList = ({ setGoals, goals }: GoalProp) => {
  // Needed to force an update.
  const [goalWasDone, setGoalWasDone] = useState(false);

  const isGoalDone = async (
    event: React.ChangeEvent<HTMLInputElement>,
    goal: GoalElement,
  ) => {
    if (
      (goal.moneyQty && Number(event.currentTarget.value) >= goal.moneyQty) ||
      (goal.steps && Number(event.currentTarget.value) >= goal.steps)
    ) {
      goal.isDone = true;
      setGoalWasDone(!goalWasDone);
      
      await setDelay(2000);
      deleteElement(goal.id, setGoals);
    }
  };

  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <AddGoalButton setGoals={setGoals} goals={goals} />
      </div>
      <br />

      {goals.map((goal) => (
        <div className={goal.id + ' d-flex'} key={goal.id}>

          {goal.moneyQty && (
            <p className="fs-4 w-25">
              ${' '}
              <input
                className="money-qty-input add-input"
                type="number"
                onChange={(event) => isGoalDone(event, goal)}
              />{' '}
              / ${goal.moneyQty}
            </p>
          )}

          <h3 className="ms-2">{goal.content}</h3>
          <a className="trash-can ms-2" onClick={(_event) => deleteElement<GoalElement>(goal.id, setGoals)}>
            <i className="bi bi-trash-fill"></i>
          </a>

          {goal.isDone && (
            <p>done</p>
          )}

        </div>
      ))}
    </div>
  );
};

export default GoalList;
