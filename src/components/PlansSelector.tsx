import { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
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

  const plans: Plan[] = [
    {
      title: "Plan Individual Básico",
      price: "$39 USD al mes",
      annualPrice: "$399 USD al año",
      savings: "$69",
      features: [
        { icon: <FaBook />, description: "Acceso a contenido exclusivo" },
        {
          icon: <FaGraduationCap />,
          description: "Descuentos en cursos y certificaciones",
        },
        {
          icon: <FaCog />,
          description:
            "Acceso a la plataforma de intakes, que genera respuestas automáticas",
        },
        {
          icon: <FaDatabase />,
          description: "Base de datos de recursos y contratos personalizables",
        },
        {
          icon: <FaLaptop />,
          description: "Capacitación continua y soporte técnico",
        },
        {
          icon: <FaHandshake />,
          description: "Aparición en el Directorio Profesional de la AAIP",
        },
        {
          icon: <FaCertificate />,
          description: "Certificado anual de miembro activo",
        },
      ],
    },
    {
      title: "Plan Individual Premium",
      price: "$49 USD al mes",
      annualPrice: "$499 USD al año",
      savings: "$89",
      features: [
        { icon: <FaBook />, description: "Incluye todo lo del plan básico" },
        {
          icon: <FaVideo />,
          description: "Acceso a webinars exclusivos mensuales",
        },
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
        {
          icon: <FaUsers />,
          description:
            "Acceso multiusuario para varios miembros del equipo (hasta 5)",
        },
        {
          icon: <FaBook />,
          description: "Incluye todo lo del plan individual premium",
        },
        {
          icon: <FaHandshake />,
          description: "Consultoría personalizada para la empresa",
        },
        {
          icon: <FaCog />,
          description:
            "Acceso a la plataforma de intakes con generación automatizada de respuestas",
        },
        {
          icon: <FaDatabase />,
          description:
            "Base de datos de contratos y plantillas personalizables",
        },
        {
          icon: <FaChartLine />,
          description: "Aparición en el Directorio Profesional",
        },
        {
          icon: <FaCertificate />,
          description: "Certificado anual de miembro activo",
        },
      ],
    },
    {
      title: "Plan Empresarial Premium",
      price: "$149 USD al mes",
      annualPrice: "$1,499 USD al año",
      savings: "$289",
      features: [
        {
          icon: <FaUsers />,
          description: "Acceso multiusuario para hasta 10 usuarios",
        },
        {
          icon: <FaBook />,
          description: "Incluye todo lo del plan empresarial básico",
        },
        {
          icon: <FaVideo />,
          description: "Webinars de capacitación corporativa",
        },
        {
          icon: <FaHandshake />,
          description: "Seminarios exclusivos para empresas",
        },
        { icon: <FaCog />, description: "Soporte técnico prioritario" },
      ],
    },
    {
      title: "Plan Empresarial VIP",
      price: "$249 USD al mes",
      annualPrice: "$2,499 USD al año",
      savings: "$489",
      features: [
        { icon: <FaUsers />, description: "Usuarios ilimitados" },
        {
          icon: <FaBook />,
          description: "Incluye todo lo del plan empresarial premium",
        },
        {
          icon: <FaHandshake />,
          description: "Consultorías exclusivas con expertos",
        },
        {
          icon: <FaLaptop />,
          description: "Formación personalizada para equipos",
        },
        {
          icon: <FaChartLine />,
          description:
            "Descuento del 10% en todas las traducciones y servicios de consultoría",
        },
      ],
    },
  ];

  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const isMobile = window.innerWidth < 768;
  const plansChunks = chunkArray(plans, isMobile ? 1 : 3);

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Planes de Membresía</h2>
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
              Anual
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Carousel
          interval={null}
          indicators={true}
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
              style={{ fontSize: "2rem", color: "#000" }}
            />
          }
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
              style={{ fontSize: "2rem", color: "#000" }}
            />
          }
        >
          {plansChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map((plan, idx) => (
                  <Col key={idx} xs={12} md={4}>
                    <PlanCard {...plan} isAnnual={isAnnual} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default PlansSection;
