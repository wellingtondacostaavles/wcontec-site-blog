import React from 'react';
import {Link} from 'react-router-dom';
import './novidadesnadeclaracaoirpf22.css';

function Capa(){
    return <section id="capa-novidades-na-declaracao-irpf-22">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Novidadesnadeclaracaoirpf22/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Novidades na<span className="terceiro-h3"> declaração do Imposto de Renda</span> em 2022</h3>                
                    <h6 className="segundo-h6">Atenção para o prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2022 que começou na última segunda-feira, são várias mudanças, e a que chama mais atenção será o recebimento da restituição ou o pagamento do imposto por meio de Pix.</h6>
                    <a href="#novidades-na-declaracao-irpf-22" className="btn btn-success btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;