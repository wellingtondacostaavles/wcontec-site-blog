import React from 'react';
import {Link} from 'react-router-dom';
import './cardareadocliente.css';

function Cardareadocliente(){
    return <section id="card-areadocliente">      
         
        <div className="container">
            <div className="card text-center">
                <div className="card-body">
                    <h3 className="card-title">Acesse a Área do Cliente</h3>
                    <p className="card-text">Encontre soluções para a Gestão Empresarial</p>
                    <a href="/" className="btn btn-primary btn-card-cliente">Área do Cliente</a>
                </div>
            </div> 
        </div>  
    </section>;
  }

export default Cardareadocliente;