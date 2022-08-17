import React from 'react';
import {Link} from 'react-router-dom';
import './artigo13.css';

function Capa(){
    return <section id="capa-sebraeoferececapacitacao">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Sebraeoferececapacitacao/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Sebrae oferece capacitação gratuita<span className="terceiro-h3"> para empreendedores refugiados no Brasil</span></h3>                
                    <h6 className="segundo-h6">O Sebrae fechou uma parceria com a ACNUR, agência da ONU para refugiados, visando o desenvolvimento de ações de capacitação para refugiados empreendedores, permitindo que ele inscreva seu negócio e divulgue seus produtos e serviços. Também estão disponíveis...</h6>
                    <a href="#sebraeoferececapacitacao" className="btn btn-success btn-lg btn-capa-sebraeoferececapacitacao">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-sebraeoferececapacitacao">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;