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
                    <h5>A Wcontec disponibiliza aos seus parceiros um serviço gratuito que se propõe a auxiliar em cálculos diversos. Por exemplo, trabalhistas, tributos, declaração de imposto de renda pessoa física e muito mais.</h5>
                    <a href="https://bit.ly/3vaLhbt" className="btn btn-success btn-lg btn-card-calculadoras">Acesse as calculadoras</a>
                </div>                            
            </div>
            <div className="row afiliado">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 feature-box">
                    <i className="icon fas fa-money-bill-wave fa-5x"></i>
                    <h3>Ganhe dinheiro com a Wcontec</h3>
                    <p>Torne-se parceiro afiliado, indique nossa plataforma de gestão financeira com contabilidade online e receba um PIX de até R$ 500,00 por cada indicação.</p>
                    <a href="/parceiro-afiliado" className="btn btn-outline-primary btn-lg btn-card-afiliado">Saiba mais</a>
                </div>
                <div className="col-lg-2"></div>
            </div>    
        </div>  
    </section>;
  }

export default Cardcalculadoras;