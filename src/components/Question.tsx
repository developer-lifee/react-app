import React from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  onSelectAnswer: (answer: string) => void;
  selectedAnswer: string;
}

const Question: React.FC<QuestionProps> = ({ question, options, onSelectAnswer, selectedAnswer }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <div className="options-list">
          {options.map((option, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                name="answer"
                className="form-check-input"
                checked={selectedAnswer === option}
                onChange={() => onSelectAnswer(option)}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
