// 최근 버전일경우 작성해주지 않아도 되지만 구버전에서 돌릴 경우를 생각해서 import
import React from "react";
import Layout from "./layouts/Layout";
import  ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import PostDetail from './forum/BoardPage/PostDetail';
import PostEdit from './forum/BoardPage/PostEdit';
import PostCreate from './forum/BoardPage/PostCreate';
import PostList from './forum/BoardPage/PostList';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
        <Route path="/create" element={<PostCreate />} />
      </Routes>
  
    </BrowserRouter>
  </div>
  );
}

export default App;