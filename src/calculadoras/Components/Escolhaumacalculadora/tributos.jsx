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
                    <div className="col-lg-4 tgs">
                        <center><a href="#pis"><img src="/Images/tegs-calculadoras/Tag-pis.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#cofins"><img src="/Images/tegs-calculadoras/Tag-cofins.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        <div className="container">                              
            <div className="row">
            <   div className="col-lg-4 tgs">
                    <center><Link to="/irpj-lucro-presumido"><img src="/Images/tegs-calculadoras/Tag-irpj-presumido.png"/></Link></center>
                </div>
                <div className="col-lg-4 tgs">
                    <center><Link to="/csll-lucro-presumido"><img src="/Images/tegs-calculadoras/Tag-csll-presumido.png"/></Link></center>
                </div>
                <div className="col-lg-4 tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                                      
                </div>
            </div>             
        </div> 
   </section>;
  }

export default Tributos;