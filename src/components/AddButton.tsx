import React, { useState } from "react";

// Needed to create this type because TS screams if the props are passed in a simpler way.
type Prop = { listType: string; elements: any[] };

const AddButton = ({ listType, elements }: Prop) => {
  const [popup, setPopup] = useState(false);
  const [elementInput, setElementInput] = useState("");

  // Toggle popup when a element is clicked.
  const elementTogglePopup = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setPopup(!popup);
  };

  // The mouse events from links/buttons(elements) are different from divs, so I had to differentiate.
  const divTogglePopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setPopup(!popup);
  };

  // Adds text input from the user to the elements array.
  const addElement = () => {
    elements.push(elementInput);
    setElementInput("");
  };

  // Needed so we can call more than one funciton inside an element.
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    elementTogglePopup(event);
    addElement();
    console.log(elements);
  };
  return (
    <>
      <a className="link-button float-end me-2" onClick={elementTogglePopup}>
        <i className="bi bi-plus-square"></i>
      </a>

      {/* If popup is true... */}
      {popup && (
        <div className="popup">
          <div
            className="overlay"
            onClick={(event) => divTogglePopup(event)}
          ></div>
          <div className="popup-content p-3 rounded-4">
            <h2>Add {listType}</h2>
            <br />
            <form className="d-flex">
              <input
                className="add-input w-100 p-2 rounded-4"
                type="text"
                placeholder={`your ${listType}...`}
                value={elementInput}
                onInput={
                  /* As user types, elementInput will receive its typing */ (
                    event
                  ) => setElementInput(event.currentTarget.value)
                }
              />
              <br />
              <br />
              <a
                className="add-button ms-2 mt-1"
                onClick={(event) => handleClick(event)}
              >
                <i className="bi bi-check-square"></i>
              </a>
            </form>
            <a
              className="close-popup position-absolute p-1"
              onClick={elementTogglePopup}
            >
              <i className="bi bi-x-square"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
