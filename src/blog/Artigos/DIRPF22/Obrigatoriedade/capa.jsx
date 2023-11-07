import React from 'react';
import {Link} from 'react-router-dom';
import './obrigatoriedade.css';

function Capa(){
    return <section id="capa-obrigatoriedade">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/DIRPF/Obrigatoriedade/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Descubra se você precisa fazer a<span className="terceiro-h3"> declaração do Imposto de Renda</span></h3>                
                    <h6 className="segundo-h6">Muitas pessoas ainda desconhecem se estão obrigadas a prestar contas com a Receita Federal durante a época de declaração do Imposto de Renda. É de extrema importância estar atualizado anualmente, uma vez que a Receita Federal realiza alterações anuais para adequar o imposto à realidade econômica do país. Manter-se informado é fundamental para evitar problemas futuros com o fisco.</h6>
                    <a href="#obrigatoriedade" className="btn btn-success btn-lg btn-capa-obrigatoriedade zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-obrigatoriedade zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;