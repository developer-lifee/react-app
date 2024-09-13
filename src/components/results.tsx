import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

// Datos simulados para los resultados de búsqueda
const searchResults = [
  {
    name: "John Doe Immigration Services",
    location: "New York, NY",
    specialization: "Visa, Citizenship, and Asylum Services",
    reviews: 123,
    rating: 4.0,
  },
  {
    name: "Acme Immigration Consultants",
    location: "Los Angeles, CA",
    specialization: "Comprehensive Immigration Services",
    reviews: 87,
    rating: 5.0,
  },
  {
    name: "Legal Solutions Immigration Services",
    location: "Chicago, IL",
    specialization: "Visa, Green Card, and Asylum Cases",
    reviews: 65,
    rating: 4.2,
  },
];

export default function ImmigrationSearchComponent() {
  return (
    <Container className="py-5">
      {/* Buscador de servicios */}
      <div className="mb-4">
        <h1 className="mb-4">Find Immigration Services</h1>
        <Form className="d-flex mb-3">
          <Form.Control
            type="search"
            placeholder="Search by name, location, or specialty"
            className="me-2"
          />
          <Button variant="primary">Filter</Button>
        </Form>
      </div>

      {/* Resultados */}
      <h2 className="mb-4">Results</h2>
      <Row>
        {searchResults.map((result, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {result.location}
                </Card.Subtitle>
                <Card.Text>{result.specialization}</Card.Text>
                <div className="d-flex align-items-center mb-3">
                  {renderStars(result.rating)}
                  <span className="ms-2 text-muted">{`${result.rating} (${result.reviews} reviews)`}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <Button variant="outline-primary">Contact</Button>
                  <Button variant="secondary">View Profile</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function renderStars(rating: number) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={i < Math.floor(rating) ? 'gold' : 'lightgray'}
        className="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.33-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.067l-4.898.696c-.441.062-.613.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.893.7-3.992L1.745 6.608l4.087-.582L8 2.223l1.168 3.803 4.087.582-3.04 2.876.7 3.992-3.686-1.893z" />
      </svg>
    );
  }
  return <div className="d-flex">{stars}</div>;
}

export { ImmigrationSearchComponent as Results };