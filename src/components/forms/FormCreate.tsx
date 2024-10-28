import React, { useState } from 'react';
import api from '../../util/axiosConfig';
import { Form, Button, Container, Alert } from 'react-bootstrap';

interface FormCreateProps {
  onFormCreated: () => void;
}

const FormCreate: React.FC<FormCreateProps> = ({ onFormCreated }) => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    title: '',
    description: '',
    questions: [{ questionText: '', questionType: 'text' }],
  });
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async () => {
    try {
      await api.post('/forms', formDetails);
      onFormCreated();
    } catch (err) {
      setError('Error creating form');
    }
  };

  return (
    <Container>
      <h2>Create Form</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Form Name</Form.Label>
          <Form.Control
            type="text"
            value={formDetails.name}
            onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={formDetails.title}
            onChange={(e) => setFormDetails({ ...formDetails, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formDetails.description}
            onChange={(e) => setFormDetails({ ...formDetails, description: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreate}>
          Create Form
        </Button>
      </Form>
    </Container>
  );
};

export default FormCreate;
