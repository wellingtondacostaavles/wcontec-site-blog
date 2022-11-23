import React from 'react';
import {Link} from 'react-router-dom';
import './restituicaoIR.css';

function Capa(){
    return <section id="capa-restituicao-IR">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/DIRPF22/RestituicaoIR/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Receita Federal disponibiliza consulta ao lote residual do<span className="terceiro-h3"> Imposto de Renda 2022</span></h3>                
                    <h6 className="segundo-h6">Saiba como consultar se o seu nome está na lista do lote residual de restituição.</h6>
                    <a href="#restituicao-IR" className="btn btn-success btn-lg btn-capa-restituicao-IR">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-restituicao-IR">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;