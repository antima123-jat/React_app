import React, { useState } from 'react';

const ToggleElement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>
        {isVisible ? 'Hide Element' : 'Show Element'}
      </button>

      {isVisible && <div>Element to Show/Hide</div>}
    </div>
  );
}

export default ToggleElement;
