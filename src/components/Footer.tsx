import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="aaipaLogo.png" alt="AAIPA Logo" height="40" />
            <p className="mt-2">INTERNATIONAL JUSTICE MISSION</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-1">Follow Us</p>
            <a href="https://www.facebook.com/share/NwtXwrmVKHdH9E7r/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/aaipassociation?igsh=MWxsMWM3aTZ0Y3djcg==" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/aaipassociation?s=11" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
