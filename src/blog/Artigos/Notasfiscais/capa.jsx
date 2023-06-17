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
                    <h3>Guia prático:<span className="terceiro-h3"> como emitir nota fiscal</span> para comprovação de vendas e prestação de contas<span className="terceiro-h3"></span></h3>
                    <h6 className="segundo-h6">Se você é empreendedor, é importante conhecer o processo de emissão de nota fiscal em todas as suas operações comerciais. Essa obrigação se aplica tanto aos microempreendedores (ME), empresas de pequeno porte (EPPs) quanto aos microempreendedores individuais (MEIs).</h6>
                    <a href="#obrigatoriedade-de-emitir-nota-fiscal" className="btn btn-success btn-lg btn-capa-obrigatoriedade-de-emitir-nota-fiscal">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-obrigatoriedade-de-emitir-nota-fiscal">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;