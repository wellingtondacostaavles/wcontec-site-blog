import React from 'react';
import {Link} from 'react-router-dom';
import './tiposdenotaspermitidasparaomei.css';

function Capa(){
    return <section id="capa-tipos-de-notas-permitidas-para-o-mei">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Microempreendedor/Notasparaomei/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Tudo o que você precisa saber sobre emissão de <span className="terceiro-h3">nota fiscal para microempreendedores</span></h3>                
                    <h6 className="segundo-h6">Os microempreendedores individuais estão dispensados de emitir nota fiscal para transações com pessoas físicas. No entanto, quando ocorrer uma venda ou prestação de serviço para uma empresa, é necessário emitir a nota fiscal eletrônica. É importante conhecer os tipos de notas fiscais permitidos nesses casos.</h6>
                    <a href="#tipos-de-notas-permitidas-para-o-mei" className="btn btn-success btn-lg btn-capa-tipos-de-notas-permitidas-para-o-mei">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-tipos-de-notas-permitidas-para-o-mei">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;