import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div
      className="hero-section position-relative text-white overflow-hidden d-flex items-center"
      style={{
        minHeight: "85vh",
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.88), rgba(30, 58, 138, 0.82)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat`,
      }}
    >
      <Container className="text-center py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="d-inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-primary bg-opacity-25 text-white border border-primary border-opacity-30 mb-4 text-xs font-weight-bold text-uppercase tracking-wider">
          <FaGraduationCap className="me-1 text-warning" /> Asociación Americana de Preparadores Migratorios
        </div>

        <h1 className="display-3 font-weight-extrabold mb-4 text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)", lineHeight: 1.15 }}>
          Welcome to AAIPA Association <br />
          <span className="text-warning">Immigration Services</span>
        </h1>

        <p className="lead mx-auto mb-5 text-white-50" style={{ maxWidth: "780px", fontSize: "1.25rem", lineHeight: "1.6" }}>
          AAIPA Association is dedicated to helping individuals and families navigate the complex immigration process. We offer a wide range of specialized services, professional certifications, and intake tools tailored to your needs.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button
            variant="warning"
            size="lg"
            className="px-5 py-3 rounded-pill font-weight-bold shadow-lg d-flex items-center gap-2"
            onClick={() => {
              const el = document.getElementById("planes");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "/#/register";
            }}
          >
            <span>Explorar Planes & Cursos</span>
            <FaArrowRight />
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="px-5 py-3 rounded-pill font-weight-bold border-2"
            onClick={() => window.location.href = "/#/about-us"}
          >
            Conocer Más
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
