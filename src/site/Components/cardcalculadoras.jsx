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
                    <h5>A Wcontec oferece a seus parceiros um serviço gratuito de cálculos diversos, visando auxiliar em questões trabalhistas, tributárias, declaração de imposto de renda pessoa física e muito mais. Acreditamos que o conhecimento deve ser compartilhado para que nossos parceiros possam tomar decisões informadas e atingir suas metas financeiras. Conte com a Wcontec para ajudá-lo a alcançar o sucesso.</h5>
                    <a href="https://bit.ly/3vaLhbt" className="btn btn-success btn-lg btn-card-calculadoras">Acesse as calculadoras</a>
                </div>                            
            </div>    
        </div>  
    </section>;
  }

export default Cardcalculadoras;