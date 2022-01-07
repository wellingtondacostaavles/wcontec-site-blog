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
                    <center><a href="/blog/simplesnacional"><img src="/Images/Tag-Simples-Nacional.png"/></a></center>                                                      
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog/inssentendacomoeaaposentadoriadequemmudadesexo"><img src="/Images/Tag-INSS.png"/></a></center>                                                
                </div>
                <div className="col-lg-4 categorias-tgs">
                    <center><a href="/blog/sebraeoferececapacitacao  "><img src="/Images/Tag-Empreendedorismo.png"/></a></center>                                                 
                </div>
            </div>             
        </div>    

        <div className="container">                              
            <div className="row">
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/naosepodeculparcargatributaria"><img src="/Images/Tag-Gestaoempresarial.png"/></a></center> 
                </div>
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="#"><img src="/Images/Tag-Financasinvestimento.png"/></a></center> 
                </div>
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/senadoaprovatributacaomenorparacaminhoneiros"><img src="/Images/Tag-Tributacao.png"/></a></center> 
                </div>
                
            </div>             
        </div>              
    </section>;
  }

export default Categorias;