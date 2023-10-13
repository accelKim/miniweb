// 최근 버전일경우 작성해주지 않아도 되지만 구버전에서 돌릴 경우를 생각해서 import
import React from "react";
import Header from "./layouts/Header";
import Slide from "./main/slide";
import Notice from "./main/notice";
import Schedule from "./main/schedule";
import QuickUnderGraduate from "./main/QuickUnderGraduate";
import Footer from "./layouts/Footer";

// index.js에 의해서 App이 불러와짐
function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Notice />
      <Schedule />
      <QuickUnderGraduate />
      <Footer />
    </div>
  );
}

export default App;