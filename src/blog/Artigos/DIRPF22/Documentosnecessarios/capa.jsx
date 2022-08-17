import React from 'react';
import {Link} from 'react-router-dom';
import './documentosnecessarios.css';

function Capa(){
    return <section id="capa-documentos-necessarios">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/DIRPF22/Documentosnecessarios/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Veja quais são os<span className="terceiro-h3"> documentos</span> necessários para a <span className="terceiro-h3">DIRPF 2022</span></h3>                
                    <h6 className="segundo-h6">Quanto antes você juntar os documentos, mais tempo terá para correr atrás de alguma informação que faltou, e também deverá guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</h6>
                    <a href="#documentos-necessarios" className="btn btn-success btn-lg btn-capa-documentos-necessarios">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-documentos-necessarios">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;