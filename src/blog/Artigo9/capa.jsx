import React from 'react';
import {Link} from 'react-router-dom';
import './artigo9.css';

function Capa(){
    return <section id="capa-eireli">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Eireli/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>EIRELI</h3>   
                    <h3><span className="terceiro-h3">Empresa Individual de Responsabilidade Limitada</span></h3>               
                    <h6>Criado em 2011 com o objetivo de legalizar seu negócio como sociedade limitada, a Eireli tornou-se uma excelente alternativa para os profissionais que não se enquadram no MEI ou na EI, além da vantagem de separar o patrimônio pessoal do patrimônio da empresa, o que já não acontece na empresa individual.</h6>
                    <a href="#eireli" className="btn btn-success btn-lg btn-capa-eireli">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-eireli">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;