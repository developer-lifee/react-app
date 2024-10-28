import React, { useState, useEffect } from 'react';
import api from '../../util/axiosConfig';
import { Container, Alert } from 'react-bootstrap';

interface FormViewProps {
  formId: string;
}

const FormView: React.FC<FormViewProps> = ({ formId }) => {
  const [form, setForm] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await api.get(`/forms/${formId}`);
        setForm(response.data);
      } catch (err) {
        setError('Error loading form details');
      }
    };

    fetchForm();
  }, [formId]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!form) return <div>Loading...</div>;

  return (
    <Container>
      <h2>{form.title}</h2>
      <p>{form.description}</p>
      <h5>Questions:</h5>
      <ul>
        {form.questions.map((question: any) => (
          <li key={question.id}>
            {question.questionText} - Type: {question.questionType}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default FormView;
