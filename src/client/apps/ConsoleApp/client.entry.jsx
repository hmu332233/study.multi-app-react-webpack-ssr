import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrate(<App {...initialData} />, document.getElementById('root'));
