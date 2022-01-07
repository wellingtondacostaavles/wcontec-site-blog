import React from 'react';
import {Link} from 'react-router-dom';
import './artigo4.css';

function Capa(){
    return <section id="capa-abrirempresa">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Abrirempresa/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Como abrir uma empresa?</h3>   
                    <h3><span className="terceiro-h3">Veja como fazer o registro da sua microempresa.</span></h3>               
                    <h6>Antes de tudo é preciso se informar. Faça uma pesquisa antecipada sobre a existência de empresas constituídas com nomes empresariais idênticos ou semelhantes ao nome pesquisado.</h6>
                    <h6>Essa é uma etapa obrigatória, que deve ser preenchida no site da junta comercial...</h6>
                    <a href="#abrirempresa" className="btn btn-success btn-lg btn-capa-abrirempresa">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-abrirempresa">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;