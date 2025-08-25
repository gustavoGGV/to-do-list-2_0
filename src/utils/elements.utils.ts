import React from 'react';
import { setDelay } from './misc.utils';

export const setElementDone = async <Element extends { id: string }>(
  key: string,
  setElements: React.Dispatch<React.SetStateAction<Element[]>>,
  event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement, MouseEvent>,
) => {
  let elementListing;

  elementListing = (event.target as HTMLElement).parentElement;

  const classNameOriginalValue = elementListing?.className;

  if (elementListing) {
    if (classNameOriginalValue?.includes(key)) {
      elementListing.className = key + ' greyed-out-task d-flex';
    }
  }

  await setDelay(3000);

  deleteElement(key, setElements);
};

export const deleteElement = <Element extends { id: string }>(
  key: string,
  setElements: React.Dispatch<React.SetStateAction<Element[]>>,
) => {
  setElements((elements) => elements.filter((element) => element.id != key));
};
