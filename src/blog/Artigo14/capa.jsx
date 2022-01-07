import React from 'react';
import {Link} from 'react-router-dom';
import './artigo14.css';

function Capa(){
    return <section id="capa-profissionaisautonomosestaoemcrescimento">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Profissionaisautonomosestaoemcrescimento/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Profissionais autônomos estão em crescimento<span className="terceiro-h3"> e já somam mais de 24,8 milhões de brasileiros</span></h3>                
                    <h6>De acordo com dados da Pnad Contínua, divulgada pelo IBGE em setembro, o trabalho por conta própria, conhecidos como profissionais autônomos, atingiu 4,2% a mais comparado ao trimestre anterior, isso corresponde a 28,3% de toda a população ativa no mercado de trabalho.</h6>
                    <a href="#profissionaisautonomosestaoemcrescimento" className="btn btn-success btn-lg btn-capa-profissionaisautonomosestaoemcrescimento">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-profissionaisautonomosestaoemcrescimento">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;