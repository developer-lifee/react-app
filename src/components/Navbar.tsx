import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import LoginModal from "./loginModal.tsx";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="aaipaLogo.png"
              alt="Logo"
              height="40"
              className="d-inline-block align-top"
            />
            {" AAIPA Association"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Link as={Link} to="/AboutPage">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="primary" onClick={handleShowLogin}>
            Join Us
          </Button>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
    </>
  );
};

export default MyNavbar;
