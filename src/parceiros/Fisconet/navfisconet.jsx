import React from 'react';
import './fisconet.css';

function Navfisconet(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">

    <div className="container">
            
        <a className="navbar-brand-expand-lg" href="#">
          <img src="/Images/Parceiros/Fisconet.png" alt="" height="72 " />
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
              <a className="nav-link" aria-current="page" href="#produtos-fisconet">Cursos</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contato-fisconet">Contato</a>
            </li>         
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Navfisconet;