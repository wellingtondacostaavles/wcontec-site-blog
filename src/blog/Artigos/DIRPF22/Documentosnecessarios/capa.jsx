import React from 'react';
import {Link} from 'react-router-dom';
import './documentosnecessarios.css';

function Capa(){
    return <section id="capa-documentos-necessarios">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/DIRPF/Documentosnecessarios/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Veja quais são os<span className="terceiro-h3"> documentos</span> necessários para a <span className="terceiro-h3">Declaração de Imposto de Renda</span></h3>                
                    <h6 className="segundo-h6">É importante juntar todos os documentos necessários para a declaração do Imposto de Renda o quanto antes, pois assim terá mais tempo para buscar alguma informação que possa estar faltando. Além disso, é fundamental guardar esses papéis por no mínimo cinco anos, caso a Receita Federal solicite comprovação das informações declaradas.</h6>
                    <a href="#documentos-necessarios" className="btn btn-success btn-lg btn-capa-documentos-necessarios zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-documentos-necessarios zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;