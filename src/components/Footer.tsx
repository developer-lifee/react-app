import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="/path/to/logo.png" alt="IJM Logo" height="40" />
            <p className="mt-2">INTERNATIONAL JUSTICE MISSION</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-1">Follow Us</p>
            <a href="#" className="me-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
