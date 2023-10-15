// 최근 버전일경우 작성해주지 않아도 되지만 구버전에서 돌릴 경우를 생각해서 import
import React from "react";
import Layout from "./layouts/Layout";
import  ReactDOM from 'react-dom/client';
// 라우팅
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
// Header - 로그인
import LoginKakao from "./login/LoginKakao";

// 학교소개 - 학교위치
import Location from "./univ_intro/Location";
// 학교소개 - 기구체계도
import Org from "./org_chart/A";
// 학부학과
import DeptIntro from "./dept/DeptIntro";
import MakeupMain from "./major_makeup/MakeupMain";
import DesertDeptIntro from "./dept_desert/DesertDeptIntro";
import RefinementDeptIntro from "./dept_refinement/RefinementDeptIntro";
import Culinary_Arts from "./major_culinary Arts/Culinary_Arts";

import Footer from "./layouts/Footer";
import Cosmetology from "./major_cosmetology/Cosmetology";
import QuickUnderGraduate from "./main/QuickUnderGraduate";
import DessertAndBaking from "./major_dessertNbaking/DessertAndBaking";

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
          <Route path="/cosmetology_department" element={<Cosmetology />} />
          <Route path="/makeup_artistry_department" element={<MakeupMain />} />
          <Route path="/dessert_and_baking" element={<DessertAndBaking />} />
          <Route path="/culinary_arts" element={<Culinary_Arts />} />

          <Route path="/dpca" element={<DesertDeptIntro />} />
          <Route path="/cla" element={<RefinementDeptIntro />} />


          <Route path="/LoginKakao" element={<LoginKakao />} />

          <Route path="/ba" element={<QuickUnderGraduate />} />
          <Route path="/cia" element={<QuickUnderGraduate />} />
          <Route path="/dpca" element={<QuickUnderGraduate />} />
          <Route path="/cla" element={<QuickUnderGraduate />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;