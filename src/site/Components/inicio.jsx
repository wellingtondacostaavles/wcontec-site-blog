import React from 'react';

function Inicio(){
    return <section id="inicio">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="Images/Notbook.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3> Descomplicamos a Gestão Contábil e Financeira da sua empresa <span className="segundo-h3">controle seu negócio em uma plataforma intuitiva.</span></h3>                  
                    <h6> A wcontec disponibiliza uma plataforma de gestão financeira e assessoria contábil online que ajuda você empreendedor a gerenciar seu negócio de forma simples, segura e eficaz.</h6>
                    <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-success btn-lg btn-banner">Teste Grátis</a>
                    <a href="https://wcontec.osayk.com.br/#/login" target="_blank" className="btn btn-outline-primary btn-lg btn-banner">Acesse a Plataforma</a>
                </div>               
            </div>
        </div>
    </section>;
  }

export default Inicio;