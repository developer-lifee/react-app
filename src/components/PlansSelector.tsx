import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
  Table,
  Badge,
} from "react-bootstrap";
import {
  FaCheck,
  FaTimes,
} from "react-icons/fa";

type Plan = {
  id: string;
  title: string;
  badge?: string;
  isPopular?: boolean;
  priceMonth: string;
  priceAnnual: string;
  annualTotal: string;
  savings: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    id: "ind-basic",
    title: "Individual Básico",
    priceMonth: "$39 USD / mes",
    priceAnnual: "$33.25 USD / mes",
    annualTotal: "$399 USD al año",
    savings: "Ahorra $69 USD",
    features: [
      "Acceso a contenido exclusivo",
      "Descuentos en cursos y certificaciones",
      "Acceso a la plataforma de intakes (respuestas auto)",
      "Base de datos de recursos y contratos personalizables",
      "Capacitación continua y soporte técnico",
      "Certificación anual de miembro activo",
      "Descuentos en notarización de documentos",
      "Descuentos en eventos",
      "Traducciones a bajo costo",
    ],
  },
  {
    id: "ind-premium",
    title: "Individual Premium",
    badge: "Más Vendido",
    isPopular: true,
    priceMonth: "$49 USD / mes",
    priceAnnual: "$41.58 USD / mes",
    annualTotal: "$499 USD al año",
    savings: "Ahorra $89 USD",
    features: [
      "Acceso a contenido exclusivo",
      "Descuentos en cursos y certificaciones",
      "Acceso a la plataforma de intakes (respuestas auto)",
      "Base de datos de recursos y contratos personalizables",
      "Capacitación continua y soporte técnico",
      "Certificación anual de miembro activo",
      "Descuentos en notarización de documentos",
      "Descuentos en eventos",
      "Traducciones a bajo costo",
      "Plantillas y guías avanzadas",
      "Soporte prioritario 24/7",
    ],
  },
  {
    id: "emp-basic",
    title: "Empresarial Básico",
    priceMonth: "$99 USD / mes",
    priceAnnual: "$83.25 USD / mes",
    annualTotal: "$999 USD al año",
    savings: "Ahorra $189 USD",
    features: [
      "Acceso a contenido exclusivo",
      "Descuentos en cursos y certificaciones",
      "Acceso a la plataforma de intakes (respuestas auto)",
      "Base de datos de recursos y contratos personalizables",
      "Capacitación continua y soporte técnico",
      "Certificación anual de miembro activo",
      "Descuentos en notarización de documentos",
      "Descuentos en eventos",
      "Traducciones a bajo costo",
      "Plantillas y guías avanzadas",
      "Soporte prioritario 24/7",
      "Acceso multiusuario para equipo",
      "Consultoría personalizada",
    ],
  },
  {
    id: "emp-premium",
    title: "Empresarial Premium",
    badge: "VIP Corporativo",
    priceMonth: "$149 USD / mes",
    priceAnnual: "$124.91 USD / mes",
    annualTotal: "$1,499 USD al año",
    savings: "Ahorra $289 USD",
    features: [
      "Acceso a contenido exclusivo",
      "Descuentos en cursos y certificaciones",
      "Acceso a la plataforma de intakes (respuestas auto)",
      "Base de datos de recursos y contratos personalizables",
      "Capacitación continua y soporte técnico",
      "Certificación anual de miembro activo",
      "Descuentos en notarización de documentos",
      "Descuentos en eventos",
      "Traducciones a bajo costo",
      "Plantillas y guías avanzadas",
      "Soporte prioritario 24/7",
      "Acceso multiusuario para equipo",
      "Consultoría personalizada",
      "Hasta 10 usuarios incluidos",
      "Seminarios exclusivos para empresas",
    ],
  },
];

const MATRIX_FEATURES = [
  "Acceso a contenido exclusivo",
  "Descuentos en cursos y certificaciones",
  "Plataforma de intakes (Respuestas auto)",
  "Base de datos & contratos personalizables",
  "Capacitación continua y soporte técnico",
  "Certificación anual de miembro activo",
  "Descuentos en notarización de documentos",
  "Descuentos en eventos oficiales",
  "Traducciones a bajo costo",
  "Plantillas y guías avanzadas",
  "Soporte prioritario 24/7",
  "Acceso multiusuario",
  "Consultoría personalizada",
  "Hasta 10 usuarios de equipo",
  "Seminarios corporativos exclusivos",
];

const PlansSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-5 bg-light" id="planes">
      <Container className="px-3 px-sm-4">
        {/* Header Section */}
        <div className="text-center mb-4 mb-md-5">
          <Badge bg="primary" className="px-3 py-2 text-uppercase mb-2">
            Transparencia & Valor
          </Badge>
          <h2 className="display-5 font-weight-bold text-dark">
            Planes de Membresía AAIP
          </h2>
          <p className="text-muted lead max-w-2xl mx-auto px-2">
            Elige el plan ideal para impulsar tu práctica migratoria individual o empresarial.
          </p>

          {/* Toggle Billing Switch */}
          <div className="d-flex justify-content-center items-center gap-2 mt-3">
            <ToggleButtonGroup
              type="radio"
              name="billing-options"
              value={isAnnual ? 2 : 1}
              onChange={(val) => setIsAnnual(val === 2)}
              className="shadow-sm rounded-pill p-1 bg-white border"
            >
              <ToggleButton
                id="tbg-monthly"
                value={1}
                variant={!isAnnual ? "primary" : "light"}
                className="rounded-pill px-3 px-sm-4 font-weight-bold btn-sm sm:btn-md"
              >
                Mensual
              </ToggleButton>
              <ToggleButton
                id="tbg-annual"
                value={2}
                variant={isAnnual ? "primary" : "light"}
                className="rounded-pill px-3 px-sm-4 font-weight-bold btn-sm sm:btn-md"
              >
                Anual <Badge bg="success" className="ms-1">Ahorro Extra</Badge>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        {/* 4-Column Side-by-Side Cards Grid */}
        <Row className="g-4 mb-5 items-stretch">
          {PLANS.map((plan) => (
            <Col key={plan.id} xs={12} sm={6} lg={3} className="d-flex">
              <Card
                className={`w-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative d-flex flex-column justify-content-between transition-all ${
                  plan.isPopular ? "border-primary ring-2 ring-primary shadow-lg" : ""
                }`}
                style={{
                  border: plan.isPopular ? "2px solid #0d6efd" : "1px solid #e0e0e0",
                }}
              >
                {plan.badge && (
                  <div
                    className="position-absolute top-0 end-0 bg-primary text-white font-weight-bold px-3 py-1 text-xs rounded-bottom-start shadow-sm"
                    style={{ fontSize: "0.75rem", textTransform: "uppercase" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <Card.Body className="p-3 p-sm-4 d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="font-weight-bold text-dark mb-2 mb-sm-3 mt-2" style={{ fontSize: "1.2rem" }}>
                      {plan.title}
                    </h4>

                    <div className="mb-3">
                      <span className="fs-2 font-weight-extrabold text-primary">
                        {isAnnual ? plan.priceAnnual : plan.priceMonth}
                      </span>
                      {isAnnual && (
                        <div className="text-muted text-xs mt-1" style={{ fontSize: "0.8rem" }}>
                          Facturado como {plan.annualTotal} ({plan.savings})
                        </div>
                      )}
                    </div>

                    <hr className="my-3" />

                    <ul className="list-unstyled space-y-2 mb-4 text-start text-sm">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="d-flex items-center gap-2 mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
                          <FaCheck className="text-success shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={plan.isPopular ? "primary" : "outline-primary"}
                    size="lg"
                    className="w-100 rounded-pill font-weight-bold py-2 mt-3"
                    onClick={() => window.location.href = '/#/register'}
                  >
                    Seleccionar Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Amazon-Style Comparative Features Matrix Table */}
        <div className="mt-5 pt-4 border-top">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark fs-4 fs-md-3">Matriz Comparativa de Características</h3>
            <p className="text-muted small text-md">Desliza horizontalmente para comparar las ventajas de cada plan</p>
          </div>

          <div
            className="table-responsive bg-white rounded-4 shadow-sm border p-2 p-md-3"
            style={{
              WebkitOverflowScrolling: "touch",
              overflowX: "auto",
            }}
          >
            <Table hover className="mb-0 text-center align-middle" style={{ minWidth: "640px" }}>
              <thead className="bg-light">
                <tr>
                  <th className="text-start py-3 ps-3" style={{ width: "36%" }}>
                    Características / Beneficios
                  </th>
                  <th className="py-3" style={{ width: "16%" }}>
                    <div className="fw-bold">Ind. Básico</div>
                    <div className="text-muted text-xs font-weight-normal">$39 / mes</div>
                  </th>
                  <th className="py-3 bg-primary bg-opacity-10 text-primary fw-bold" style={{ width: "16%" }}>
                    <div className="fw-bold">Ind. Premium ⭐</div>
                    <div className="text-primary text-xs font-weight-normal">$49 / mes</div>
                  </th>
                  <th className="py-3" style={{ width: "16%" }}>
                    <div className="fw-bold">Emp. Básico</div>
                    <div className="text-muted text-xs font-weight-normal">$99 / mes</div>
                  </th>
                  <th className="py-3" style={{ width: "16%" }}>
                    <div className="fw-bold">Emp. Premium 👑</div>
                    <div className="text-muted text-xs font-weight-normal">$149 / mes</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_FEATURES.map((feature, idx) => (
                  <tr key={idx}>
                    <td className="text-start fw-semibold ps-3 text-secondary" style={{ fontSize: "0.85rem" }}>
                      {feature}
                    </td>

                    {/* Check Individual Básico */}
                    <td>
                      {idx < 9 ? (
                        <FaCheck className="text-success fs-6" />
                      ) : (
                        <FaTimes className="text-muted opacity-25 fs-6" />
                      )}
                    </td>

                    {/* Check Individual Premium */}
                    <td className="bg-primary bg-opacity-10">
                      {idx < 11 ? (
                        <FaCheck className="text-primary fw-bold fs-6" />
                      ) : (
                        <FaTimes className="text-muted opacity-25 fs-6" />
                      )}
                    </td>

                    {/* Check Empresarial Básico */}
                    <td>
                      {idx < 13 ? (
                        <FaCheck className="text-success fs-6" />
                      ) : (
                        <FaTimes className="text-muted opacity-25 fs-6" />
                      )}
                    </td>

                    {/* Check Empresarial Premium */}
                    <td>
                      <FaCheck className="text-success fw-bold fs-6" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlansSection;
