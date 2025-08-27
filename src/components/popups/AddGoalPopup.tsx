import { useState } from 'react';
import { elementTogglePopup } from '../../utils/popup.utils';
import type { AddGoalPopupProp } from '../../types/Elements.types';

const AddGoalPopup = ({ setGoalInput, goalInput, setPopup, popup, handleClick }: AddGoalPopupProp) => {
  const [isMoneyRadioChecked, setIsMoneyRadioChecked] = useState(false);
  const [isStepsRadioChecked, setIsStepsRadioChecked] = useState(false);

  // Little trick.
  const setRadioCheck = (
    setRadioToCheck: React.Dispatch<React.SetStateAction<boolean>>,
    setRadioToUncheck: React.Dispatch<React.SetStateAction<boolean>>,
    radioToUncheck: boolean,
  ) => {
    if (radioToUncheck) {
      setRadioToUncheck(false);
    }

    setRadioToCheck(true);
  };

  return (
    <div className="popup">
      <div className="overlay" onClick={(event) => elementTogglePopup(setPopup, popup, event)}></div>
      <div className="popup-content p-3 rounded-4">
        <h2>Add goal</h2>
        <br />
        <div className="d-flex">
          <input
            className="add-input w-100 p-2 rounded-4"
            type="text"
            placeholder="your goal.."
            value={goalInput.content}
            onInput={(event) => setGoalInput({ ...goalInput, content: event.currentTarget.value })}
          />
        </div>
        <div className="goal-type mt-3 d-flex justify-content-evenly">
          <div className="radio-option">
            <label>Money</label>
            <input
              className="ms-2"
              type="radio"
              name="radio-button"
              onChange={() => setRadioCheck(setIsMoneyRadioChecked, setIsStepsRadioChecked, isStepsRadioChecked)}
            />
          </div>
          <div className="radio-option">
            <label>Steps</label>
            <input
              className="ms-2"
              type="radio"
              name="radio-button"
              onChange={() => setRadioCheck(setIsStepsRadioChecked, setIsMoneyRadioChecked, isMoneyRadioChecked)}
            />
          </div>
        </div>
        {isMoneyRadioChecked && (
          <div className="mt-3 d-flex justify-content-center">
            <p className="dollar-signal fs-4 me-1">$</p>
            <input
              className="add-input p-2 rounded-4"
              type="number"
              placeholder="money quantity..."
              value={goalInput.moneyQty?.toString()}
              onInput={(event) => setGoalInput({ ...goalInput, moneyQty: Number(event.currentTarget.value) })}
            />
            <a className="add-button ms-2 mt-1" onClick={(event) => handleClick(event)}>
              <i className="bi bi-check-square"></i>
            </a>
          </div>
        )}

        {isStepsRadioChecked && (
          <div className="mt-3 d-flex justify-content-center">
            <input
              className="add-input p-2 rounded-4"
              type="number"
              placeholder="steps quantity..."
              value={goalInput.steps?.toString()}
              onInput={(event) => setGoalInput({ ...goalInput, steps: Number(event.currentTarget.value) })}
            />
            <a className="add-button ms-2 mt-1" onClick={(event) => handleClick(event)}>
              <i className="bi bi-check-square"></i>
            </a>
          </div>
        )}
        <a
          className="close-popup position-absolute p-1"
          onClick={(event) => elementTogglePopup(setPopup, popup, event)}
        >
          <i className="bi bi-x-square"></i>
        </a>
      </div>
    </div>
  );
};

export default AddGoalPopup;
