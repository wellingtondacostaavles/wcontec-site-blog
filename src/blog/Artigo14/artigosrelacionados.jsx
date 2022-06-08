import React from 'react';
import {Link} from 'react-router-dom';
import './artigo14.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados14">      
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
                            <center><img src="/Images/Autonomo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                                <div className="card-body">
                                    <h4 className="card-title">Autônomo</h4>
                                    <p className="card-text">O profissional que trabalha por conta própria e desempenha uma atividade remunerada sem vínculo empregatício, sua remuneração se dá por um contrato de prestação de serviços.</p>
                                    <a href="/blog-autonomo" className="btn btn-primary btn-artigos">Ler Post</a>
                                </div>
                            </div>  
                        </div>  
                
                    <div className="col-lg-6">
                        <div className="card card-artigos">
                        <center><img src="/Images/Mei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Microeemprendedor Individual (MEI)</h4>
                                <p className="card-text">Apesar de só poder faturar até R$ 81.000,00 por ano, o MEI tem diversas facilidades como abertura de conta bancária, pedido de empréstimos e emissão de notas fiscais.</p>
                                <a href="/blog-mei" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>
                </div> 
            </div>                
       </section>;
  }

export default Artigosrelacionados;