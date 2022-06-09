import React from 'react';
import './categorias.css';

function Categorias(){
    return <section id="categorias">      
         
         <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Categorias</h1>
                </div>
            </div>
        </div> 
        
        
        <div className="container">                              
            <div className="row">
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog#tecnologia-da-informacao"><img src="/Images/tegs-categorias/Tag-Tecnologia-da-Informacao.png"/></a></center>                                                      
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog#recursos-humanos"><img src="/Images/tegs-categorias/Tag-Recursos-Humanos.png"/></a></center>                                                
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog#empreendedorismo"><img src="/Images/Tag-Empreendedorismo.png"/></a></center>                                                 
                </div>
            </div>             
        </div>    

        <div className="container">                              
            <div className="row">
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog#gestao-empresarial"><img src="/Images/Tag-Gestaoempresarial.png"/></a></center> 
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog#financas"><img src="/Images/tegs-categorias/Tag-Gestao-Financeira.png"/></a></center> 
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog#tributacao"><img src="/Images/Tag-Tributacao.png"/></a></center> 
                </div>
                
            </div>             
        </div>              
    </section>;
  }

export default Categorias;