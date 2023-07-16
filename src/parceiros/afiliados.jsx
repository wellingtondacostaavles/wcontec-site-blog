import React from 'react';
import Footer from '../site/Components/contato';
import Parceiros from '../site/Components/parceiros';
import './parceiros.css';

function Afiliados(){
    return <div>                  
      
    <section id="afiliados">
      
        <div className="container">                
            <div className="row text-center">
                <div className="titulo">
                    <h1>Programa parceiro afiliado</h1>
                    <h4>Vagas limitadas</h4>
                    <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-success btn-lg btn-afiliados">Cadastre-se</a>
                    </div>
            </div>

            <div className="row">
                    <h4>Torne-se parceiro afiliado da Wcontec e ganhe dinheiro!</h4>
                    <h5>É só conheçer um amigo empreendedor precisando de uma plataforma 100% online para:</h5>             
            </div>
            <div className="container">
            <div className="row">
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-building fa-5x"></i>
                    <h3>Abrir empresa ou realizar alteração de constituição </h3>                    
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-chart-pie fa-5x"></i>
                    <h3>Controlar o estoque com opção de emitir a NF-e ou NFC-e</h3> 
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-chart-line fa-5x"></i>
                    <h3>Gestão financeira fluxo de caixa e relatórios</h3>
                </div> 
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-comment-dollar fa-5x"></i>
                    <h3>Boletos com automação de cobranças</h3>                    
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-tv fa-5x"></i>
                    <h3>Contador online</h3> 
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-users fa-5x"></i>
                    <h3>Folha de pagamentos</h3>
                </div>
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-landmark fa-5x"></i>
                    <h3>Tributos</h3>
                </div>
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-file-invoice fa-5x"></i>
                    <h3>Emitir NFS-e</h3>                    
                </div>
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-solid fa-cloud fa-5x"></i>
                    <h3>Arquivos em nuvem</h3>
                </div>                                            
            </div>
            <div className="row text-center">
                <div className="titulo">
                    <h2>Indique nossa plataforma com um custo bem acessível!</h2>
                    <h4>A partir de R$ 39,90</h4>
                    <p></p>
                    <h1>PIX de até R$ 500,00 por cada indicação</h1>
                    <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-success btn-lg btn-afiliados">Cadastre-se</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-afiliados">Área do Cliente</a>
                    <h5>Regra: Ao se tornar um parceiro afiliado, após o cadastro clique na cartinha no canto direito superior da tela e informe sua indicação, assim que ele realizar a assinatura você recebe 50% do primeiro boleto pago no momento da contratação!</h5>
                </div>
            </div>
        </div>    
        </div>
    </section>
    <Parceiros/>
    <Footer/>            
  </div> 
  }

export default Afiliados;