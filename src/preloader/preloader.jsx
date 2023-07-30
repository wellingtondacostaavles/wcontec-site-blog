import React, { useState, useEffect } from 'react';
import './preloader.css';

const Preloader = () => {
  const colors = ['blue', 'orange', 'green'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0); // Começar com o índice 0 para a cor azul

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  

    return (
      <div className="preloader-wrapper">
        <div className={`spinner-border text-${colors[currentColorIndex]}`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

export default Preloader;
