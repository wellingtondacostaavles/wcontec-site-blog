import React, { useState, useEffect } from 'react';
import App from '../app.jsx';
import { AuthContext, AuthProvider } from '../app/Context/auth.jsx';
import Preloader from '../preloader/preloader.jsx';

const AppWithPreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento por 2 segundos. Substitua essa lógica pelo seu carregamento real.
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);

    // AQUI VAMOS USAR O EVENTO DE "LOAD" DO DOCUMENTO PARA INDICAR QUANDO A APLICAÇÃO ESTÁ CARREGADA
    window.addEventListener('load', () => {
      setLoading(false);
    });

    // É IMPORTANTE REMOVER O EVENT LISTENER APÓS A DESMONTAGEM DO COMPONENTE PARA EVITAR VAZAMENTO DE MEMÓRIA
    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Preloader />
      ) : (
        <AuthProvider>
          <App />
        </AuthProvider>
      )}
    </React.StrictMode>
  );
};

export default AppWithPreloader;