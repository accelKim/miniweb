import React from 'react';
import  ReactDOM from 'react-dom/client';
import './css/Header.css'
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostDetail from './forum/BoardPage/PostDetail';
import PostEdit from './forum/BoardPage/PostEdit';
import PostCreate from './forum/BoardPage/PostCreate';
import PostList from './forum/BoardPage/PostList';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App이라는 컴포넌트의 그림을 그려주고 있다는 의미
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
