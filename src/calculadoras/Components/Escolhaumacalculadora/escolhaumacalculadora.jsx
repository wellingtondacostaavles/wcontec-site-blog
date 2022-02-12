import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Escolhaumacalculadora(){
    return <section id="escolha-uma-calculadora">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Escolha uma calculadora</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 escolha-uma-calculadora-tgs">
                        <center><a href="#custo-mensal-com-funcionario"><img src="/Images/Tag-Autonomo.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 escolha-uma-calculadora-tgs">
                         <center><a href="/blog/abrir-empresa"><img src="/Images/Tag-Como-Abrir-Empresa.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 escolha-uma-calculadora-tgs">
                        <center><a href="/blog/mei"><img src="/Images/Tag-MEI.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        <div className="container">                              
            <div className="row">
            <   div className="col-lg-4 escolha-uma-calculadora-tgs">
                    <center><a href="/blog/empresario-individual"><img src="/Images/Tag-EI.png"/></a></center>                                                    
                </div>
                <div className="col-lg-4 escolha-uma-calculadora-tgs">
                    <center><a href="/blog/sociedade-limitada-unipessoal"><img src="/Images/Tag-SLU.png"/></a></center>
                </div>
                <div className="col-lg-4 escolha-uma-calculadora-tgs">
                    <center><a href="/blog/eireli"><img src="/Images/Tag-EIRELI.png"/></a></center>                                                      
                </div>
            </div>             
        </div> 
   </section>;
  }

export default Escolhaumacalculadora;