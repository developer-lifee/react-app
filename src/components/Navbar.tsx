import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyNavbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    // Elimina el token de autenticación
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    logout(); // Limpia el estado del usuario en el contexto
    // Redirige al usuario a la página de inicio de sesión
    navigate('/login');
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
          <Button
            variant="warning"
            className="ms-3"
            href="https://donate.stripe.com/aEU3ds2zd6jlbxCdQQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donar
          </Button>
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
