import { useState } from 'react';
import api from '../../util/axiosConfig';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';

interface FormCreateProps {
  onFormCreated: () => void;
}

const questionTypes = [
  { value: 'text', label: 'Text' },
  { value: 'textarea', label: 'Long Text' },
];

const FormCreate: React.FC<FormCreateProps> = ({ onFormCreated }) => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    title: '',
    header: '',
    description: '',
    questions: [{ questionText: '', questionType: 'text' }],
  });
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async () => {
    try {
      // Validar que todas las preguntas tengan `questionText` no vacío y `questionType` válido
      if (
        formDetails.questions.some(
          (q) => !q.questionText.trim() || !['text', 'textarea'].includes(q.questionType)
        )
      ) {
        setError('All questions must have text and a valid question type.');
        return;
      }
      await api.post('/forms', formDetails);
      onFormCreated();
    } catch (err) {
      setError('Error creating form');
    }
  };

  const handleAddQuestion = () => {
    setFormDetails({
      ...formDetails,
      questions: [...formDetails.questions, { questionText: '', questionType: 'text' }],
    });
  };

  const handleRemoveQuestion = (index: number) => {
    const updatedQuestions = formDetails.questions.filter((_, i) => i !== index);
    setFormDetails({ ...formDetails, questions: updatedQuestions });
  };

  const handleQuestionChange = (index: number, field: 'questionText' | 'questionType', value: string) => {
    const updatedQuestions = [...formDetails.questions];
    updatedQuestions[index][field] = value;
    setFormDetails({ ...formDetails, questions: updatedQuestions });
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
          <Form.Label>Header</Form.Label>
          <Form.Control
            type="text"
            value={formDetails.header}
            onChange={(e) => setFormDetails({ ...formDetails, header: e.target.value })}
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
        <h4>Questions</h4>
        {formDetails.questions.map((question, index) => (
          <Row key={index} className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Question Text</Form.Label>
                <Form.Control
                  as={question.questionType === 'textarea' ? 'textarea' : 'input'}
                  {...(question.questionType === 'textarea' && { rows: 4 })}
                  value={question.questionText}
                  onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Question Type</Form.Label>
                <Form.Select
                  value={question.questionType}
                  onChange={(e) => handleQuestionChange(index, 'questionType', e.target.value)}
                >
                  {questionTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <Button variant="outline-danger" size="sm" className="me-2" onClick={() => handleRemoveQuestion(index)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="d-flex justify-content-between mb-3">
          <Col md={6}>
            <Button variant="secondary" size="sm" className="me-2" onClick={handleAddQuestion}>
              Add Question
            </Button>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="primary" size="sm" onClick={handleCreate} className="w-100">
              Create Form
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormCreate;
