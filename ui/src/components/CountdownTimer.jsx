import React, { useState, useEffect } from 'react';
import './pulse.css';

function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getTimeRemaining(date) {
    const total = Date.parse(date) - new Date();
    const seconds = Math.floor((total / 1000) % 60).toString().padStart(2, "0");
    const minutes = Math.floor((total / 1000 / 60) % 60).toString().padStart(2, "0");
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
      {timeRemaining.total <= 0 ? (
        <p className="pulsing-text">00:00:00</p>
      ) : (
        <p>
            {timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
        </p>
      )}
    </div>
  );
}

export default CountdownTimer;