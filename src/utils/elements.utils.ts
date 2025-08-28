import React from 'react';
import { setDelay } from './misc.utils';
import type { TaskElement, GoalElement } from '../types/Elements.types';

export const setTaskDone = async (
  key: string,
  setTasks: React.Dispatch<React.SetStateAction<TaskElement[]>>,
  event: React.MouseEvent<HTMLInputElement, MouseEvent>,
) => {
  const elementListing = (event.target as HTMLElement).parentElement;
  const classNameOriginalValue = elementListing?.className;

  if (elementListing) {
    if (classNameOriginalValue?.includes(key)) {
      elementListing.className = key + ' greyed-out-task d-flex';
    }
  }

  await setDelay(1000);

  deleteElement(key, setTasks);
};

export const setGoalDone = async (
  setGoalWasDone: React.Dispatch<React.SetStateAction<boolean>>,
  goalWasDone: boolean,
  setGoals: React.Dispatch<React.SetStateAction<GoalElement[]>>,
  goal: GoalElement,
) => {
  await setDelay(500);

  goal.isDone = true;
  setGoalWasDone(!goalWasDone);

  await setDelay(2000);
  deleteElement(goal.id, setGoals);
};

export const deleteElement = <Element extends { id: string }>(
  key: string,
  setElements: React.Dispatch<React.SetStateAction<Element[]>>,
) => {
  setElements((elements) => elements.filter((element) => element.id != key));
};
