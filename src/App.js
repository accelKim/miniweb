// 최근 버전일경우 작성해주지 않아도 되지만 구버전에서 돌릴 경우를 생각해서 import
import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Container style={{ minHeight: '75vh' }}>Main 페이지입니다.</Container>
    </Layout>
  );
}

export default App;