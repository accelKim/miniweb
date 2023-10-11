import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Navbar.Brand href="#home">
            {/* 여기에 로고 이미지를 추가 */}
            <img
              src="ori-logo.png"
              width="160"
              height="102"
              className=""
            />
          </Navbar.Brand>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="#intro">학교소개</Nav.Link>
            <Nav.Link href="#undergraduate_major">학부전공</Nav.Link>
            <Nav.Link href="#academic_info">학사정보</Nav.Link>
            <Nav.Link href="#class_grade">수업•성적</Nav.Link>
            <Nav.Link href="#university life">대학생활</Nav.Link>
            <Nav.Link href="#enrolment">수강신청</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#login">
              <Button variant="secondary">Log In</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;