import React from 'react';
import {Link} from 'react-router-dom';
import './artigo.css';

function Capa(){
    return <section id="capa-naosepode">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Naosepodeculparcargatributaria/capaprincipal.png" alt="naosepodeculpar" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Não se pode culpar a carga tributária, em razão da falta de Gestão Empresarial <span className="terceiro-h3"> Impostos não quebram Empresas!</span></h3>                  
                    <h6 className="segundo-h6">Sem dúvida a carga tributária é um fator que gera dificuldades a empresários, no entanto muitas empresas, conduzem sua Gestão unicamente baseadas em Faturamento mensal, aí pode estar a razão de mais de 50% das empresas no Brasil encerrarem suas atividades em menos de um ano...</h6>
                    <a href="#naosepodeculparcargatributaria" className="btn btn-success btn-lg btn-capanaosepode">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capanaosepode">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;