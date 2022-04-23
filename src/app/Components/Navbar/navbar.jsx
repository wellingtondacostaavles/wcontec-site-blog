import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {AuthContext} from '../../Context/auth';

function NavbarApp(){

    const {setLogado} = useContext(AuthContext);

    function Logout(){
      setLogado(false);
      localStorage.removeItem("logado");
    }

    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
            
        <a className="navbar-brand" href="#">
          <img src="/Images/logo-wcontec-calculator.png" alt="" height="54" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/app/calculadoras-pro">Início</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/app/calculadoras-pro#escolha-uma-calculadora">Escolha uma Calculadoras</a>
            </li>                                          
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/blog">Blog</a>
            </li>                              
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/app/calculadoras-pro#contato">Contato</a>
            </li>
            <li className="nav-item">
              <a href="/app" onClick={Logout} className="nav-link logout" aria-current="page" >Sair</a>
            </li>
            </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default NavbarApp;