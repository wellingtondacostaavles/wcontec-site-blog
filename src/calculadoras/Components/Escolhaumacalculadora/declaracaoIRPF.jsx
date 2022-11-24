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
                        <center><Link to="/calculadoras-irpf-sobre-empregado-clt"><img src="/Images/tegs-calculadoras/Tag-empregado-clt.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="#"><img src="/Images/tegs-calculadoras/Tag-atualizando-calculadora.png"/></Link></center>
                    </div>                    
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-sobre-trabalhador-autonomo-geral"><img src="/Images/tegs-calculadoras/Tag-autonomo-regra-geral.png"/></Link></center>
                    </div>             
                </div>             
            </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-mei-comercio"><img src="/Images/tegs-calculadoras/Tag-comerciante-mei.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-mei-servico"><img src="/Images/tegs-calculadoras/Tag-servico-mei.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-irpf-socio-medico"><img src="/Images/tegs-calculadoras/Tag-medico-proprietario-de-empresa-ou-firma-individual.png"/></Link></center>
                    </div>             
                </div>             
            </div>

        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-autonomo-transporte-passageiro"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-autonomo.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-autonomo-transporte-cargas"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-cargas-autonomo.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-irpf-mei-transporte-passageiro"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-passageiros-mei.png"/></Link></center>
                    </div>             
                </div>             
            </div>

        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-irpf-mei-transporte-cargas"><img src="/Images/tegs-calculadoras/Tag-motorista-transporte-cargas-mei.png"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="#"><img src="/Images/tegs-calculadoras/Tag-atualizando-calculadora.png"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="#"><img src="/Images/tegs-calculadoras/Tag-atualizando-calculadora.png"/></Link></center>
                    </div>
                </div>             
            </div>         

        
   </section>;
  }

export default DeclaracaoIRPF;