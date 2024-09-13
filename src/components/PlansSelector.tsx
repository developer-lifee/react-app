// src/components/PlansSection.tsx
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const PlanCard: React.FC<{ title: string, price: string, features: string[] }> = ({ title, price, features }) => {
  return (
    <Card className="text-center mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button variant="primary">Select Plan</Button>
      </Card.Body>
    </Card>
  );
};

const PlansSection = () => {
  const plans = [
    { title: 'Basic', price: '$9.99 / month', features: ['Feature 1', 'Feature 2'] },
    { title: 'Standard', price: '$19.99 / month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Premium', price: '$49.99 / month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Select a Plan</h2>
        <Row>
          {plans.map((plan, index) => (
            <Col key={index} md={4}>
              <PlanCard title={plan.title} price={plan.price} features={plan.features} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PlansSection;
