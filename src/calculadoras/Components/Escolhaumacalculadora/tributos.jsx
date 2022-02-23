import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Tributos(){
    return <section id="tributos">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Tributos</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tributos-tgs">
                        <center><a href="#pis-lucro-presumido"><img src="/Images/tegs-calculadoras/Tag-pis-presumido.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tributos-tgs">
                         <center><a href="#cofins-lucro-presumido"><img src="/Images/tegs-calculadoras/Tag-cofins-presumido.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tributos-tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        <div className="container">                              
            <div className="row">
            <   div className="col-lg-4 tributos-tgs">
                    <center><a href="#pis-lucro-real"><img src="/Images/tegs-calculadoras/Tag-pis-real.png"/></a></center>                                                    
                </div>
                <div className="col-lg-4 tributos-tgs">
                    <center><a href="#cofins-lucro-real"><img src="/Images/tegs-calculadoras/Tag-cofins-real.png"/></a></center>
                </div>
                <div className="col-lg-4 tributos-tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                                      
                </div>
            </div>             
        </div> 
   </section>;
  }

export default Tributos;