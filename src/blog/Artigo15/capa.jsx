import React from 'react';
import {Link} from 'react-router-dom';
import './artigo15.css';

function Capa(){
    return <section id="capa-dicasparaquemdesejamudardecarreira">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Dicasmudardcarreira/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Especialistas dão dicas<span className="terceiro-h3"> para quem pretende mudar de carreira</span></h3>                
                    <h6 className="segundo-h6">Se a intenção é mudar de carreira, para que façamos isso com mais segurança, será necessário seguir algumas dicas dadas por especialistas, veremos que eles apontarão alguns critérios que devemos tomar antes de qualquer decisão.</h6>
                    <a href="#dicasparaquemdesejamudardecarreira" className="btn btn-success btn-lg btn-capa-dicasparaquemdesejamudardecarreira zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-dicasparaquemdesejamudardecarreira zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;