// src/components/Hero.tsx
import { Button, Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="bg-light py-5 text-center">
      <Container>
        <h1 className="display-4">OSEC is the most urgent and horrible form...</h1>
        <p className="lead mt-4">OSEC involves...</p>
        <Button variant="primary" size="lg" className="mt-4">Join the Fight</Button>
      </Container>
    </section>
  );
};

export default Hero;
