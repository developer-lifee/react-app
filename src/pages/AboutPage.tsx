import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShieldAlt, FaGraduationCap, FaUsers, FaBook, FaCheckCircle, FaAward } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <Container className="py-5">
      {/* Welcome Hero Section */}
      <Row className="mb-5 text-center">
        <Col lg={10} className="mx-auto">
          <div className="d-inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-10 text-primary fw-bold text-uppercase text-xs mb-3">
            <FaAward className="me-1" /> Excelencia & Compromiso Etico
          </div>
          <h1 className="display-4 fw-extrabold text-dark mb-4">
            American Association of Immigration Preparers (AAIP)
          </h1>
          <p className="lead text-secondary leading-relaxed" style={{ fontSize: '1.2rem' }}>
            En AAIP, nuestra misión es empoderar y profesionalizar el trabajo de los preparadores de inmigración en todo Estados Unidos. Creemos firmemente que el acceso a servicios migratorios éticos, de calidad y asequibles es fundamental para las comunidades de inmigrantes que buscan un futuro mejor. Por ello, hemos creado una plataforma integral de capacitación, certificación y apoyo continuo.
          </p>
        </Col>
      </Row>

      {/* Who Are We & Commitment Cards Grid */}
      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 rounded-4 p-4 hover-shadow transition-all">
            <Card.Body>
              <div className="w-12 h-12 rounded-3 bg-primary text-white d-flex items-center justify-center mb-3 fs-4" style={{ width: '48px', height: '48px' }}>
                <FaUsers />
              </div>
              <h3 className="h4 fw-bold text-primary mb-3">¿Quiénes Somos?</h3>
              <p className="text-muted leading-relaxed">
                Somos la primera organización en Estados Unidos enfocada exclusivamente en brindar capacitación especializada y certificación rigurosa para preparadores migratorios. Nuestra visión es establecer un estándar de excelencia en la industria, garantizando que cada inmigrante tenga acceso a profesionales capacitados que respalden los más altos valores éticos.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 rounded-4 p-4 hover-shadow transition-all">
            <Card.Body>
              <div className="w-12 h-12 rounded-3 bg-success text-white d-flex items-center justify-center mb-3 fs-4" style={{ width: '48px', height: '48px' }}>
                <FaShieldAlt />
              </div>
              <h3 className="h4 fw-bold text-success mb-3">Nuestro Compromiso</h3>
              <ul className="list-unstyled text-muted space-y-2 mb-0">
                <li className="d-flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-success shrink-0" />
                  <span>Educación y capacitación actualizada conforme a las leyes migratorias vigentes.</span>
                </li>
                <li className="d-flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-success shrink-0" />
                  <span>Promoción de prácticas éticas, transparentes y responsables en cada caso.</span>
                </li>
                <li className="d-flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-success shrink-0" />
                  <span>Construcción de una comunidad colaborativa entre preparadores, abogados y miembros.</span>
                </li>
                <li className="d-flex items-center gap-2">
                  <FaCheckCircle className="text-success shrink-0" />
                  <span>Herramientas de desarrollo profesional para garantizar el éxito a largo plazo.</span>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Services Grid */}
      <Row className="mb-5">
        <Col xs={12} className="text-center mb-4">
          <h2 className="fw-bold">Nuestros Servicios Principales</h2>
          <p className="text-muted">Capacitación y recursos diseñados para tu crecimiento continuo</p>
        </Col>
        
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm rounded-3 p-3">
            <Card.Body>
              <FaGraduationCap className="text-primary fs-1 mb-3" />
              <h5 className="fw-bold">Certificación Profesional</h5>
              <p className="text-muted small">Programa riguroso que acredita tus conocimientos en procesos migratorios complejos.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm rounded-3 p-3">
            <Card.Body>
              <FaBook className="text-info fs-1 mb-3" />
              <h5 className="fw-bold">Formación Continua</h5>
              <p className="text-muted small">Webinars, talleres prácticos y seminarios en vivo con actualización constante.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm rounded-3 p-3">
            <Card.Body>
              <FaUsers className="text-warning fs-1 mb-3" />
              <h5 className="fw-bold">Red de Apoyo</h5>
              <p className="text-muted small">Conexión directa con otros profesionales e intermediación para consultas específicas.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center border-0 shadow-sm rounded-3 p-3">
            <Card.Body>
              <FaShieldAlt className="text-success fs-1 mb-3" />
              <h5 className="fw-bold">Recursos Exclusivos</h5>
              <p className="text-muted small">Plantillas de documentos, guías de casos e intakes automatizados.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Join Community CTA */}
      <Row className="text-center bg-primary bg-gradient text-white rounded-4 p-5 shadow-lg">
        <Col lg={8} className="mx-auto">
          <h3 className="fw-extrabold display-6 mb-3">Únete a la Comunidad AAIP</h3>
          <p className="lead mb-4 text-white-50">
            Ya seas un preparador experimentado o estés iniciando tu carrera, en AAIP encontrarás el respaldo, las oportunidades de desarrollo y el reconocimiento necesario para avanzar.
          </p>
          <Button variant="light" size="lg" className="fw-bold text-primary px-5 py-3 rounded-pill shadow" onClick={() => window.location.href='/#/register'}>
            Unirme Ahora
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
