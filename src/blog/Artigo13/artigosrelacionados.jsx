import React from 'react';
import {Link} from 'react-router-dom';
import './artigo13.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados13">      
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
                            <center><img src="/Images/Transicaodooperacional/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div class="card-body">
                                <h4 className="card-title">Como fazer a transição do operacional para o empreendedorismo?</h4>
                                <p className="card-text">Somos focados totalmente no operacional e não conseguimos crescer porque a dificuldade de empreender no segmento que atuamos acaba nos barrando.</p>
                                <a href="/blog/transicaodooperacionalparaoempreendedorismo#transicaodooperacionalparaoempreendedorismo" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>  
                
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Mei/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">xxxxxxxxxxxxxxxxx</h4>
                            <p className="card-text">Apesar de só poder faturar até R$ 81.000,00 por ano, o MEI tem diversas facilidades como abertura de conta bancária, pedido de empréstimos e emissão de notas fiscais.</p>
                            <a href="/blog/mei" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;