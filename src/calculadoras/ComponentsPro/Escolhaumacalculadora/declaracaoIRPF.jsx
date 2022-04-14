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
                        <center><a href="#distribuicao-lucro-mei"><img src="/Images/tegs-calculadoras/Tag-lucro-do-MEI-a-ser-distribuido-na-DIRPF.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#distribuicao-lucro-socio-sn"><img src="/Images/tegs-calculadoras/Tag-lucro-do-Socio-Empresa-Simples-Nacional.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                    
                    </div>
                </div>             
            </div>

        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#desconto-simplificado"><img src="/Images/tegs-calculadoras/Tag-IRPF-desconto-simplificado.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#deducoes-legais"><img src="/Images/tegs-calculadoras/Tag-IRPF-deducoes-legais.png"/></a></center>                                    
                    </div>
                </div>             
            </div>     

        
   </section>;
  }

export default DeclaracaoIRPF;