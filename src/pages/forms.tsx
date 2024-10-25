import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormsPage: React.FC = () => {
    const [forms, setForms] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/forms');
                setForms(response.data);
            } catch (err) {
                setError('Error fetching forms');
            } finally {
                setLoading(false);
            }
        };

        fetchForms();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/api/forms/${id}`);
            setForms(forms.filter(form => form.id !== id));
        } catch (err) {
            setError('Error deleting form');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Forms</h1>
            <ul>
                {forms.map(form => (
                    <li key={form.id}>
                        {form.name} - {form.description}
                        <button onClick={() => handleDelete(form.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FormsPage;