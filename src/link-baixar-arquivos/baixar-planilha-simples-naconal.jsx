import React from 'react';

class LinkDownloadPlanilhaSimplesNacional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 6 // Define o countdown inicial em 6 segundos
    };
  }

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
        <p>
          Baixando Planilhas de Cálculo do Simples Nacional... <br />
          Se o download não iniciar automaticamente, clique aqui: {' '}
          <a href="https://drive.google.com/u/0/uc?id=1qWOGtzeOh4mVWAUWdklqkDyX9-j6IFPF&export=download" download="planilha-simples-nacional.zip">
            Baixar Agora!
          </a>
        </p>
        <p>Redirecionando para o site principal em {this.state.countdown} segundos...</p>
      </div>
    );
  }
}

export default LinkDownloadPlanilhaSimplesNacional;



