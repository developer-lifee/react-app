
import { useState } from 'react';
import api from '../../util/axiosConfig';
import { Form, Button, Container, Alert } from 'react-bootstrap';

interface FormSendProps {
  formId: string;
  onSendComplete: () => void;
}

const FormSend: React.FC<FormSendProps> = ({ formId, onSendComplete }) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSend = async () => {
    try {
      await api.post(`/forms/send/${formId}`, { email });
      setSuccess('Form sent successfully!');
      setTimeout(() => {
        onSendComplete();
      }, 2000);
    } catch (err) {
      setError('Error sending form');
    }
  };

  return (
    <Container>
      <h2>Send Form via Email</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter recipient's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSend}>
          Send Form
        </Button>
      </Form>
    </Container>
  );
};

export default FormSend;