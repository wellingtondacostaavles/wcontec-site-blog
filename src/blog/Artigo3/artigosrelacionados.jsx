import React from 'react';
import {Link} from 'react-router-dom';
import './artigo3.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados3">      
       <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Assuntos Relacionados</h1>         
                </div>
            </div> 
        </div>
         
         <div className="container">                
            <div className="row">
                
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Profissionaisautonomosestaoemcrescimento/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Profissionais autônomos estão em crescimento</h4>
                            <p className="card-text">O trabalho por conta própria, conhecidos como profissionais autônomos, atingiu o número recorde de 24,8 milhões de pessoas no segundo trimestre de 2021.</p>
                            <a href="/blog-profissionais-autonomos-estao-em-crescimento" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Abrirempresa/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Descomplicando o processo de abertura de empresa</h4>
                            <p className="card-text">Saiba o que é preciso fazer para abrir sua microempresa, comerçando com o registro na Junta Comercial do estado ou no Cartório de Registro de Pessoa Jurídica.</p>
                            <Link to="/blog-abrir-uma-empresa" className="btn btn-primary btn-artigos">Ler Post</Link>
                        </div>
                    </div>  
                </div>                            
            </div>  
        </div>   
       

    </section>;
  }

export default Artigosrelacionados;