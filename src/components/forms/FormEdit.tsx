import React, { useState, useEffect } from 'react';
import api from '../../util/axiosConfig'; // Usar la instancia de Axios configurada
import { Form, Button, Container, Alert } from 'react-bootstrap';

interface FormEditProps {
  formId: string;
  onEditComplete: () => void;
}

const FormEdit: React.FC<FormEditProps> = ({ formId, onEditComplete }) => {
  const [form, setForm] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await api.get(`/forms/${formId}`);
        setForm(response.data);
      } catch (err) {
        setError('Error loading form');
      }
    };

    fetchForm();
  }, [formId]);

  const handleUpdate = async () => {
    try {
      await api.patch(`/forms/update/${formId}`, form);
      onEditComplete();
    } catch (err) {
      setError('Error updating form');
    }
  };

  if (!form) return <div>Loading...</div>;

  return (
    <Container className="my-5">
      <h1>Edit Form</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Form Name</Form.Label>
          <Form.Control
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleUpdate}>
          Update Form
        </Button>
      </Form>
    </Container>
  );
};

export default FormEdit;
