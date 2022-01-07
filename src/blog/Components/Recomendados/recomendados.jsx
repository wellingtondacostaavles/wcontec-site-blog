import React from 'react';
import {Link} from 'react-router-dom';
import './recomendados.css';

function Recomendados(){
    return <section id="recomendados">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Recomendados</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 categorias-tgs">
                        <center><a href="/blog/autonomo"><img src="/Images/Tag-Autonomo.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 categorias-tgs">
                         <center><a href="/blog/abrirempresa"><img src="/Images/Tag-Como-Abrir-Empresa.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 categorias-tgs">
                        <center><a href="/blog/mei"><img src="/Images/Tag-MEI.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        <div className="container">                              
            <div className="row">
            <   div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/empresarioindividual"><img src="/Images/Tag-EI.png"/></a></center>                                                    
                </div>
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/sociedadelimitadaunipessoal"><img src="/Images/Tag-SLU.png"/></a></center>
                </div>
                <div className="col-lg-4 recomendados-tgs">
                    <center><a href="/blog/eireli"><img src="/Images/Tag-EIRELI.png"/></a></center>                                                      
                </div>
            </div>             
        </div> 
   </section>;
  }

export default Recomendados;