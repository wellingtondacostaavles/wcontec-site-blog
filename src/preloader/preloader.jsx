import React, { useState, useEffect } from 'react'
import './preloader.css';

const Preloader = () => {
  const colors = ['blue', 'orange', 'green'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false); // Estado para controlar o carregamento da página

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    // Se a página ainda não estiver carregada, adicionamos um ouvinte para o evento `load`.
    // Quando a página estiver totalmente carregada, chamamos a função `handlePageLoad`.
    if (!pageLoaded) {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearInterval(interval);
      // Removemos o ouvinte do evento `load` quando o componente é desmontado.
      window.removeEventListener('load', handlePageLoad);
    };
  }, [pageLoaded]);

  // Função para ser executada quando a página estiver totalmente carregada.
  const handlePageLoad = () => {
    setPageLoaded(true);
  };

  return (
    <div className={`preloader-wrapper${pageLoaded ? ' fade-out-animation' : ''}`}>
      <div className={`spinner-border text-${colors[currentColorIndex]}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
