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

/**
 * This function will validate if the user's input is okay to pass.
 * @param content - string
 * @param elementType - 'task' | 'goal'
 * @param moneyQty - number | null | undefined
 * @param steps - number | null | undefined
 * @returns - string[]
 */
export const validateElement = (
  content: string,
  elementType: 'task' | 'goal',
  moneyQty?: number | null,
  steps?: number | null,
): string[] => {
  const errors: string[] = [];

  if (!content) {
    errors.push('Please fill the ' + elementType + ' field!');
  }

  if (elementType === 'goal') {
    if (!moneyQty && !steps) {
      errors.push('Please fill the money/steps quantity field!');
    }

    if (moneyQty && (moneyQty > 999999999 || moneyQty <= 0)) {
      errors.push('The money goal has to be between $0.00 and $999,999,999.00.');
    }

    if (steps && (steps > 1000 || steps <= 0)) {
      errors.push('The steps goal has to be between 0 and 1.000.');
    }
  }

  if (content.length > 120) {
    errors.push('The ' + elementType + ' field cannot have more than 120 characters!');
  }

  return errors;
};
