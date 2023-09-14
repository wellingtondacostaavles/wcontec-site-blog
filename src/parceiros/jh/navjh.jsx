import React from 'react';
import './jh.css';

function Navjh(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">

    <div className="container">
            
        <a className="navbar-brand-expand-lg" href="#">
          <img src="/Images/Parceiros/sites/Jh/logo-jh.png" alt="" height="72 " />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Início</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#produtos-jh">Produtos</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contato-jh">Contato</a>
            </li>         
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Navjh;