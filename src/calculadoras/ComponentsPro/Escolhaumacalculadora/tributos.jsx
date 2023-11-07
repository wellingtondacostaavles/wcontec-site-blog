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
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-pis.png" className="zoom-img"/></a></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-cofins.png" className="zoom-img"/></a></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-IRPF-desconto-simplificado.png" className="zoom-img"/></a></center>
                    </div>
                </div>             
            </div> 

        <div className="container">                              
            <div className="row">
            <   div className="col-lg-4 tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-irpj-presumido.png" className="zoom-img"/></a></center>
                </div>
                <div className="col-lg-4 tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-csll-presumido.png" className="zoom-img"/></a></center>
                </div>
                <div className="col-lg-4 tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-IRPF-deducoes-legais.png" className="zoom-img"/></a></center>
                </div>
            </div>             
        </div> 
   </section>;
  }

export default Tributos;