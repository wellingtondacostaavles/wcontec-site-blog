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
                    <h3>Emissão de nota fiscal para <span className="terceiro-h3">Microempreendedor Individual</span></h3>                
                    <h6 className="segundo-h6">O microempreendedor individual está dispensado de emitir nota fiscal para pessoa física, contudo, quando a venda ou serviço for realizado para uma empresa, será necessário emitir a nota fiscal eletrônica conheça os tipos notas permitidas.</h6>
                    <a href="#tipos-de-notas-permitidas-para-o-mei" className="btn btn-success btn-lg btn-capa-tipos-de-notas-permitidas-para-o-mei">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-tipos-de-notas-permitidas-para-o-mei">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;