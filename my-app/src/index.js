import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// METHOD 1 - React.createElement
const myHeader = React.createElement(
  'h1',
  { className: 'header_title' },
  'CREATE ELEMENT - Hello React World!'
);

const rootSub = ReactDOM.createRoot(document.getElementById('app-header'));
rootSub.render(myHeader);