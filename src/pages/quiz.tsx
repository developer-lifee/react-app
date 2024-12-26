import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import { useState } from "react";
import Question from "../components/quiz/Question";
import Result from "../components/quiz/Result";
import Timer from "../components/quiz/timer";
import questionsData from '../data/questions';
import { Button, Modal } from "react-bootstrap";
import "../styles/quiz.css";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [showQuestionPanel, setShowQuestionPanel] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsData.examModel1.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTimeUp = () => {
    setIsQuizFinished(true);
  };

  const toggleQuestionPanel = () => {
    setShowQuestionPanel(!showQuestionPanel);
  };

  const currentQuestion = questionsData.examModel1.questions[currentQuestionIndex];

  return (
    <div className="quiz-page d-flex flex-column align-items-center p-4">
      <Timer totalMinutes={120} onTimeUp={handleTimeUp} />
      <Button variant="secondary" className="my-3" onClick={toggleQuestionPanel}>
        Ver Estado de Preguntas
      </Button>
      <Modal show={showQuestionPanel} onHide={toggleQuestionPanel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Estado de las Preguntas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="question-grid">
            {questionsData.examModel1.questions.map((_, index) => (
              <div
                key={index}
                className={`question-indicator ${selectedAnswers[index] ? 'answered' : 'unanswered'}`}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  toggleQuestionPanel();
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {!isQuizFinished ? (
        <div className="question-container">
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelectAnswer={handleAnswerSelect}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
          />
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={previousQuestion} disabled={currentQuestionIndex === 0}>
              Atrás
            </button>
            <button className="btn btn-primary" onClick={nextQuestion}>
              {currentQuestionIndex < questionsData.examModel1.questions.length - 1 ? 'Siguiente' : 'Finalizar'}
            </button>
          </div>
        </div>
      ) : (
        <Result selectedAnswers={selectedAnswers} questions={questionsData.examModel1.questions} />
      )}
    </div>
  );
};

export default () => (
  <PrivateRoute roles={['admin', 'user']}>
    <Quiz />
  </PrivateRoute>
);
