import React from 'react';

function Inicio(){
    return <section id="inicio">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="9999">    
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
                    <h2 className="chamado-h2">Vamos cuidar da sua empresa daqui,</h2>
                    <div id="carouselExampleControls" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">    
                                <h2 className="chamado2-h2">automaticamente</h2>
                            </div> 
                            <div className="carousel-item" data-bs-interval="1500">    
                                <h2 className="chamado2-h2">instantaneamente</h2>
                            </div> 
                            <div className="carousel-item" data-bs-interval="1500">    
                                <h2 className="chamado2-h2">firmemente</h2>
                            </div> 
                            <div className="carousel-item" data-bs-interval="1500">    
                                <h2 className="chamado2-h2">colaborativamente</h2>
                            </div>
                            <div className="carousel-item" data-bs-interval="33330">    
                                <h2 className="chamado2-h2">juntos.<span className="chamado4-h2"> Wcontec.</span></h2>
                            </div>
                        </div>
                    </div>           
                    <p></p>
                    <h4 className="chamado3-h4">A plataforma de gestão financeira e assessoria contábil online.</h4>
                    <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-success btn-lg btn-chamado">Cadastre-se</a>
                    <a href="https://wcontec.osayk.com.br/#/login" target="_blank" className="btn btn-outline-primary btn-lg btn-chamado">Acessar</a>
                </div>                        
            </div>    
        </div>
     </section>;
  }

export default Inicio;