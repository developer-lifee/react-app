import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/AboutPage.css';  // Importa el archivo de estilos

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="py-5">
      {/* Welcome Section */}
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="display-4 mb-3">{t('welcome')}</h2>
          <p className="lead">
            {t('mission')}
          </p>
        </Col>
      </Row>

      {/* Who Are We Section */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-sm border-0 p-4">
            <h3 className="mb-3 text-primary">{t('whoAreWe')}</h3>
            <p>{t('whoAreWeText')}</p>
          </Card>
        </Col>
      </Row>

      {/* Our Commitment Section */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-sm border-0 p-4">
            <h3 className="mb-3 text-primary">{t('ourCommitment')}</h3>
            <ul className="list-unstyled">
              <li className="mb-2">{t('commitment1')}</li>
              <li className="mb-2">{t('commitment2')}</li>
              <li className="mb-2">{t('commitment3')}</li>
              <li className="mb-2">{t('commitment4')}</li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Our Services Section */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-sm border-0 p-4">
            <h3 className="mb-3 text-primary">{t('ourServices')}</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>{t('service1Title')}</strong>: {t('service1Text')}
              </li>
              <li className="mb-3">
                <strong>{t('service2Title')}</strong>: {t('service2Text')}
              </li>
              <li className="mb-3">
                <strong>{t('service3Title')}</strong>: {t('service3Text')}
              </li>
              <li className="mb-3">
                <strong>{t('service4Title')}</strong>: {t('service4Text')}
              </li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Join Us Section */}
      <Row className="text-center">
        <Col>
          <h3 className="mb-3 text-primary">{t('joinUs')}</h3>
          <p className="lead mb-4">{t('joinUsText')}</p>
          <Button variant="success" size="lg" onClick={() => window.location.href='/login'}>
            {t('joinNow')}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
