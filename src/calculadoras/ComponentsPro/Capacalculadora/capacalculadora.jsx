import React from 'react';
import {Link} from 'react-router-dom';
import './capacalculadora.css';

function Capacalculadora(){
    return <section id="capa-calculadora">      
          
        <div className="container .capa-calculadora">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Calculadora/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Realize<span className="terceiro-h3"> calculos diversos para você e sua empresa</span> de forma simples</h3>                 
                    <h6 className="segundo-h6">As calculadoras não devem ser utilizadas em substituição a um profissional habilitado, e quem o faz é por sua conta e risco, aceitando que não temos qualquer responsabilidade por danos de qualquer natureza resultantes desta utilização.</h6>
                    <a href="#escolha-uma-calculadora" className="btn btn-success btn-lg btn-capa-calculadora">Escolha uma Calculadora</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-calculadora">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capacalculadora;