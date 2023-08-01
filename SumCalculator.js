import React, { useState } from 'react';

const SumCalculator = () => {
  // State variables to hold the input values and the result
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  // Function to handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Use parseFloat to convert the input values to numbers
    if (name === 'num1') {
      setNum1(parseFloat(value));
    } else if (name === 'num2') {
      setNum2(parseFloat(value));
    }
  };

  // Function to calculate the sum and update the result
  const calculateSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div className="App">
      <h2>Sum Calculator</h2>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={handleInputChange}
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
