import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrease = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div className='App'>
      <h2>Counter Value: {counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;




//import React from 'react';
//import Counter from './Counter';

// const App = () => {
//   return (
//     <div>
//       <h1>React Counter App</h1>
//       <Counter />
//     </div>
//   );
// };

//export default App;



