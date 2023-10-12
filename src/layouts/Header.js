import React, { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown, Dropdown } from "react-bootstrap";

const Header = () => {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);

  const handleMouseEnter = (menu) => {
    if (menu === 1) {
      setShowMenu1(true);
      setShowMenu2(false);
      setShowMenu3(false);
      setShowMenu4(false);
    } else if (menu === 2) {
      setShowMenu1(false);
      setShowMenu2(true);
      setShowMenu3(false);
      setShowMenu4(false);
    } else if (menu === 3) {
      setShowMenu1(false);
      setShowMenu2(false);
      setShowMenu3(true);
      setShowMenu4(false);
    } else {
      setShowMenu1(false);
      setShowMenu2(false);
      setShowMenu3(false);
      setShowMenu4(true);
    }
  };

  const handleMouseLeave = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(false);
  };

  return (
    <header>
      <Navbar bg="primary"  expand="lg" data-bs-theme="dark" style={{ height: '80px' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo.png"
              width="160"
              height="102"
              alt="ori-logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Collapse id="navbar-dark-example" />

            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="학교소개"
                menuVariant="dark"
                show={showMenu1}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item href="#intro">학교위치</NavDropdown.Item>
                <NavDropdown.Item href="#undergraduate_major">기구체계도</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="학부전공"
                menuVariant="dark"
                expand="lg"
                show={showMenu2}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item href="#">미용예술학부</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#beauty_major">미용 전공</NavDropdown.Item>
                <NavDropdown.Item href="#makeup_major">메이크업 전공</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#">융합예술학부</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#video_production_major">영상제작 전공</NavDropdown.Item>
                <NavDropdown.Item href="#digital_media_design_major">디지털미디어디자인 전공</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#">디저트조리학부</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#dessert_bakery_major">디저트베이커리 전공</NavDropdown.Item>
                <NavDropdown.Item href="#culinary_arts_major">조리 전공</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown
                id="class_grade"
                title="수업•성적"
                menuVariant="dark"
                show={showMenu3}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item href="#class_related">수업 관련</NavDropdown.Item>
                <NavDropdown.Item href="#grade_related">성적 관련</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown
                id="university_life"
                title="대학생활"
                menuVariant="dark"
                show={showMenu4}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item href="#board">게시판</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown
                id="enrolment"
                title="수강신청"
                menuVariant="dark"
                href="#bas"
              >
                <NavDropdown.Item href="#bascket">장바구니</NavDropdown.Item>
              </NavDropdown>
            </Nav>
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
