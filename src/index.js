import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Header.css'
import App from './App';
import Home from './main/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);