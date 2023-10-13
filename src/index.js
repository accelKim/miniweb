import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Header.css'
import App from './App';
import Home from './main/Home';
import A8 from './organization chart/a8';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardList from './forum/boardList';
import Write from './forum/write';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BoardList />
    <Write />
  </React.StrictMode>
);