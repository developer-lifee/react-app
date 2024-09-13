import { Navbar, Nav, Container, Button } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            height="40"
            className="d-inline-block align-top"
          />
          {" IJM"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#problem">The Problem</Nav.Link>
            <Nav.Link href="#solution">Our Solution</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary">Join Us</Button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;