import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import App from './App';
//import Notice from './notice'
import Schedule from './schedule';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Schedule />
  </React.StrictMode>
);