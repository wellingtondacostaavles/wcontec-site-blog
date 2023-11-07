import React from 'react';
import {Link} from 'react-router-dom';
import './escolhaumacalculadora.css';

function Escolhaumacalculadora(){
    return <section id="escolha-uma-calculadora">      
        <div className="container">                              
            <div className="row">
                <div className="titulo text-center">
                    <h1>Escolha uma calculadora</h1>
                </div>
            </div>
        </div>               
                   
        <div className="container">                              
                <div className="row">
                    <div className="col-lg-4 tgs">
                        <center><a href="#calculos-trabalhistas"><img src="/Images/tegs-calculadoras/Tag-calculos-trabalhistas.png" className="zoom-img"/></a></center>
                    </div>
                    <div className="col-lg-4 tgs">
                         <center><a href="#declaracao-IRPF"><img src="/Images/tegs-calculadoras/Tag-DIRPF.png" className="zoom-img"/></a></center>
                    </div>             
                    <div className="col-lg-4 tgs">
                        <center><a href="#tributos"><img src="/Images/tegs-calculadoras/Tag-tributos.png" className="zoom-img"/></a></center>
                    </div>
                </div>             
            </div> 

        <div className="container">                              
            <div className="row">
            <   div className="col-lg-4 tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>
                </div>
                <div className="col-lg-4 tgs">
                    <center><a href="#construcao-civil"><img src="/Images/tegs-calculadoras/Tag-construcao-civil.png" className="zoom-img"/></a></center>
                </div>
                <div className="col-lg-4 tgs">
                    <center><a href="#"><img src="/Images/tegs-calculadoras/Tag-em-branco.png"/></a></center>
                </div>
            </div>             
        </div> 
   </section>;
  }

export default Escolhaumacalculadora;