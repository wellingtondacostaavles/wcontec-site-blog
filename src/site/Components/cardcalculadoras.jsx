import React from 'react';
import {Link} from 'react-router-dom';


function Cardcalculadoras(){
    return <section id="card-calculadoras">      
         
        <div className="container">
            <div className="card text-center">
                <div className="card-body">
                    <h3 className="card-title">Acesse as Calculadoras</h3>
                    <p className="card-text">A Wcontec disponibiliza aos seus parceiros um serviço gratuito que se propõe a auxiliar em cálculos diversos.</p>
                    <a href="/calculadoras" className="btn btn-primary btn-card-calculadoras">Calculadoras</a>
                </div>
            </div> 
        </div>  
    </section>;
  }

export default Cardcalculadoras;