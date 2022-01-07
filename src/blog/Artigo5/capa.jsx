import React from 'react';
import {Link} from 'react-router-dom';
import './artigo5.css';

function Capa(){
    return <section id="capa-simplesnacional">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Simplesnacional/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>O que é Simples Nacional?</h3>   
                    <h3><span className="terceiro-h3">O Simples Nacional é um regime tributário exclusivo para micro e pequenas empresas.</span></h3>               
                    <h6>O Simples Nacional foi criado em 2007 para descomplicar a vida dos micro e pequenos empresários, que tinham que se preocupar com inúmeras guias diferentes de tributos para se manterem regularizados perante a Receita Federal...</h6>
                    <a href="#simplesnacional" className="btn btn-success btn-lg btn-capa-simplesnacional">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-simplesnacional">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;