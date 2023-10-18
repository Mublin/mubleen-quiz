import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CountdownTimer({subject}: {subject: string}) {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  // Calculate the target time, which is 10 minutes in the future
  const targetTime = new Date().getTime() + 5 * 60 * 1000;

  // Function to update the countdown
  const updateCountdown = () => {
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining > 0) {
      setTimeLeft(timeRemaining);
    } else {
      setIsExpired(true);
      navigate(`/${subject}/result`)
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval); // Clear the interval on component unmount
    };
  }, []);

  useEffect(() => {
    updateCountdown(); // Initialize the countdown immediately
  }, []);

  return (
    <div style={{padding: '2rem 1rem', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '5rem', right: '1.5rem'}}>
      {isExpired ? (
        <p>Countdown expired!</p>
      ) : (
        <p>
          Time Left: {Math.floor(timeLeft / 60000)}m {Math.floor((timeLeft % 60000) / 1000)}s
        </p>
      )}
    </div>
  );
}

export default CountdownTimer;
