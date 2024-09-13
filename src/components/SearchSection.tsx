// src/components/SearchSection.tsx
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SearchSection = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
  };

  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="mb-4 text-center">Find Immigration Services</h2>
        <Form onSubmit={handleSearch} className="d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="Search for services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="me-2 w-50"
          />
          <Button type="submit" variant="primary">Search</Button>
        </Form>
      </Container>
    </section>
  );
};

export default SearchSection;
