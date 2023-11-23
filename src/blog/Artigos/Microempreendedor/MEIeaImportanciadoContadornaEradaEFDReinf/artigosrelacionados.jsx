import React from 'react';
import {Link} from 'react-router-dom';
import './meieaImportanciadocontadornaeradaefdreinf.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-tipos-de-notas-permitidas-para-o-mei">      
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
                        <center><img src="/Images/Artigos/Efd-reinf-retencoes/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>Retenções na fonte: Guia EFD-Reinf para Empresas</h4>
                            <p>O entendimento das retenções na EFD-Reinf é essencial para o cumprimento de obrigações fiscais complexas e pode beneficiar sua empresa.</p>
                            <a href="/blog-efd-reinf-e-as-retencoes-na-fonte-guia-essencial-para-empresas" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>                 
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Mei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Desvendando os passos para se tornar um MEI: Requisitos, custos e benefícios</h4>
                            <p className="card-text">Apesar de só poder faturar até R$ 81.000,00 por ano, o MEI tem diversas facilidades como abertura de conta bancária, pedido de empréstimos e emissão de notas fiscais.</p>
                            <a href="/blog-mei" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;