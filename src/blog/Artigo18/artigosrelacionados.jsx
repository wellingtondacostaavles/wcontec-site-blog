import React from 'react';
import {Link} from 'react-router-dom';
import './artigo18.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados18">      
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
                            <center><img src="/Images/Sebraeoferececapacitacao/capaprincipal.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Sebrae oferece cursos gratuitos para empreendedores refugiados no Brasil</h4>
                                <p className="card-text">O Sebrae fechou uma parceria com a ACNUR, agência da ONU para refugiados, visando o desenvolvimento de ações de capacitação para refugiados empreendedores...</p>
                                <a href="/blog-sebrae-oferece-capacitacao" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>  

                    <div className="col-lg-6">
                        <div className="card card-artigos">
                            <center><img src="/Images/Autonomo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Vantagens e Desvantagens de ser um profissional autônomo</h4>
                                <p className="card-text">O profissional que trabalha por conta própria e desempenha uma atividade remunerada sem vínculo empregatício, sua remuneração se dá por um contrato de prestação de serviços.</p>
                                <a href="/blog-autonomo" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>  
                </div>       
            </div>          
       </section>;
  }

export default Artigosrelacionados;