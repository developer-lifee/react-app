import { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { FaTv, FaCloudDownloadAlt, FaHd, FaUsers } from "react-icons/fa"; // Iconos representativos

type Plan = {
  title: string;
  price: string;
  annualPrice: string;
  features: { icon: JSX.Element; description: string }[];
  color?: string;
};

const PlanCard: React.FC<Plan & { isAnnual: boolean }> = ({
  title,
  price,
  annualPrice,
  features,
  color,
  isAnnual,
}) => {
  return (
    <Card
      className="text-center mb-4 shadow-sm d-flex flex-column"
      style={{
        borderRadius: "15px",
        height: "100%",
        backgroundColor: "#fff",
        minHeight: "450px",
      }}
    >
      <Card.Body
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Título */}
        <h5 style={{ color: "#333", marginBottom: "15px" }}>{title}</h5>

        {/* Precio */}
        <Card.Title
          className="my-3"
          style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}
        >
          {isAnnual ? annualPrice : price}
        </Card.Title>

        {/* Lista de características con íconos */}
        <ul
          className="list-unstyled text-start"
          style={{ paddingLeft: "20px" }}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className="mb-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              {feature.icon}{" "}
              <span style={{ marginLeft: "10px" }}>{feature.description}</span>
            </li>
          ))}
        </ul>

        {/* Botón de "Elige este plan" */}
        <div className="d-flex justify-content-center mt-4">
          <Button
            variant="primary"
            size="lg"
            className="align-self-center"
            style={{ padding: "10px 30px", fontSize: "1.1rem" }}
          >
            Elige este plan
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const PlansSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true); // Estado para cambiar entre anual y mensual

  const plans: Plan[] = [
    {
      title: "Básico",
      price: "12x $16.900/mes",
      annualPrice: "Precio total anual $202.800",
      features: [
        { icon: <FaUsers />, description: "2 dispositivos a la vez" },
        { icon: <FaHd />, description: "Resolución Full HD" },
      ],
      color: "#f5f5f5",
    },
    {
      title: "Estándar",
      price: "12x $19.900/mes",
      annualPrice: "Precio total anual $238.800",
      features: [
        { icon: <FaUsers />, description: "2 dispositivos a la vez" },
        { icon: <FaHd />, description: "Resolución Full HD" },
        {
          icon: <FaCloudDownloadAlt />,
          description: "30 descargas para disfrutar offline",
        },
      ],
      color: "#ffeb3b",
    },
    {
      title: "Platino",
      price: "12x $24.900/mes",
      annualPrice: "Precio total anual $298.800",
      features: [
        { icon: <FaUsers />, description: "4 dispositivos a la vez" },
        { icon: <FaHd />, description: "Resolución 4K Ultra HD" },
        {
          icon: <FaCloudDownloadAlt />,
          description: "100 descargas para disfrutar offline",
        },
      ],
      color: "#f57c00",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Planes de Membresía</h2>

        {/* Toggle para cambiar entre anual y mensual */}
        <div className="d-flex justify-content-center mb-4">
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={1}
            onChange={(value) => setIsAnnual(value === 2)}
          >
            <ToggleButton
              id="tbg-radio-1"
              value={1}
              variant={isAnnual ? "outline-primary" : "outline-secondary"}
            >
              Mensual
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-2"
              value={2}
              variant={!isAnnual ? "outline-primary" : "outline-secondary"}
            >
              Anual en cuotas
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} xs={12} md={4}>
              <PlanCard {...plan} isAnnual={isAnnual} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PlansSection;
