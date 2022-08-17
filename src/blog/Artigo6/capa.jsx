import React from 'react';
import {Link} from 'react-router-dom';
import './artigo6.css';

function Capa(){
    return <section id="capa-sociedadelimitadaunipessoal">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Slu/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Sociedade Limitada Unipessoal (SLU)</h3>   
                    <h3><span className="terceiro-h3">um Marco no Mundo dos Negócios</span></h3>               
                    <h6 className="segundo-h6">Pensando em uma natureza juridica que não precisasse ter sócios, não houvesse a exigência de um valor mínimo para o capital social, além de o patrimônio do empreendedor pudesse ficar separado do patrimônio da empresa. Então foi criado um formato de empresa que pode ser aberta abranjendo tudo isso.</h6>
                    <a href="#sociedadelimitadaunipessoal" className="btn btn-success btn-lg btn-capa-sociedadelimitadaunipessoal">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-sociedadelimitadaunipessoal">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;

