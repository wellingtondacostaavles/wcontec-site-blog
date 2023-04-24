import React from 'react';
import {Link} from 'react-router-dom';
import './novidadesnadeclaracaoirpf.css';

function Capa(){
    return <section id="capa-novidades-na-declaracao-irpf">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Novidadesnadeclaracaoirpf22/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Novidades na<span className="terceiro-h3"> declaração do Imposto de Renda</span> em 2023</h3>                
                    <h6 className="segundo-h6">Atenção para o prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2023 que começou no dia 15 de março, são várias mudanças.</h6>
                    <a href="#novidades-na-declaracao-irpf" className="btn btn-success btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;