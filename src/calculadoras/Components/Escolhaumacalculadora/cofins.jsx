import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Cofins(){
    return <section id="cofins">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Contribuição para o Financiamento da Seguridade Social</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-cofins-presumido"><img src="/Images/tegs-calculadoras/Tag-cofins-presumido.png"/></Link></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-cofins-lucro-real"><img src="/Images/tegs-calculadoras/Tag-cofins-real.png"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-cofins-corretora"><img src="/Images/tegs-calculadoras/Tag-cofins-corretoras.png"/></Link></center>
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Cofins;