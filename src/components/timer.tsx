import React, { useState, useEffect } from 'react';

interface TimerProps {
  totalMinutes: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ totalMinutes, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalMinutes * 60); // convertir minutos a segundos
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isPaused, onTimeUp]);

  const handlePause = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 600000); // 10 minutos de pausa opcional
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <h5>Tiempo restante: {formatTime(timeLeft)}</h5>
      {!isPaused && (
        <button className="btn btn-warning btn-sm ms-3" onClick={handlePause}>
          Pausa de 10 minutos
        </button>
      )}
    </div>
  );
};

export default Timer;
