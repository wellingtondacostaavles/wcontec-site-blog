import React from 'react';
import {Link} from 'react-router-dom';
import './artigo8.css';

function Capa(){
    return <section id="capa-diferencasmeieirelisluei">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Diferecasform/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Diferenças entre EI, MEI, Eireli e SLU</h3>   
                    <h3><span className="terceiro-h3">Parece iguais mas não são!</span></h3>               
                    <h6 className="segundo-h6">Apesar de parecidos, existem algumas particularides de um para o outro que devemos analisar com calma, se possivél com ajuda de um contador, para que possamos escolher o melhor formato de empresa.</h6>
                    <h6 className="segundo-h6">Continue lendo e veja algumas caracteristas importantes que as diferenciam.</h6>
                    <a href="#diferencasmeieirelisluei" className="btn btn-success btn-lg btn-capa-diferencasmeieirelisluei zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-diferencasmeieirelisluei zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;