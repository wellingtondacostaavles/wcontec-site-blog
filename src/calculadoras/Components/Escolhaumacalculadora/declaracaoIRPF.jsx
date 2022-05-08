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
                        <center><Link to="/calculadoras-irpf-mei-comercio"><img src="/Images/tegs-calculadoras/Tag-comerciante-mei.png"/></Link></center>
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
                        <center><Link to="/calculadoras-irpf-autonomo-transporte-cargas"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-cargas-autonomo.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-irpf-mei-transporte-passageiro"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-mei.png"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-mei-transporte-cargas"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-cargas-mei.png"/></Link></center>
                    </div>
                </div>             
            </div>     

        
   </section>;
  }

export default DeclaracaoIRPF;