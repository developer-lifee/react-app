import React, { useState, useEffect } from 'react';
import PrivateRoute from '../components/PrivateRoute';
import api from '../util/axiosConfig'; // Importa la instancia de Axios configurada
import { Container, Modal, Spinner, Alert } from 'react-bootstrap';
import FormCreate from '../components/forms/FormCreate';
import FormEdit from '../components/forms/FormEdit';
import FormComplete from '../components/forms/FormComplete';
import FormDashboard from '../components/forms/FormDashboard';
import FormView from '../components/forms/FormView';

const FormsPage: React.FC = () => {
    const [forms, setForms] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedForm, setSelectedForm] = useState<any>(null);
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showCompleteModal, setShowCompleteModal] = useState<boolean>(false);
    const [showViewModal, setShowViewModal] = useState<boolean>(false);

    useEffect(() => {
        fetchForms();
    }, []);

    const fetchForms = async () => {
        try {
            const response = await api.get('/forms');
            setForms(response.data);
        } catch (err) {
            setError('Error fetching forms');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await api.delete(`/forms/${id}`);
            setForms(forms.filter(form => form.id !== id));
        } catch (err) {
            setError('Error deleting form');
        }
    };

    const handleCreateSuccess = () => {
        setShowCreateModal(false);
        fetchForms();
    };

    const handleEditSuccess = () => {
        setShowEditModal(false);
        fetchForms();
    };

    const handleCompleteSuccess = () => {
        setShowCompleteModal(false);
    };

    const handleView = (form: any) => {
        setSelectedForm(form);
        setShowViewModal(true);
    };

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Spinner animation="border" variant="primary" />
        </div>
    );

    return (
        <Container className="my-5">
            <h1 className="text-center">Forms Dashboard</h1>
            {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    {error}
                </Alert>
            )}
            <FormDashboard
                forms={forms}
                onDelete={handleDelete}
                onView={handleView}
                onEdit={(form) => { setSelectedForm(form); setShowEditModal(true); }}
                onComplete={(form) => { setSelectedForm(form); setShowCompleteModal(true); }}
                onCreate={() => setShowCreateModal(true)}
            />

            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCreate onFormCreated={handleCreateSuccess} />
                </Modal.Body>
            </Modal>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedForm && (
                        <FormEdit formId={selectedForm.id} onEditComplete={handleEditSuccess} />
                    )}
                </Modal.Body>
            </Modal>

            <Modal show={showCompleteModal} onHide={() => setShowCompleteModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Complete Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedForm && (
                        <FormComplete formId={selectedForm.id} onComplete={handleCompleteSuccess} />
                    )}
                </Modal.Body>
            </Modal>

            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Form Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedForm && <FormView formId={selectedForm.id} />}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default () => (
    <PrivateRoute roles={['admin']}>
        <FormsPage />
    </PrivateRoute>
);
