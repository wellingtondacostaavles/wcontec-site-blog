import React from 'react';
import {Link} from 'react-router-dom';
import './aimportranciadasretencoesnareinf.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-a-importrancia-das-retencoes-na-reinf">      
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
                        <center><img src="/Images/Microempreendedor/MeieaImportanciadocontadornaeradaefdreinf/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>MEI e a importância do contador na era da EFD-Reinf</h4>
                            <p>Ser um Microempreendedor Individual (MEI) evoluiu significativamente ao longo dos anos, tornando-se uma jornada cada vez mais complexa e intrincada.</p>
                            <a href="/blog-mei-e-a-Importancia-do-contador-na-era-da-efd-reinf/" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
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