import React, { useState } from 'react';

const MyButton = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const handleButtonClick = () => {
    // Perform some action here
    console.log('Button clicked!');
  };

  const handleToggleDisable = () => {
    setButtonDisabled(!isButtonDisabled);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick} disabled={isButtonDisabled}>
        Click me
      </button>
      <button onClick={handleToggleDisable}>
        {isButtonDisabled ? 'Enable Button' : 'Disable Button'}
      </button>
    </div>
  );
};

export default MyButton;