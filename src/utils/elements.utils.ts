import React from 'react';
import { setDelay } from './misc.utils';
import type { TaskElement, GoalElement } from '../types/Elements.types';

/**
 * This function will set a task listing done, changing its style and then deleting it.
 * @param key - string
 * @param setTasks - React.Dispatch<React.SetStateAction<TaskElement[]>>
 * @param event - React.MouseEvent<HTMLInputElement, MouseEvent>
 */
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

/**
 * This function will set a goal listing done, setting its isDone property and then deleting it.
 * @param setGoalWasDone - React.Dispatch<React.SetStateAction<boolean>>
 * @param goalWasDone - boolean
 * @param setGoals - React.Dispatch<React.SetStateAction<GoalElement[]>>
 * @param goal - GoalElement
 */
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

/**
 * This function will delete an element - that contains an id property - from its array using its setState.
 * @param key - string
 * @param setElements - React.Dispatch<React.SetStateAction<Element[]>>
 */
export const deleteElement = <Element extends { id: string }>(
  key: string,
  setElements: React.Dispatch<React.SetStateAction<Element[]>>,
) => {
  setElements((elements) => elements.filter((element) => element.id != key));
};
