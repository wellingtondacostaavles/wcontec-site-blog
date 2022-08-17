import React from 'react';
import {Link} from 'react-router-dom';
import './obrigatoriedadedeemitirnotafiscal.css';

function Capa(){
    return <section id="capa-obrigatoriedade-de-emitir-nota-fiscal">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Notasfiscais/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Veja se você está obrigado, e como <span className="terceiro-h3">emitir nota fiscal</span><span className="terceiro-h3"></span> eletrônica</h3>
                    <h6 className="segundo-h6">Se você é empreendedor saiba como emitir nota fiscal ao fazer qualquer operação negocial. A obrigação vale para o microempreendedor (ME), empresas de pequeno porte (EPPs) e para os microempreendedores individuais (MEIs), salvo quando estes venderem ou prestarem serviços para pessoa física.</h6>
                    <a href="#obrigatoriedade-de-emitir-nota-fiscal" className="btn btn-success btn-lg btn-capa-obrigatoriedade-de-emitir-nota-fiscal">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-obrigatoriedade-de-emitir-nota-fiscal">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;