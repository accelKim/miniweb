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


// 라우팅
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
// 학교소개 - 학교위치
import Location from "./univ_intro/Location";
// 학교소개 - 기구체계도
import A8 from "./org_chart/a8";
// 학부학과
import DeptIntro from "./major/DeptIntro";
import Footer from "./layouts/Footer";

// index.js에 의해서 App이 불러와짐
// 여기에는 기본특만 놔두시면 됩니다.(메인은 Home에 모아져 있음)
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location" element={<Location />} />
          <Route path="/orgChart" element={<A8 />} />
          <Route path="/ba" element={<DeptIntro />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;