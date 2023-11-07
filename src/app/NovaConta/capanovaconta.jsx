import React from 'react';
import {Link} from 'react-router-dom';
import './novaconta.css';

function Capanovaconta(){
    return <section id="capa-novaconta">      
          
        <div className="container-fluid .capa-novaconta">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Calculadora/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Realize<span className="terceiro-h3"> calculos diversos para você e sua empresa</span> de forma simples</h3>                 
                    <h6 className="segundo-h6">As calculadoras não devem ser utilizadas em substituição a um profissional habilitado, e quem o faz é por sua conta e risco, aceitando que não temos qualquer responsabilidade por danos de qualquer natureza resultantes desta utilização.</h6>
                    <a href="#novaconta" className="btn btn-success btn-lg btn-capa-novaconta">Acesse as calculadoras</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-novaconta">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capanovaconta;