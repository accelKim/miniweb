// 최근 버전일경우 작성해주지 않아도 되지만 구버전에서 돌릴 경우를 생각해서 import
import React from "react";
import Layout from "./layouts/Layout";
import  ReactDOM from 'react-dom/client';
// 라우팅
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
// 학교소개 - 학교위치
import Location from "./univ_intro/Location";
// 학교소개 - 기구체계도
import Org from "./org_chart/A";
// 학부학과
import DeptIntro from "./dept/DeptIntro";

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
          <Route path="/orgChart" element={<Org />} />
          <Route path="/ba" element={<DeptIntro />} />
          <Route path="/dept_intro" element={<DeptIntro />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;