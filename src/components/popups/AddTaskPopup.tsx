import { elementTogglePopup } from '../../utils/popup.utils';
import type { AddTaskPopupProp } from '../../types/Elements.types';

const AddTaskPopup = ({ setTaskInput, taskInput, setPopup, popup, handleClick }: AddTaskPopupProp) => {
  return (
    <div className="popup">
      <div className="overlay" onClick={(event) => elementTogglePopup(setPopup, popup, event)}></div>
      <div className="popup-content p-3 rounded-4">
        <h2>Add task</h2>
        <br />
        <div className="d-flex">
          <input
            className="add-input w-100 p-2 rounded-4"
            type="text"
            placeholder="your task..."
            value={taskInput.content}
            onInput={(event) => setTaskInput({ id: '', content: event.currentTarget.value })}
          />
          <a className="add-button ms-2 mt-1" onClick={(event) => handleClick(event)}>
            <i className="bi bi-check-square"></i>
          </a>
        </div>
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

export default AddTaskPopup;
