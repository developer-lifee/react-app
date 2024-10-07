import { Container, Row, Col } from 'react-bootstrap';

const AboutPage: React.FC = () => {
  return (
    <Container className="py-5">
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Welcome to the American Association of Immigration Preparers (AAIP)</h2>
          <p className="lead text-center mt-3">
            At AAIP, our mission is to empower and professionalize the work of immigration preparers across the United States.
            We firmly believe that access to quality, ethical, and affordable immigration services is crucial for immigrant
            communities seeking a better life. That’s why we have created a platform for training, certification, and continuous
            support, designed to ensure that our members are equipped with the knowledge and tools needed to make a real difference
            in their clients’ lives.
          </p>
        </Col>
      </Row>

      {/* Who Are We Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3>Who Are We?</h3>
          <p>
            We are the first organization in the United States exclusively focused on providing specialized training and certification 
            for immigration preparers. Our vision is to create a standard of excellence in the industry, ensuring that every immigrant 
            has access to properly trained professionals who uphold the highest standards of ethics and quality.
          </p>
        </Col>
      </Row>

      {/* Our Commitment Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3>Our Commitment</h3>
          <ul>
            <li>Providing updated education and training so that our members are always up to date with immigration laws and regulations.</li>
            <li>Promoting ethical and responsible practices, ensuring that every preparer offers reliable and accessible services.</li>
            <li>Building a community of professionals where our members can collaborate, learn from one another, and grow together.</li>
            <li>Offering professional development opportunities, providing tools to help our members achieve long-term success.</li>
          </ul>
        </Col>
      </Row>

      {/* Our Services Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3>Our Services</h3>
          <ul>
            <li>
              <strong>Professional Certification:</strong> The AAIP offers a rigorous certification program that ensures our members possess 
              the necessary knowledge to handle the complex immigration processes.
            </li>
            <li>
              <strong>Ongoing Training:</strong> From webinars to in-person workshops, we provide continuous training to keep members updated 
              on the constant changes in immigration law.
            </li>
            <li>
              <strong>Support and Collaboration Network:</strong> Connect with other immigration preparers, attorneys, and industry 
              professionals through our exclusive networking platform.
            </li>
            <li>
              <strong>Access to Exclusive Resources:</strong> We provide our members with practical guides, document templates, and access 
              to experts for case-specific questions.
            </li>
          </ul>
        </Col>
      </Row>

      {/* Join Us Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h3>Join the AAIP Community</h3>
          <p className="lead">
            By joining the AAIP, you become part of an organization that leads the way in professionalizing immigration preparers. 
            Whether you are an experienced preparer or just starting your career, you will find in AAIP the support, development 
            opportunities, and recognition you need to advance and make a significant contribution to the immigrant community.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
