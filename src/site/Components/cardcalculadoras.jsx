import React from 'react';
import {Link} from 'react-router-dom';


function Cardcalculadoras(){
    return <section id="card-calculadoras">      
         
        <div className="container">
        <div className="row text-center"> 
                    <div className="titulo">
                        <h1>Calculadoras</h1>                   
                    </div>    
                </div>
            <div className="row boneco-card-calculadoras">    
                <div className="col-lg-6">
                    <img src="Images/calculando.png" />
                </div>
                <div className="col-lg-6">  
                    <h5>A Wcontec disponibiliza aos seus parceiros um serviço gratuito que se propõe a auxiliar em cálculos diversos.</h5>
                    <a href="https://bit.ly/3vaLhbt" className="btn btn-success btn-lg btn-card-calculadoras">Acesse as calculadoras</a>
                </div>                            
            </div>
        </div>  
    </section>;
  }

export default Cardcalculadoras;