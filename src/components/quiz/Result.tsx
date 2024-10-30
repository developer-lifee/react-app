import React from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface ResultProps {
  selectedAnswers: { [key: number]: string };
  questions: Question[];
}

const Result: React.FC<ResultProps> = ({ selectedAnswers, questions }) => {
  const score = questions.reduce((total, question) => {
    const userAnswer = selectedAnswers[question.id - 1];
    return userAnswer === question.correctAnswer ? total + 1 : total;
  }, 0);

  return (
    <div className="result-container text-center">
      <h3>Resultados</h3>
      <p>Tu puntaje final es: {score} de {questions.length}</p>
      <div className="list-group mt-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`list-group-item ${selectedAnswers[index] === question.correctAnswer ? 'list-group-item-success' : 'list-group-item-danger'}`}
          >
            <strong>Pregunta {index + 1}:</strong> {question.question}
            <br />
            <strong>Tu respuesta:</strong> {selectedAnswers[index]}
            <br />
            <strong>Respuesta correcta:</strong> {question.correctAnswer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
