import React from "react";
import { Button, Container } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <div
      className="hero-section position-relative text-white"
      style={{
        height: "100vh", // Ocupa toda la pantalla
        zIndex: 1, // Asegura que no esté cubierto
      }}
    >
      {/* Video de fondo */}
      <video
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover", zIndex: -1 }}
        autoPlay
        loop
        muted
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenido del Hero */}
      <div
        className="overlay position-absolute w-100 h-100 d-flex align-items-center"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <Container className="text-center">
          <h1 className="display-4 font-weight-bold">
            Welcome to AAIPA Association Immigration Services
          </h1>
          <p className="lead my-4">
            AAIPA Association is dedicated to helping individuals and families
            navigate the complex immigration process. We offer a wide range of
            services tailored to your needs.
          </p>
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
