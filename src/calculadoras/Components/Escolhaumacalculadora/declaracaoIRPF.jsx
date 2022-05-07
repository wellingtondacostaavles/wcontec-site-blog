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
                        <center><Link to="/calculadoras-distribuicao-lucro-mei"><img src="/Images/tegs-calculadoras/Tag-lucro-do-MEI-a-ser-distribuido-na-DIRPF.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-distribuicao-lucro-socio-simples-nacional"><img src="/Images/tegs-calculadoras/Tag-lucro-do-Socio-Empresa-Simples-Nacional.png"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-autonomo-transporte-passageiro"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-autonomo.png"/></Link></center>
                    </div>
                </div>             
            </div>

        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-mei-transporte-passageiro"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-mei.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-desconto-simplificado"><img src="/Images/tegs-calculadoras/Tag-IRPF-desconto-simplificado.png"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-deducoes-legais"><img src="/Images/tegs-calculadoras/Tag-IRPF-deducoes-legais.png"/></Link></center>
                    </div>
                </div>             
            </div>     

        
   </section>;
  }

export default DeclaracaoIRPF;