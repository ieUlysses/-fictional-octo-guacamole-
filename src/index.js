import React from 'react';
import ReactDOM from 'react-dom';

import MyProvider from "./Context/MyProvider"

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

