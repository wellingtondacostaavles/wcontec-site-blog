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
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-cofins-presumido.png" className="zoom-img"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-cofins-real.png" className="zoom-img"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-cofins-corretoras.png" className="zoom-img"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Cofins;