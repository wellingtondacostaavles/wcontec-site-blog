import React from 'react';
import {Link} from 'react-router-dom';
import './certidoesnegativas.css';

function Capa(){
    return <section id="capa-certidoes-negativas">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Certidoesnegativas/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Bancos exigem <span className="terceiro-h3">Certidões Negativas de Débitos</span><span className="terceiro-h3"></span> caso você queira um financiamento para sua empresa</h3>                
                    <h6>Saiba como tirar as certidões que são exigidas para o financiamento de recursos via bancos públicos (Caixa Econômica Federal, Banco do Brasil, e etc.), em ações judiciais, e licitações.</h6>
                    <a href="#certidoes-negativas" className="btn btn-success btn-lg btn-capa-certidoes-negativas">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-certidoes-negativas">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;