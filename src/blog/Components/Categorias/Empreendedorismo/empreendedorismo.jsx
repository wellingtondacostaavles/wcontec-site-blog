import React from 'react';
import './empreendedorismo.css';

function Empreendedorismo(){
    return <section id="empreendedorismo">      
         <div className="container">                
            <div className="row">
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Profissionaisautonomosestaoemcrescimento/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Profissionais autônomos estão em crescimento no Brasil</h4>
                            <p className="card-text">O trabalho por conta própria, conhecidos como profissionais autônomos, atingiu o número recorde de 24,8 milhões de pessoas no segundo trimestre de 2021.</p>
                            <a href="/blog-profissionais-autonomos-estao-em-crescimento" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-6">
                        <div className="card card-artigos">
                        <center><img src="/Images/Transicaodooperacional/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Como fazer a transição do operacional para o empreendedorismo?</h4>
                            <p className="card-text">Somos focados totalmente no operacional e não conseguimos crescer porque a dificuldade de empreender no segmento que atuamos acaba nos barrando.</p>
                            <a href="/blog-transicao-do-operacional-para-o-empreendedorismo" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row">    
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Sebraeoferececapacitacao/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Sebrae oferece cursos para empreendedores refugiados no Brasil</h4>
                            <p className="card-text">O Sebrae fechou uma parceria com a ACNUR para refugiados, visando o desenvolvimento de ações de capacitação para refugiados empreendedores...</p>
                            <a href="/blog-sebrae-oferece-capacitacao" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6">
                <div className="card card-artigos">
                        <center><img src="/Images/Mei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Comece sendo um Microeemprendedor Individual (MEI)</h4>
                            <p className="card-text">Apesar de só poder faturar até R$ 81.000,00 por ano, o MEI tem diversas facilidades como abertura de conta bancária, pedido de empréstimos e emissão de notas fiscais.</p>
                            <a href="/blog-mei" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>                      
                </div>            
            </div>  
        </div>
                       
    </section>;
  }

export default Empreendedorismo;