import React, { useState, useEffect } from 'react';

const DailyCheckIn = ({ onUpdatePoints }) => {
  const [points, setPoints] = useState(0);
  const [lastCheckIn, setLastCheckIn] = useState(null);

  useEffect(() => {
    const savedPoints = localStorage.getItem('points');
    const savedDate = localStorage.getItem('lastCheckIn');
    if (savedPoints) setPoints(parseInt(savedPoints, 10));
    if (savedDate) setLastCheckIn(new Date(savedDate));
  }, []);

  useEffect(() => {
    localStorage.setItem('points', points);
    localStorage.setItem('lastCheckIn', lastCheckIn);
    onUpdatePoints(points); // Chama a função passada pelo pai para atualizar os pontos na navbar
  }, [points, lastCheckIn, onUpdatePoints]);

  const handleCheckIn = () => {
    const today = new Date();
    if (!lastCheckIn || lastCheckIn.toDateString() !== today.toDateString()) {
      setPoints(points + 1);
      setLastCheckIn(today);
    }
  };

  return (
    <div>
      <h1>Check-in Diário</h1>
      <p>Pontos: {points}</p>
      <button onClick={handleCheckIn}>Check-in</button>
    </div>
  );
};

export default DailyCheckIn;
