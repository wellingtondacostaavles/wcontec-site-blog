import React from 'react';
import {Link} from 'react-router-dom';
import './pronampe2022.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-pronampe-2022">      
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
                        <center><img src="/Images/Consultasaosistemavaloresareceberbcb/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>Já estão disponíveis as consultas ao Sistema Valores a Receber</h4>
                            <p>Através desta consulta você saberá se tem valor a receber ou não, caso tenha, ficará por dentro da data e o período para consultar e solicitar o resgate do saldo existente.</p>
                            <a href="/blog-consulta-ao-sistema-valores-a-receber-bcb" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Mei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Entenda o que é um Microeemprendedor Individual (MEI)</h4>
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