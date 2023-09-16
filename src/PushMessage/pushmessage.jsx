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
      setShowMessage2(true);
    }, 90000); // 80 segundos

    const timeout3 = setTimeout(() => {
      setShowMessage2(false); // mudei o setShowMessage2 para setShowMessage1 por enaquanto que desabilito o timeout2, deixando false
    }, 100000); // 90 segundos (tempo para o segundo push desaparecer)

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
        <div className={`push-message push-message-centro ${showMessage1 ? 'show' : ''}`}>
        <a href="https://bit.ly/cadastre-se-na-wcontec" target="_blank">
          <img src="Images/Push/push-banner-1000x1000-servicos.png" className="push-image-banner-1000x1000-servicos" alt="Mensagem Push" />
        </a>
        <button
          type="button"
          className="btn-close me-2 m-auto close-button-push"
          onClick={closeMessage}
        ></button>
      </div>
      )}
      {showMessage2 && (
        <div className={`push-message push-message-centro ${showMessage2 ? 'show' : ''}`}>
        <a href="https://bit.ly/3ASk0Nm" target="_blank">
          <img src="Images/Push/push-comprar-ou-renovar-serasa.png" className="push-image-push-comprar-ou-renovar-serasa" alt="Mensagem Push" />
        </a>
        <button
          type="button"
          className="btn-close me-2 m-auto close-button-push"
          onClick={closeMessage}
        ></button>
      </div>
     )}
    </div>
  );
};

export default PushMessage;
