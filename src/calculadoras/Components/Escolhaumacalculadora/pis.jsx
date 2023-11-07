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
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-pis-presumido"><img src="/Images/tegs-calculadoras/Tag-pis-presumido.png" className="zoom-img"/></Link></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><Link to="/calculadoras-pis-lucro-real"><img src="/Images/tegs-calculadoras/Tag-pis-real.png" className="zoom-img"/></Link></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="/calculadoras-pis-corretora"><img src="/Images/tegs-calculadoras/Tag-pis-corretoras.png" className="zoom-img"/></Link></center>
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Pis;