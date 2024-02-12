import React, { useState } from 'react';
import Counter from '../../../shared/components/Counter';

function MainPage({ userName }) {
  return (
    <div>
      <h1>Admin App - Main Page</h1>
      <p>User: {userName}</p>
      <Counter />
    </div>
  );
}

export default MainPage;
