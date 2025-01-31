// Footer.js
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    fontSize: '1rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa'
  };

  const imgStyle = {
    height: '50px',
    marginBottom: '0.5rem'
  };

  const linkStyle = {
    marginBottom: '0.5rem',
    display: 'block'
  };

  const iconStyle = {
    fontSize: '1.5rem'
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="justify-content-between align-items-start">
          <Col md={4}>
            <img src="aaipaLogo.png" alt="AAIPA Logo" style={imgStyle} />
            <p>INTERNATIONAL JUSTICE MISSION</p>
            <p>Call Us: +1 (915) 343-6640</p>
          </Col>
          <Col md={4}>
            <p className="mb-2">Quick Links</p>
            <a href="Aceptación de los Términos, CONDICIONES y Políticas de Privacidad.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a>
            <a href="Términos y Condiciones del Examen de Certificación de la AAIP.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Terms of Service</a>
            <a href="Términos y Condiciones de Registro en la Página Web de la AAIP.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Accessibility Statement</a>
          </Col>
          <Col md={4} className="text-md-end">
            <p className="mb-2">Follow Us</p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: 'inline-block', marginRight: '10px' }}>
              <i className="fab fa-facebook" style={iconStyle}></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: 'inline-block', marginRight: '10px' }}>
              <i className="fab fa-instagram" style={iconStyle}></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: 'inline-block', marginRight: '10px' }}>
              <i className="fab fa-twitter" style={iconStyle}></i>
            </a>
            <a href="https://api.whatsapp.com/message/FFXLI7HOG5Z5H1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: 'inline-block' }}>
              <i className="fab fa-whatsapp" style={iconStyle}></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
