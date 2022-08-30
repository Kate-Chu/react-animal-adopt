import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContext from "../../store/AuthContext";
import { animalActions } from "../../store/animalSlice";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./Header.css";

const Header = React.memo(() => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const stateData = useSelector((state) => state.animal.data);
  const stateShowData = useSelector((state) => state.animal.showData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authCtx.logoutHandler();
    navigate("/", { replace: true });
  };

  const reloadHandler = () => {
    if ((stateData && !stateData[0] !== stateShowData[0]) || stateData.length) {
      dispatch(animalActions.changeShowDataByPage(1));
    } else {
      window.location.reload(false);
    }
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
                  <Nav.Link
                    as={Link}
                    to="/auth"
                    className="main-header__body__nav-link"
                    onClick={logoutHandler}
                  >
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
