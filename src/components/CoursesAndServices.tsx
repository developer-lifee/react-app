import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CoursesAndServices = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Courses and Services</h2>
      <Row>
        {[1, 2, 3].map((item) => (
          <Col key={item} md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200" // Reemplaza con tu imagen
                alt="Course Image"
              />
              <Card.Body className="text-center">
                <Card.Title>Strengthen Justice System</Card.Title>
                <Card.Text>
                  IJM PHILIPPINES
                  <br />
                  Our flagship OSEC program
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesAndServices;
