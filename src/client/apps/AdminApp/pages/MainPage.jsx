import React, { useState } from 'react';

function MainPage({ userName }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Admin App - Main Page</h1>
      <p>User: {userName}</p>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default MainPage;
