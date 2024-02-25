import React from 'react';
import './link-baixar-arquivos.css';

class LinkDownloadDeclaracaoSNparaNaoSofrerRetencoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 6 // Define o countdown inicial em 6 segundos
    };
  }

  componentDidMount() {
    // Criar um link temporário para o download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/u/0/uc?id=1MTVlr5Ok8sUkdE4rpvDpCQezbDB0Pian&export=download';
    link.target = '_blank';
    link.download = 'modelo-de-declaracao-do-simples-nacional-para-nao-sofrer-retencoes-na-fonte.doc';

    // Adicionar o link ao documento
    document.body.appendChild(link);

    // Simular um clique no link para iniciar o download
    link.click();

    // Limpar o link do documento depois que o download for iniciado
    document.body.removeChild(link);

    // Iniciar contagem regressiva para o redirecionamento para o site principal
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        countdown: prevState.countdown - 1
      }));
    }, 1000);

    // Redirecionar para o site principal após um atraso
    setTimeout(() => {
      window.location.replace('https://www.wcontec.com.br/');
    }, 6000);
  }

  componentWillUnmount() {
    // Limpar o intervalo da contagem regressiva quando o componente for desmontado
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <section id="modelo-de-declaracao-do-simples-nacional-para-nao-sofrer-retencoes-na-fonte">
          <div className="container-unico">
            <p>Baixando...</p>
            <p>Se o download não iniciar automaticamente, clique no botão abaixo: </p>
            <p>{' '}<a href="https://drive.google.com/u/0/uc?id=1MTVlr5Ok8sUkdE4rpvDpCQezbDB0Pian&export=download" className="btn btn-outline-primary btn-lg btn-baixar-agora" download="modelo-de-declaracao-do-Simples-Nacional-para-nao-Sofrer-Retencoes-na-fonte.doc"><i className="fa fa-download"></i> Baixar Agora</a></p>
            <p>Redirecionando para Wcontec em {this.state.countdown} segundos...</p>
          </div>
        </section>
      </div>
    );
  }
}

export default LinkDownloadDeclaracaoSNparaNaoSofrerRetencoes;
