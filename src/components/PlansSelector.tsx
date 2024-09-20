import { Card, Button, Container, Row, Col } from "react-bootstrap";

const PlanCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  color?: string;
}> = ({ title, price, features }) => {
  return (
    <Card
      className="text-center mb-4 shadow-sm"
      style={{ borderRadius: "15px" }}
    >
      <Card.Body style={{ padding: "20px" }}>
        {/* Título del plan */}
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 0",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h5 className="mb-0">{title}</h5>
        </div>

        {/* Precio */}
        <Card.Title
          className="my-3"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          {price}
        </Card.Title>

        {/* Lista de características */}
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Botón de compra */}
        <Button variant="primary" size="lg" className="mt-3">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

const PlansSection = () => {
  const plans = [
    {
      title: "Student",
      price: "$9.99",
      features: ["Feature 1", "Feature 2"],
      color: "#f5f5f5",
    },
    {
      title: "School",
      price: "$19.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      color: "#ffeb3b",
    },
    {
      title: "Trainer",
      price: "$35.99",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      color: "#f57c00",
    },
    {
      title: "Business",
      price: "$49.99",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      color: "#1976d2",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Select a Plan</h2>
        <Row>
          {plans.map((plan, index) => (
            <Col key={index} md={3}>
              <PlanCard
                title={plan.title}
                price={plan.price}
                features={plan.features}
                color={plan.color}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PlansSection;
