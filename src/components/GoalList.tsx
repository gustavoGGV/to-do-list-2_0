import AddGoalButton from './AddGoalButton';
import { deleteElement } from '../utils/elements.utils';
import type { GoalProp, GoalElement } from '../types/Elements.types';

const GoalList = ({ setGoals, goals }: GoalProp) => {
  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <AddGoalButton setGoals={setGoals} goals={goals} />
      </div>
      <br />

      {goals.map(goal => (
        <div className={goal.id + " d-flex"} key={goal.id}>
          <input className="ms-2" type="checkbox" onClick={deleteElement<GoalElement>(goal.id, setGoals)} />
          <h3 className="ms-2">{goal.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default GoalList;