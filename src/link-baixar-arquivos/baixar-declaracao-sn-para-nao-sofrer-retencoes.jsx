import React from 'react';

class LinkDownloadDeclaracaoSNparaNaoSofrerRetencoes
extends React.Component {
  componentDidMount() {
    // Criar um link temporário para o download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/u/0/uc?id=1MTVlr5Ok8sUkdE4rpvDpCQezbDB0Pian&export=download';
    link.target = '_blank';
    link.download = 'modelo-declaracao-do-simples-nacional-para-nao-sofrer-retencoes-na-fonte.doc';

    // Adicionar o link ao documento
    document.body.appendChild(link);

    // Simular um clique no link para iniciar o download
    link.click();

    // Limpar o link do documento depois que o download for iniciado
    document.body.removeChild(link);

    // Redirecionar para o site principal após um atraso
    setTimeout(() => {
      window.location.replace('https://www.wcontec.com.br/');
    }, 6000);
  }

  render() {
    return (
      <div>
        <p>
          Baixando Modelo de declaracão do Simples Nacional para nao Sofrer Retencoes na fonte... <br />
          Se o download não iniciar automaticamente, clique aqui: {' '}
          <a href="https://drive.google.com/u/0/uc?id=1MTVlr5Ok8sUkdE4rpvDpCQezbDB0Pian&export=download" download="modelo-de-declaracão-do-Simples-Nacional-para-nao-Sofrer-Retencoes-na-fonte.doc">
            Baixar Agora!
          </a>
        </p>
      </div>
    );
  }
}


export default LinkDownloadDeclaracaoSNparaNaoSofrerRetencoes;