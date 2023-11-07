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
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-pis-presumido.png" className="zoom-img"/></a></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-pis-real.png" className="zoom-img"/></a></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><Link to="/app/calculadoras-pro-pis-corretora-home"><img src="/Images/tegs-calculadoras/Tag-pis-corretoras.png" className="zoom-img"/></Link></center>
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Pis;