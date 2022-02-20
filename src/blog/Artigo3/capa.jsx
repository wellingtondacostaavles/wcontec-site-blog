import React from 'react';
import {Link} from 'react-router-dom';
import './artigo3.css';

function Capa(){
    return <section id="capa-autonomo">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Autonomo/capaprincipal.png" alt="autonomo" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Autônomo</h3>   
                    <h3><span className="terceiro-h3">Conhecido como trabalhador autônomo</span></h3>               
                    <h6>É o profissional que trabalha por conta própria e desempenha uma atividade remunerada sem vínculo empregatício.</h6>
                    <h6>O autônomo é a pessoa física que possui a sua própria atividade econômica com maior independência financeira, não recebe um salário fixo, mas sim uma remuneração específica e previamente estabelecida por um contrato de prestação de serviços de âmbito temporário...</h6>
                    <a href="#autonomo" className="btn btn-success btn-lg btn-capa-autonomo">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-autonomo">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;