import React, { useState } from "react";

/* Needed to create this type because TS screams if the props are passed in a simpler way */
type Prop = { listType: string };

const AddButton = ({ listType }: Prop) => {
  /* Popup will be hidden by default (false) */
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <a className="link-button float-end me-2" onClick={togglePopup}>
        <i className="bi bi-plus-square"></i>
      </a>

      {/* If popup is true... */}
      {popup && (
        <div className="popup">
          <div className="overlay" onClick={togglePopup}></div>
          <div className="popup-content p-3 rounded-4">
            <h2>Add {listType}</h2>
            <br />
            <form className="d-flex">
              <input
                className="add-input w-100 p-2 rounded-4"
                type="text"
                placeholder={`your ${listType}...`}
              />
              <br />
              <br />
              <a className="add-button ms-2 mt-1" onClick={togglePopup}>
                <i className="bi bi-check-square"></i>
              </a>
            </form>
            <a
              className="close-popup position-absolute p-1"
              onClick={togglePopup}
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
