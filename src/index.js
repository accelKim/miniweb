// 여기에서 index.html파일을 가져옴
import React from 'react';
import  ReactDOM from 'react-dom/client';
import './css/Header.css'
import App from './App';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App이라는 컴포넌트의 그림을 그려주고 있다는 의미
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
