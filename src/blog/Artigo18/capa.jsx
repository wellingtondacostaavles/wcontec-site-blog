import React from 'react';
import {Link} from 'react-router-dom';
import './artigo18.css';

function Capa(){
    return <section id="capa-transicaodooperacionalparaoempreendedorismo">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Transicaodooperacional/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Como fazer a transição<span className="terceiro-h3"> do operacional para o empreendedorismo?</span></h3>                
                    <h6 className="segundo-h6">Somos focados totalmente no operacional e não conseguimos crescer porque a dificuldade de empreender no segmento que atuamos acaba nos barrando, afinal, porque só conseguimos nos concentrar no operacional?</h6>
                    <a href="#transicaodooperacionalparaoempreendedorismo" className="btn btn-success btn-lg btn-capa-transicaodooperacionalparaoempreendedorismo">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-transicaodooperacionalparaoempreendedorismo">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;