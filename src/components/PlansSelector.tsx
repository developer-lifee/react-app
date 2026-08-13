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
      <Container>
        {/* Header Section */}
        <div className="text-center mb-5">
          <Badge bg="primary" className="px-3 py-2 text-uppercase mb-2">
            Transparencia & Valor
          </Badge>
          <h2 className="display-5 font-weight-bold text-dark">
            Planes de Membresía AAIP
          </h2>
          <p className="text-muted lead max-w-2xl mx-auto">
            Elige el plan ideal para impulsar tu práctica migratoria individual o empresarial.
          </p>

          {/* Toggle Billing Switch */}
          <div className="d-flex justify-content-center items-center gap-3 mt-4">
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
                className="rounded-pill px-4 font-weight-bold"
              >
                Mensual
              </ToggleButton>
              <ToggleButton
                id="tbg-annual"
                value={2}
                variant={isAnnual ? "primary" : "light"}
                className="rounded-pill px-4 font-weight-bold"
              >
                Anual <Badge bg="success" className="ms-1">Ahorro Extra</Badge>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        {/* 4-Column Side-by-Side Cards Grid */}
        <Row className="g-4 mb-5 items-stretch">
          {PLANS.map((plan) => (
            <Col key={plan.id} xs={12} md={6} lg={3} className="d-flex">
              <Card
                className={`w-100 shadow-sm border-0 rounded-4 overflow-hidden position-relative d-flex flex-column justify-content-between transition-all ${
                  plan.isPopular ? "border-primary ring-2 ring-primary shadow-lg" : ""
                }`}
                style={{
                  border: plan.isPopular ? "2px solid #0d6efd" : "1px solid #e0e0e0",
                  transform: plan.isPopular ? "scale(1.02)" : "none",
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

                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="font-weight-bold text-dark mb-3 mt-2">
                      {plan.title}
                    </h4>

                    <div className="mb-3">
                      <span className="display-6 font-weight-extrabold text-primary">
                        {isAnnual ? plan.priceAnnual : plan.priceMonth}
                      </span>
                      {isAnnual && (
                        <div className="text-muted text-xs mt-1">
                          Facturado como {plan.annualTotal} ({plan.savings})
                        </div>
                      )}
                    </div>

                    <hr className="my-3" />

                    <ul className="list-unstyled space-y-2 mb-4 text-start text-sm">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="d-flex items-center gap-2 mb-2 text-muted" style={{ fontSize: "0.88rem" }}>
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
            <h3 className="fw-bold text-dark">Matriz Comparativa de Características</h3>
            <p className="text-muted">Compara de un vistazo qué incluye cada uno de los 4 planes de membresía</p>
          </div>

          <div className="table-responsive bg-white rounded-4 shadow-sm border p-3">
            <Table hover className="mb-0 text-center align-middle">
              <thead className="bg-light">
                <tr>
                  <th className="text-start py-3 ps-4" style={{ width: "35%" }}>
                    Características / Beneficios
                  </th>
                  <th className="py-3" style={{ width: "16%" }}>Individual Básico</th>
                  <th className="py-3 bg-primary bg-opacity-10 text-primary fw-bold" style={{ width: "16%" }}>
                    Individual Premium ⭐
                  </th>
                  <th className="py-3" style={{ width: "16%" }}>Empresarial Básico</th>
                  <th className="py-3" style={{ width: "16%" }}>Empresarial Premium 👑</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_FEATURES.map((feature, idx) => (
                  <tr key={idx}>
                    <td className="text-start fw-semibold ps-4 text-secondary" style={{ fontSize: "0.9rem" }}>
                      {feature}
                    </td>

                    {/* Check Individual Básico */}
                    <td>
                      {idx < 9 ? (
                        <FaCheck className="text-success fs-5" />
                      ) : (
                        <FaTimes className="text-muted opacity-25" />
                      )}
                    </td>

                    {/* Check Individual Premium */}
                    <td className="bg-primary bg-opacity-10">
                      {idx < 11 ? (
                        <FaCheck className="text-primary fw-bold fs-5" />
                      ) : (
                        <FaTimes className="text-muted opacity-25" />
                      )}
                    </td>

                    {/* Check Empresarial Básico */}
                    <td>
                      {idx < 13 ? (
                        <FaCheck className="text-success fs-5" />
                      ) : (
                        <FaTimes className="text-muted opacity-25" />
                      )}
                    </td>

                    {/* Check Empresarial Premium */}
                    <td>
                      <FaCheck className="text-success fw-bold fs-5" />
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
