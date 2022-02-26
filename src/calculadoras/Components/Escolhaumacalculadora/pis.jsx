import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Pis(){
    return <section id="pis">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Programa de Integração Social</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 calculos-trabalhistas-tgs">
                        <center><a href="#pis-lucro-presumido"><img src="/Images/tegs-calculadoras/Tag-pis-presumido.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 calculos-trabalhistas-tgs">
                         <center><a href="#pis-lucro-real"><img src="/Images/tegs-calculadoras/Tag-pis-real.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 calculos-trabalhistas-tgs">
                        <center><a href="#pis-corretora"><img src="/Images/tegs-calculadoras/Tag-pis-corretoras.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Pis;