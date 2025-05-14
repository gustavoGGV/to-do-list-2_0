import React from "react";

const GoalList = () => {
  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <a className="link-button float-end me-2">
          <i className="bi bi-plus-square"></i>
        </a>
      </div>
      <br />
      <div className="d-flex">
        <input className="ms-2" type="checkbox" />
        <h3 className="ms-2">Lose weight</h3>
      </div>
      <div className="d-flex">
        <input className="ms-2" type="checkbox" />
        <h3 className="ms-2">Buy a PS5</h3>
      </div>
    </div>
  );
};

export default GoalList;
