import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="py-5">
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">{t('welcome')}</h2>
          <p className="lead text-center mt-3">
            {t('mission')}
          </p>
        </Col>
      </Row>

      {/* Who Are We Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3>{t('whoAreWe')}</h3>
          <p>{t('whoAreWeText')}</p>
        </Col>
      </Row>

      {/* Our Commitment Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3>{t('ourCommitment')}</h3>
          <ul>
            <li>{t('commitment1')}</li>
            <li>{t('commitment2')}</li>
            <li>{t('commitment3')}</li>
            <li>{t('commitment4')}</li>
          </ul>
        </Col>
      </Row>

      {/* Our Services Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3>{t('ourServices')}</h3>
          <ul>
            <li>
              <strong>{t('service1Title')}</strong> {t('service1Text')}
            </li>
            <li>
              <strong>{t('service2Title')}</strong> {t('service2Text')}
            </li>
            <li>
              <strong>{t('service3Title')}</strong> {t('service3Text')}
            </li>
            <li>
              <strong>{t('service4Title')}</strong> {t('service4Text')}
            </li>
          </ul>
        </Col>
      </Row>

      {/* Join Us Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h3>{t('joinUs')}</h3>
          <p className="lead">{t('joinUsText')}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;