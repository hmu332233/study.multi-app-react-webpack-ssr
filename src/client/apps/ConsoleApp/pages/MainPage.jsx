import React, { useState } from 'react';
import Counter from '../../../shared/components/Counter';

function MainPage({ userName }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Console App - Main Page</h1>
      <p>User: {userName}</p>
      <Counter />
    </div>
  );
}

export default MainPage;
