import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import Timer from './Timer';
import questionsData from '../data/questions.json';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleTimeUp = () => {
    setIsQuizFinished(true);
  };

  const currentQuestion = questionsData.questions[currentQuestionIndex];

  return (
    <div className="container mt-5">
      <Timer totalMinutes={120} onTimeUp={handleTimeUp} /> {/* Temporizador con 120 minutos */}
      {!isQuizFinished ? (
        <div>
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelectAnswer={handleAnswerSelect}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
          />
          <button className="btn btn-primary mt-3" onClick={nextQuestion}>
            {currentQuestionIndex < questionsData.questions.length - 1 ? 'Siguiente' : 'Finalizar'}
          </button>
        </div>
      ) : (
        <Result selectedAnswers={selectedAnswers} questions={questionsData.questions} />
      )}
    </div>
  );
};

export default Quiz;
