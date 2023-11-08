import React from 'react';
import {Link} from 'react-router-dom';
import './artigo6.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados6">      
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
                        <center><img src="/Images/Ei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Empresário Individual (EI)</h4>
                            <p className="card-text">Também conhecido como "firma individual", e diferente de MEI é ideal para quem quer exercer em nome próprio uma atividade empresarial, sem a necessidade de um sócio.</p>
                            <a href="/blog-empresario-individual" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div> 
                 
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Mei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Microeemprendedor Individual (MEI)</h4>
                            <p className="card-text">Apesar de só poder faturar até R$ 81.000,00 por ano, o MEI tem diversas facilidades como abertura de conta bancária, pedido de empréstimos e emissão de notas fiscais.</p>
                            <a href="/blog-mei" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>   
            </div>

            <div className="row">
               <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Eireli/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Empresa Individual de Responsabilidade Limitada (EIRELI)</h4>
                            <p className="card-text">Aqui o empresário tem a liberdade de escolher o modelo de tributação que melhor adapte a atividade e porte da empresa.</p>
                            <a href="/blog-eireli" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>     
                 
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Diferecasform/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Veja quais são as diferenças entre SLU, EI, MEI e EIRELI</h4>
                            <p className="card-text">Apesar de parecer iguais, existem diferenças que devemos ter cuidado na hora de escolher o melhor formato de empresa.</p>
                            <a href="/blog-diferencas-mei-eireli-slu-ei" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>   
            </div>    
        </div>   
       

    </section>;
  }

export default Artigosrelacionados;