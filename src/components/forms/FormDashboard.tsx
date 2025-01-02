import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

interface FormDashboardProps {
  forms: any[];
  onDelete: (id: string) => void;
  onView: (form: any) => void;
  onEdit: (form: any) => void;
  onComplete: (form: any) => void;
  onCreate: () => void;
  onSend: (form: any) => void;
}

const FormDashboard: React.FC<FormDashboardProps> = ({ forms, onDelete, onView, onEdit, onComplete, onCreate, onSend }) => {
  return (
    <div>
      <div className="text-end mb-3">
        <Button variant="primary" onClick={onCreate}>Create New Form</Button>
      </div>
      <ListGroup>
        {forms.map((form) => (
          <ListGroup.Item key={form.id} className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{form.title}</h5>
              <p className="mb-1">{form.description}</p>
              <small>Created At: {new Date(form.createdAt).toLocaleDateString()}</small>
            </div>
            <div>
              <Button variant="info" onClick={() => onView(form)}>View</Button>{' '}
              <Button variant="secondary" onClick={() => onEdit(form)}>Edit</Button>{' '}
              <Button variant="success" onClick={() => onComplete(form)}>Complete</Button>{' '}
              <Button variant="danger" onClick={() => onDelete(form.id)}>Delete</Button>{' '}
              <Button variant="primary" onClick={() => onSend(form)}>Send</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default FormDashboard;

