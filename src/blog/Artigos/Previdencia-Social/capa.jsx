import React from 'react';
import {Link} from 'react-router-dom';
import './aposentadoriaporidade2023.css';

function Capa(){
    return <section id="capa-aposentadoria-por-idade-2023">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Artigos/Previdencia-Social/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Confira as novas regras para<span className="terceiro-h3"> se aposentar em 2023</span><span className="terceiro-h3"></span></h3>
                    <h6 className="segundo-h6">Se você deseja fazer o seu pedido de aposentadoria neste ano, deve ficar atento às alterações que aconteceram. Clique no botão abaixo e fique por dentro.</h6>
                    <a href="#aposentadoria-por-idade-2023" className="btn btn-success btn-lg btn-capa-aposentadoria-por-idade-2023">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-aposentadoria-por-idade-2023">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;