import React, { useState } from 'react';
import AddTaskPopup from '../popups/AddTaskPopup';
import { getRandomNumber } from '../../utils/misc.utils';
import { elementTogglePopup } from '../../utils/popup.utils';
import type { TaskElement, TaskProp } from '../../types/Elements.types';

const AddTaskButton = ({ setTasks, tasks }: TaskProp) => {
  const [popup, setPopup] = useState(false);
  const [taskInput, setTaskInput] = useState<TaskElement>({ id: '', content: '' });

  const addTask = () => {
    const task: TaskElement = {
      id: getRandomNumber(9999),
      content: taskInput.content,
    };

    setTasks([...tasks, task]);
    setTaskInput({ id: '', content: '' });
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    addTask();
    elementTogglePopup(setPopup, popup, event);
  };

  return (
    <>
      <a className="link-button float-end" onClick={(event) => elementTogglePopup(setPopup, popup, event)}>
        <i className="bi bi-plus-square"></i>
      </a>

      {popup && (
        <AddTaskPopup
          setTaskInput={setTaskInput}
          taskInput={taskInput}
          setPopup={setPopup}
          popup={popup}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default AddTaskButton;
