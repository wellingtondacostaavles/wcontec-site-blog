import React from 'react';
import {Link} from 'react-router-dom';
import './artigo2.css';

function Capa(){
    return <section id="capa-mei">      
          
        <div className="container .capamei">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Mei/capaprincipal.png" alt="mei" />
                </div>
                
                <div className="col-lg-6">
                    <h3>O que significa MEI?</h3>                  
                    <h3><span className="terceiro-h3">MEI significa Microeemprendedor Individual</span> </h3>
                    <h6>O MEI tem facilidades com a abertura de conta bancária, no pedido de empréstimos e na emissão de notas fiscais, além de possuir algums direitos de uma pessoa física como: auxilio-maternidade, afastamento remunerado por problemas de saude e aposentadoria...</h6>
                    <a href="#mei" className="btn btn-success btn-lg btn-capamei">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capamei">Area do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;