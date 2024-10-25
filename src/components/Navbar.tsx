import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    // Navegar a la página de login
    navigate('/login.tsx');
  };

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
              <Nav.Link as={Link} to="/AboutPage.tsx">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Cambia el evento para redirigir a la página de login */}
          <Button variant="primary" onClick={handleGoToLogin}>
            Join Us
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
