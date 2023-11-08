import React, { useEffect, useState, useRef } from 'react';
import './pushmessage.css';

const PushMessage = () => {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const messageRef = useRef(null);

  const closeMessage = () => {
    setShowMessage1(false);
    setShowMessage2(false);
  };

  const handleClickOutside = (event) => {
    if (messageRef.current && !messageRef.current.contains(event.target)) {
      closeMessage();
    }
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowMessage1(true);
    }, 60000); // 60 segundos

    const timeout2 = setTimeout(() => {
      setShowMessage2(true);
    }, 90000); // 90 segundos

    const timeout3 = setTimeout(() => {
      setShowMessage2(false);
    }, 100000); // 100 segundos (tempo para o segundo push desaparecer)

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showMessage2) {
      setShowMessage1(false);
    }
  }, [showMessage2]);

  return (
    <div className="push-messages">
      {showMessage1 && (
        <div
          ref={messageRef}
          className={`push-message push-message-centro ${showMessage1 ? 'show' : ''}`}
        >
          <a href="https://bit.ly/cadastre-se-na-wcontec" target="_blank">
            <img
              src="Images/Push/push-banner-1000x1000-servicos.png"
              className="push-image-banner-1000x1000-servicos"
              alt="Mensagem Push"
            />
          </a>
        </div>
      )}
      {showMessage2 && (
        <div
          ref={messageRef}
          className={`push-message push-message-centro ${showMessage2 ? 'show' : ''}`}
        >
          <a href="https://bit.ly/3ASk0Nm" target="_blank">
            <img
              src="Images/Push/push-comprar-ou-renovar-serasa.png"
              className="push-image-push-comprar-ou-renovar-serasa"
              alt="Mensagem Push"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default PushMessage;