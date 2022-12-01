import React from 'react';
import {Link} from 'react-router-dom';


function Informativos(){
    return <section id="informativo">      
         
        <div className="container">
            <div className="row text-center"> 
                    <div className="titulo">
                        <h1>Informativo empresarial</h1>                   
                    </div>    
                </div>
            <div className="row text-center">    
                <div>
                    <img src="Images/Informativos/Dezembro.png" />
                </div>
                </div>
            <div className="row text-center">    
                <div className="col-lg-4"></div>
                <div className="col-lg-4">  
                    <a href="https://bit.ly/3OPnZ37" className="btn btn-outline-danger btn-lg btn-informativo"><i className="far fa-file-pdf"></i> Baixar PDF</a>
                </div>
                <div className="col-lg-4"></div>                           
               </div>
            </div>     
    </section>;
  }

export default Informativos;