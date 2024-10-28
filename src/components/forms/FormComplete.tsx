import React, { useState, useEffect } from 'react';
import api from '../../util/axiosConfig';
import { Form, Button, Container, Alert } from 'react-bootstrap';

interface FormCompleteProps {
  formId: string;
  onComplete: () => void;
}

const FormComplete: React.FC<FormCompleteProps> = ({ formId, onComplete }) => {
  const [form, setForm] = useState<any>(null);
  const [answers, setAnswers] = useState<{ [questionId: number]: string }>({});
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

  const handleSubmit = async () => {
    try {
      await api.post(`/forms/submit/${formId}`, { answers });
      onComplete();
    } catch (err) {
      setError('Error submitting form');
    }
  };

  if (!form) return <div>Loading...</div>;

  return (
    <Container>
      <h2>{form.title}</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        {form.questions.map((question: any) => (
          <Form.Group key={question.id} className="mb-3">
            <Form.Label>{question.questionText}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your answer"
              value={answers[question.id] || ""}
              onChange={(e) =>
                setAnswers({ ...answers, [question.id]: e.target.value })
              }
            />
          </Form.Group>
        ))}
        <Button variant="success" onClick={handleSubmit}>
          Submit Answers
        </Button>
      </Form>
    </Container>
  );
};

export default FormComplete;
