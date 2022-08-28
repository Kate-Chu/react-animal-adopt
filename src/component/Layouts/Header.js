import React, { useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./Header.css";

const Header = React.memo(() => {
  const navigation = useNavigate();
  const location = useLocation;
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logoutHandler();
    navigation("/", { replace: true });
  };

  const reloadHandler = () => {
    location.reload();
  };

  return (
    <>
      <Navbar key="md" expand="md" className="main-header">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="logo">
            陪你
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                陪你
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="main-header__body">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to="/animals"
                  className="main-header__body__nav-link"
                  onClick={reloadHandler}
                >
                  所有動物
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/animals/favorites"
                  className="main-header__body__nav-link"
                >
                  我的最愛
                </Nav.Link>
              </Nav>
              {!isLoggedIn ? (
                <Nav className="me-auto">
                  <Nav.Link
                    as={Link}
                    to="/auth"
                    className="main-header__body__nav-link"
                  >
                    Signin
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/auth" onClick={logoutHandler}>
                    Logout
                  </Nav.Link>
                </Nav>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
});

export default Header;
