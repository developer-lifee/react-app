import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For capturing URL parameters
import axios from 'axios';

const Formulario = () => {
  const { token } = useParams<{ token: string }>(); // Capture the token from the URL
  const [formData, setFormData] = useState<any>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the form data and validate the token
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get('https://api.icegeneralcontractors.com/api/forms/1/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData(response.data);
      } catch (err: any) {
        setError('Token inválido o formulario no disponible.');
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, [token]);

  // Handle input changes
  const handleInputChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Submit the answers
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://api.icegeneralcontractors.com/api/answers/new/1/${token}`,
        { answers },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Formulario enviado correctamente. Revisa tu correo para descargar el PDF.');
    } catch (err) {
      alert('Error al enviar el formulario. Intenta nuevamente.');
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{formData.title}</h1>
      <p>{formData.description}</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {formData.questions.map((question: any) => (
          <div key={question.id} style={{ marginBottom: '20px' }}>
            <label htmlFor={`question-${question.id}`}>{question.questionText}</label>
            <input
              id={`question-${question.id}`}
              type={question.questionType}
              value={answers[question.id] || ''}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              style={{ display: 'block', width: '100%', padding: '10px', marginTop: '5px' }}
            />
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Enviar Respuestas
        </button>
      </form>
    </div>
  );
};

export default Formulario;
