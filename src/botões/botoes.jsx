import React from 'react';
import { Helmet } from 'react-helmet';

function Botoes() {
  return (
    <section id="botoes">
      <Helmet>
        <style>
          {`
            body {
              background-color: #2f2f31; /* Cor de fundo personalizada */
              font-family: Arial, sans-serif; /* Fonte personalizada */
              /* Outros estilos personalizados */
            }
          `}
        </style>
      </Helmet>
    </section>
  );
}

export default Botoes;
