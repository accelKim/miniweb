// 최근 버전일경우 작성해주지 않아도 되지만 구버전에서 돌릴 경우를 생각해서 import
import React from "react";
import Layout from "./layouts/Layout";
import QuickUnderGraduate from "./main/QuickUnderGraduate";




function App() {
  return (
    <Layout>
      <QuickUnderGraduate />
    </Layout>

  );
}

export default App;