import React from 'react';
import {Link} from 'react-router-dom';
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
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/simples-nacional"><img src="/Images/Tag-Simples-Nacional.png"/></a></center>                                                      
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog/inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo"><img src="/Images/Tag-INSS.png"/></a></center>                                                
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog/sebrae-oferece-capacitacao"><img src="/Images/Tag-Empreendedorismo.png"/></a></center>                                                 
                </div>
            </div>             
        </div>    

        <div className="container">                              
            <div className="row">
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/nao-se-pode-culpar-a-cargatributaria"><img src="/Images/Tag-Gestaoempresarial.png"/></a></center> 
                </div>
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="#"><img src="/Images/Tag-Financasinvestimento.png"/></a></center> 
                </div>
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/senado-aprova-tributacao-menor-para-caminhoneiros"><img src="/Images/Tag-Tributacao.png"/></a></center> 
                </div>
                
            </div>             
        </div>              
    </section>;
  }

export default Categorias;