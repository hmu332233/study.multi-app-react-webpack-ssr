import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';

const App = (props) => {
  return (
    <MainPage {...props} />
    // <Routes>
    //   <Route path="*" element={() => <h1>Admin App</h1>} />
    // </Routes>
  );
};

export default App;
