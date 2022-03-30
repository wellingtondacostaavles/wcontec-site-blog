import React from 'react';
import './parceiros.css';

function Certificacaodigital(){
    return <div>                  
      
    <section id="certificacao-digital">
      
        <div className="container">                
            <div className="row text-center">
                <div className="titulo">
                    <h1>Obtenha seu certificado digital sem sair de casa</h1>
                    <h4>Faça a validação de identidade por videoconferência de forma segura</h4>
                </div>
            </div>

            <div className="row text-center etiquetas">
                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4>e-CPF A1</h4>
                        </div>    
                        <div className="card-body">
                            <h5>Otimize seu imposto de renda com a Declaração Pré-Preenchida</h5>
                            <p><small className="text-muted">A partir de</small></p>
                            <h2>R$ 140,00</h2>
                            <p><small className="text-muted">Emitido e armazenado no computador, smartphone ou tablet. Validade de 1 ano.</small></p>
                            <a href="https://api.whatsapp.com/send/?phone=5581996584830&text&app_absent=0" target="_blank" className="btn btn-lg btn-outline-success btn-artigos">Compre agora</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm border-success">
                        <div className="card-header py-3 text-white bg-success border-success">
                            <h4>e-CNPJ A1</h4>
                        </div>
                        <div className="card-body">
                            <h5>Concentre suas assinaturas em um único local de armazenamento</h5>
                            <p><small className="text-muted">A partir de</small></p>
                            <h2>R$ 190,00</h2>
                            <p><small className="text-muted">Emitido e armazenado no computador, smartphone ou tablet. Validade de 1 ano.</small></p>
                            <a href="https://api.whatsapp.com/send/?phone=5581996584830&text&app_absent=0" target="_blank" className="btn btn-lg btn-success btn-artigos">Compre agora</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4>e-CNPJ A3</h4>
                        </div>
                        <div className="card-body">
                            <h5>Menos burocracia em processos que exigem assinatura digital</h5>
                            <p><small className="text-muted">A partir de</small></p>
                            <h2>R$ 256,00</h2>
                            <p><small className="text-muted">Emitido e armazenado em mídia de Cartão ou Token. Validade de 1 a 3 anos.</small></p>
                            <a href="https://api.whatsapp.com/send/?phone=5581996584830&text&app_absent=0" target="_blank" className="btn btn-lg btn-outline-success btn-artigos">Compre agora</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <img src="/Images/Parceiros/Certificado.digital.png"/>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    </section>            
  </div> 
  }

export default Certificacaodigital;