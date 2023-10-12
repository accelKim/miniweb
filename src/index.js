import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css';
import App from './App';
//import Notice from './notice'
import Schedule from './schedule';
import Calendar from './calendar';
import A8 from './a8'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A8 />
  </React.StrictMode>
);