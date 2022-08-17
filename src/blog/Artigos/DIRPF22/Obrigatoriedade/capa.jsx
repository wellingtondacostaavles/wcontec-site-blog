import React from 'react';
import {Link} from 'react-router-dom';
import './obrigatoriedade.css';

function Capa(){
    return <section id="capa-obrigatoriedade">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/DIRPF22/Obrigatoriedade/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Saiba se você está obrigado a apresentar<span className="terceiro-h3"> declaração do Imposto de Renda</span></h3>                
                    <h6 className="segundo-h6">Entramos no último mês do prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2022, mas muita gente ainda não sabe se está obrigado a prestar contas com o leão! É importante se atualizar anualmente, pois todos os anos a Receita Federal faz alterações para adequar o imposto à realidade do país.</h6>
                    <a href="#obrigatoriedade" className="btn btn-success btn-lg btn-capa-obrigatoriedade">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-obrigatoriedade">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;