import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Construcaocivil(){
    return <section id="construcao-civil">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Construção civil</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-metro-cubico.png"/></a></center>                                   
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>   
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>                                    
                    </div>
                </div>             
            </div> 

        
   </section>;
  }

export default Construcaocivil;