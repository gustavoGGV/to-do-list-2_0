import React from "react";
import { setDelay } from "./misc.utils";

export const deleteElement = <Element extends { id: string }>(key: string, setElements: React.Dispatch<React.SetStateAction<Element[]>>) => {
  // Had to return a React.MouseEvent because TypeScript says it's needed with onClick events.
  return async (event: React.MouseEvent) => {
    // Needed to get the div element.
    const elementListing = (event.target as HTMLElement).parentElement;
    const classNameOriginalValue = elementListing?.className;

    if (elementListing) {
      // Needed to check if the className of the div element from the task that was passed has the task's key.
      if (classNameOriginalValue?.includes(key)) {
        elementListing.className = key + " greyed-out d-flex";
      }
    }

    // Delay 1 second (1000 ms).
    await setDelay(1000);

    setElements((elements) => elements.filter((element) => element.id != key));
    event.preventDefault();
  };
};
