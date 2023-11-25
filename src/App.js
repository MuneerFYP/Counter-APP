import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4 mb-4">Counter Application Task</h1>
      <p className="lead">Count: {count}</p>
      <div>
        <button
          className="btn btn-success mr-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
