import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function DeclaracaoIRPF(){
    return <section id="declaracao-IRPF">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Declaração de Imposto de Renda Pessoa Física</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-comerciante-mei.png" className="zoom-img"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#distribuicao-lucro-socio-sn"><img src="/Images/tegs-calculadoras/Tag-lucro-do-Socio-Empresa-Simples-Nacional.png" className="zoom-img"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-autonomo.png" className="zoom-img"/></a></center>                                    
                    </div>
                </div>             
            </div>

        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-cargas-autonomo.png" className="zoom-img"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-mei.png" className="zoom-img"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-cargas-mei.png" className="zoom-img"/></a></center>                                    
                    </div>
                </div>             
            </div>     

        
   </section>;
  }

export default DeclaracaoIRPF;