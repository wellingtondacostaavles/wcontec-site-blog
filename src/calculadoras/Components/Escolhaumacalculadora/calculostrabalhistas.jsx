import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Calculostrabalhistas(){
    return <section id="calculos-trabalhistas">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Cálculos trabalhistas</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-custo-mensal-com-funcionario-optante-simples-nacional"><img src="/Images/tegs-calculadoras/Tag-custo-com-funcionário-optante-simples.png" className="zoom-img"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-custo-mensal-com-funcionario-nao-optante-simples-nacional"><img src="/Images/tegs-calculadoras/Tag-custo-com-funcionário-nao-optante-simples.png" className="zoom-img"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-atualizando-calculadora.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Calculostrabalhistas;