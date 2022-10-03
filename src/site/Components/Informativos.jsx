import React from 'react';
import {Link} from 'react-router-dom';


function Informativos(){
    return <section id="informativos">      
         
        <div className="container">
            <div className="row text-center"> 
                    <div className="titulo">
                        <h1>Informativo empresarial</h1>                   
                    </div>    
                </div>
            <div className="row text-center">    
                <div>
                    <img src="Images/Informativos/Outubro.png" />
                </div>
                </div>
            <div className="row text-center">    
                <div className="col-lg-4"></div>
                <div className="col-lg-4">  
                    <a href="https://drive.google.com/u/0/uc?id=1ibu8g27zNZdYk4DJTxdLwy0xU68xHNSj&export=download" className="btn btn-outline-danger btn-lg btn-informativos"><i className="far fa-file-pdf"></i> Baixar PDF</a>
                </div>
                <div className="col-lg-4"></div>                           
               </div>
            </div>     
    </section>;
  }

export default Informativos;