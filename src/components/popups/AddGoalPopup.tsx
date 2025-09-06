import { useState } from 'react';
import { elementTogglePopup } from '../../utils/popup.utils';
import { validateElement } from '../../utils/elements.utils';
import type { AddGoalPopupProp } from '../../types/Elements.types';

const AddGoalPopup = ({ setGoalInput, goalInput, setPopup, popup, handleClick }: AddGoalPopupProp) => {
  const [isMoneyRadioChecked, setIsMoneyRadioChecked] = useState(false);
  const [isStepsRadioChecked, setIsStepsRadioChecked] = useState(false);
  const [errorList, setErrorList] = useState<string[]>([]);

  // Needed to clear inputs when the goal type is changed.
  const clearInputs = (inputType: 'money' | 'steps') => {
    if (inputType === 'money') {
      setGoalInput({ ...goalInput, moneyQty: null });

      return;
    }

    setGoalInput({ ...goalInput, steps: null });
  };

  // Needed to update the radios' selection.
  const setRadioCheck = (
    setRadioToCheck: React.Dispatch<React.SetStateAction<boolean>>,
    setRadioToUncheck: React.Dispatch<React.SetStateAction<boolean>>,
    radioToUncheck: boolean,
    inputToClear: 'money' | 'steps',
  ) => {
    if (radioToUncheck) {
      setRadioToUncheck(false);
    }

    setRadioToCheck(true);
    // Needed so the errors disappear when the goal type is changed.
    setErrorList([]);

    clearInputs(inputToClear);
  };

  const validateInput = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const errors = validateElement(goalInput.content, 'goal', goalInput.moneyQty, goalInput.steps);

    if (errors.length > 0) {
      setErrorList(errors);

      return;
    }

    handleClick(event);
  };

  return (
    <div className="popup">
      <div className="overlay" onClick={(event) => elementTogglePopup(setPopup, popup, event)}></div>
      <div className="popup-content p-3 rounded-4 col-10 col-sm-8 col-md-6 col-lg-4">
        <h2>Add goal</h2>
        <br />
        <div className="d-flex">
          <input
            className="add-input w-100 p-2 rounded-4"
            type="text"
            placeholder="your goal..."
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
              onChange={() =>
                setRadioCheck(setIsMoneyRadioChecked, setIsStepsRadioChecked, isStepsRadioChecked, 'steps')
              }
            />
          </div>
          <div className="radio-option">
            <label>Steps</label>
            <input
              className="ms-2"
              type="radio"
              name="radio-button"
              onChange={() =>
                setRadioCheck(setIsStepsRadioChecked, setIsMoneyRadioChecked, isMoneyRadioChecked, 'money')
              }
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
            <a className="add-button ms-2 mt-1" onClick={(event) => validateInput(event)}>
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
            <a className="add-button ms-2 mt-1" onClick={(event) => validateInput(event)}>
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
        <div className="mt-3">
          {errorList.length > 0 && errorList.map((error) => <p className="text-danger mb-1">{error}</p>)}
        </div>
      </div>
    </div>
  );
};

export default AddGoalPopup;
