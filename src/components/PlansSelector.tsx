import { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
  Table,
  Carousel,
} from "react-bootstrap";
import {
  FaUsers,
  FaBook,
  FaLaptop,
  FaHandshake,
  FaCertificate,
  FaDatabase,
  FaCog,
  FaVideo,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

type Plan = {
  title: string;
  price: string;
  annualPrice: string;
  savings: string;
  features: { icon: JSX.Element; description: string }[];
};

const PlanCard: React.FC<Plan & { isAnnual: boolean }> = ({
  title,
  price,
  annualPrice,
  savings,
  features,
  isAnnual,
}) => {
  return (
    <Card
      className="text-center mb-4 shadow-sm d-flex flex-column position-relative"
      style={{
        borderRadius: "15px",
        height: "100%",
        backgroundColor: "#fff",
        minHeight: "580px",
      }}
    >
      {isAnnual && (
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: "#00d1c1",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Ahorra {savings}
        </div>
      )}
      <Card.Body
        style={{
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h5
          style={{
            color: "#333",
            marginBottom: "10px",
            marginTop: "60px",
            minHeight: "30px",
          }}
        >
          {title}
        </h5>
        <Card.Title
          className="my-2"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          {isAnnual ? annualPrice : price}
        </Card.Title>
        <hr
          style={{
            border: "1px solid #e0e0e0",
            width: "100%",
            margin: "15px 0",
            position: "relative",
            top: "-10px",
          }}
        />
        <ul
          className="list-unstyled text-start"
          style={{ paddingLeft: "20px", minHeight: "180px" }}
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
  const [isAnnual, setIsAnnual] = useState(true);
  const [showComparison, setShowComparison] = useState(false); // New state

  // Definir los planes con herencia de características
  const plans: Plan[] = [
    {
      title: "Plan Individual Básico",
      price: "$39 USD al mes",
      annualPrice: "$399 USD al año",
      savings: "$69",
      features: [
        { icon: <FaBook />, description: "Acceso a contenido exclusivo" },
        { icon: <FaGraduationCap />, description: "Descuentos en cursos y certificaciones" },
        { icon: <FaCog />, description: "Acceso a la plataforma de intakes, que genera respuestas automáticas" },
        { icon: <FaDatabase />, description: "Base de datos de recursos y contratos personalizables" },
        { icon: <FaLaptop />, description: "Capacitación continua y soporte técnico" },
        { icon: <FaCertificate />, description: "Certificación anual de miembro activo" },
        { icon: <FaHandshake />, description: "Descuentos en notarización de documentos" },
        { icon: <FaChartLine />, description: "Descuentos en eventos" },
        { icon: <FaVideo />, description: "Traducciones a bajo costo" },
      ],
    },
    {
      title: "Plan Individual Premium",
      price: "$49 USD al mes",
      annualPrice: "$499 USD al año",
      savings: "$89",
      features: [
        { icon: <FaBook />, description: "Acceso a contenido exclusivo" },
        { icon: <FaGraduationCap />, description: "Descuentos en cursos y certificaciones" },
        { icon: <FaCog />, description: "Acceso a la plataforma de intakes, que genera respuestas automáticas" },
        { icon: <FaDatabase />, description: "Base de datos de recursos y contratos personalizables" },
        { icon: <FaLaptop />, description: "Capacitación continua y soporte técnico" },
        { icon: <FaCertificate />, description: "Certificación anual de miembro activo" },
        { icon: <FaHandshake />, description: "Descuentos en notarización de documentos" },
        { icon: <FaChartLine />, description: "Descuentos en eventos" },
        { icon: <FaVideo />, description: "Traducciones a bajo costo" },
        { icon: <FaDatabase />, description: "Plantillas y guías avanzadas" },
        { icon: <FaCog />, description: "Soporte prioritario" },
      ],
    },
    {
      title: "Plan Empresarial Básico",
      price: "$99 USD al mes",
      annualPrice: "$999 USD al año",
      savings: "$189",
      features: [
        { icon: <FaBook />, description: "Acceso a contenido exclusivo" },
        { icon: <FaGraduationCap />, description: "Descuentos en cursos y certificaciones" },
        { icon: <FaCog />, description: "Acceso a la plataforma de intakes, que genera respuestas automáticas" },
        { icon: <FaDatabase />, description: "Base de datos de recursos y contratos personalizables" },
        { icon: <FaLaptop />, description: "Capacitación continua y soporte técnico" },
        { icon: <FaCertificate />, description: "Certificación anual de miembro activo" },
        { icon: <FaHandshake />, description: "Descuentos en notarización de documentos" },
        { icon: <FaChartLine />, description: "Descuentos en eventos" },
        { icon: <FaVideo />, description: "Traducciones a bajo costo" },
        { icon: <FaDatabase />, description: "Plantillas y guías avanzadas" },
        { icon: <FaCog />, description: "Soporte prioritario" },
        { icon: <FaUsers />, description: "Acceso multiusuario para varios miembros del equipo" },
        { icon: <FaHandshake />, description: "Consultoría personalizada" },
      ],
    },
    {
      title: "Plan Empresarial Premium",
      price: "$149 USD al mes",
      annualPrice: "$1,499 USD al año",
      savings: "$289",
      features: [
        { icon: <FaBook />, description: "Acceso a contenido exclusivo" },
        { icon: <FaGraduationCap />, description: "Descuentos en cursos y certificaciones" },
        { icon: <FaCog />, description: "Acceso a la plataforma de intakes, que genera respuestas automáticas" },
        { icon: <FaDatabase />, description: "Base de datos de recursos y contratos personalizables" },
        { icon: <FaLaptop />, description: "Capacitación continua y soporte técnico" },
        { icon: <FaCertificate />, description: "Certificación anual de miembro activo" },
        { icon: <FaHandshake />, description: "Descuentos en notarización de documentos" },
        { icon: <FaChartLine />, description: "Descuentos en eventos" },
        { icon: <FaVideo />, description: "Traducciones a bajo costo" },
        { icon: <FaDatabase />, description: "Plantillas y guías avanzadas" },
        { icon: <FaCog />, description: "Soporte prioritario" },
        { icon: <FaUsers />, description: "Acceso multiusuario para varios miembros del equipo" },
        { icon: <FaHandshake />, description: "Consultoría personalizada" },
        { icon: <FaUsers />, description: "Hasta 10 usuarios" },
        { icon: <FaVideo />, description: "Seminarios exclusivos para empresas" },
      ],
    },
  ];

  const allFeatures = [
    "Acceso a contenido exclusivo",
    "Descuentos en cursos y certificaciones",
    "Acceso a la plataforma de intakes, que genera respuestas automáticas",
    "Base de datos de recursos y contratos personalizables",
    "Capacitación continua y soporte técnico",
    "Certificación anual de miembro activo",
    "Descuentos en notarización de documentos",
    "Descuentos en eventos",
    "Traducciones a bajo costo",
    "Plantillas y guías avanzadas",
    "Soporte prioritario",
    "Acceso multiusuario para varios miembros del equipo",
    "Consultoría personalizada",
    "Hasta 10 usuarios",
    "Seminarios exclusivos para empresas",
  ];

  const featureChecks = plans.map((plan) =>
    allFeatures.map((feature) =>
      plan.features.some((f) => f.description === feature)
    )
  );

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Planes de Membresía</h2>
        <div className="d-flex justify-content-center mb-4">
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={2} // Cambiar el valor por defecto a 2 (Anual)
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
              Anual
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Carousel interval={null} indicators={true}>
          {plans.map((plan, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <PlanCard {...plan} isAnnual={isAnnual} />
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="d-flex justify-content-center mt-5">
          <Button
            variant="info"
            onClick={() => setShowComparison(!showComparison)} // Toggle the state
          >
            {showComparison ? 'Ocultar Comparación' : 'Mostrar Comparación'}
          </Button>
        </div>
        {showComparison && (
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Características</th>
                {plans.map((plan, index) => (
                  <th key={index}>{plan.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, index) => (
                <tr key={index}>
                  <td>{feature}</td>
                  {featureChecks.map((checks, planIndex) => (
                    <td key={planIndex}>{checks[index] ? "✔️" : ""}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </section>
  );
};

export default PlansSection;
