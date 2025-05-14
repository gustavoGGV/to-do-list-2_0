import React, { useState } from "react";

const HookExample = () => {
  const [buttonValue, setButtonValue] = useState(0);

  const counter = () => {
    return (event: React.MouseEvent) => {
      setButtonValue(buttonValue + 1);
      event.preventDefault;
    };
  };

  return <button onClick={counter()}>{buttonValue}</button>;
};

export default HookExample;
