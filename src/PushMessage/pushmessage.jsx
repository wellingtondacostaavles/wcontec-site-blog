import React, { useEffect, useState } from 'react';
import './pushmessage.css';

const PushMessage = () => {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);

  const closeMessage = () => {
    setShowMessage1(false);
    setShowMessage2(false);
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowMessage1(true);
    }, 60000); // 60 segundos

    const timeout2 = setTimeout(() => {
      setShowMessage2(false);
    }, 80000); // 80 segundos

    const timeout3 = setTimeout(() => {
      setShowMessage1(false); // mudei o setShowMessage2 para setShowMessage1 por enaquanto que desabilito o timeout2, deixando false
    }, 81000); // 71 segundos (tempo para o segundo push desaparecer)

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
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
        <div className={`push-message push-message-1 ${showMessage1 ? 'show' : ''}`}>
          <a href="https://bit.ly/3ASk0Nm" target="_blank">
            <img src="Images/Push/push-comprar-ou-renovar-serasa.png" className="push-image" alt="Mensagem Push" />
          </a>
          <button
            type="button"
            className="btn-close me-2 m-auto close-button-push"
            onClick={closeMessage}
          ></button>
        </div>
      )}

      {showMessage2 && (
        <div className={`push-message push-message-2 ${showMessage2 ? 'show' : ''}`}>
          <p>Mensagem 2</p>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto close-button-push"
            onClick={closeMessage}
          ></button>
        </div>
      )}
    </div>
  );
};

export default PushMessage;
