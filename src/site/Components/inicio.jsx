import React from 'react';

function Inicio(){
    return <section id="inicio">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">    
                                <img src="Images/Notbook.png" className="d-block w-100" alt="..."/>
                            </div> 
                            <div className="carousel-item">    
                                <img src="Images/Notbook-inicio.png" className="d-block w-100" alt="..."/>
                            </div> 
                            <div className="carousel-item">    
                                <img src="Images/Notbook-lacamentos.png" className="d-block w-100" alt="..."/>
                            </div> 
                            <div className="carousel-item">    
                                <img src="Images/Notbook-lacamentos-mais.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item ">    
                                <img src="Images/Notbook-estoque.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item ">    
                                <img src="Images/Notbook-drive.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item ">    
                                <img src="Images/Notbook-nfs.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="col-lg-6">
                    <h3>Descomplicamos a Gestão Contábil e Financeira da sua empresa <span className="segundo-h3">controle seu negócio em uma plataforma intuitiva.</span></h3>                  
                    <h6>A Wcontec disponibiliza uma plataforma de gestão financeira e assessoria contábil online, que ajuda manter a saúde da sua empresa em dia. Emita notas fiscais, guias de impostos, automatize suas cobranças, gere relatórios, controle o fluxo caixa, contas a pagar e receber e muito mais de forma simples, segura e eficaz.</h6>
                    <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-success btn-lg btn-banner">Cadastre-se</a>
                    <a href="https://wcontec.osayk.com.br/#/login" target="_blank" className="btn btn-outline-primary btn-lg btn-banner">Acesse a Plataforma</a>
                </div>                
            </div>    
        </div>
     </section>;
  }

export default Inicio;