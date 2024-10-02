import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CourseImage from "/course.webp"; // Asegúrate de que la ruta sea correcta

const CoursesAndServices = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Courses and Services</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src={CourseImage} // Usando la nueva imagen
              alt="Course Image"
            />
            <Card.Body className="text-center">
              <Card.Title>Immigration Law Basics</Card.Title>
              <Card.Text>
                Learn the fundamentals of immigration law to help you navigate
                complex processes.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src={CourseImage} // Usando la nueva imagen
              alt="Course Image"
            />
            <Card.Body className="text-center">
              <Card.Title>Visa Application Process</Card.Title>
              <Card.Text>
                Get detailed guidance on how to apply for different types of
                visas.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src={CourseImage} // Usando la nueva imagen
              alt="Course Image"
            />
            <Card.Body className="text-center">
              <Card.Title>Citizenship Preparation</Card.Title>
              <Card.Text>
                Prepare for the citizenship test with our comprehensive
                resources and support.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesAndServices;
