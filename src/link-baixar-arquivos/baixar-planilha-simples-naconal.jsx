import React from 'react';

class LinkDownloadPlanilhaSimplesNacional extends React.Component {
  componentDidMount() {
    // Criar um link temporário para o download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/u/0/uc?id=1qWOGtzeOh4mVWAUWdklqkDyX9-j6IFPF&export=download';
    link.target = '_blank';
    link.download = 'planilha-simples-nacional.zip';

    // Adicionar o link ao documento
    document.body.appendChild(link);

    // Simular um clique no link para iniciar o download
    link.click();

    // Limpar o link do documento depois que o download for iniciado
    document.body.removeChild(link);

    // Redirecionar para o site principal após um atraso
    setTimeout(() => {
      window.location.replace('https://www.wcontec.com.br/');
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Baixando Planilhas de Cálculo do Simples Nacional...</p>
      </div>
    );
  }
}

export default LinkDownloadPlanilhaSimplesNacional;


