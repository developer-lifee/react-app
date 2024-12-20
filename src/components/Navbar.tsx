import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyNavbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/biblioteca">Biblioteca</Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                <Nav.Link as={Link} to="/forms">Forms</Nav.Link>
              </>
            )}
          </Nav>
          {user ? (
            <Button variant="outline-light" onClick={handleLogout} className="ms-3">
              Logout
            </Button>
          ) : (
            <Button variant="primary" onClick={() => navigate('/login')} className="ms-3">
              Join Us
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
