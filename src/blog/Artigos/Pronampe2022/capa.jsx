import React from 'react';
import {Link} from 'react-router-dom';
import './pronampe2022.css';

function Capa(){
    return <section id="capa-pronampe-2022">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Pronampe2022/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3><span className="terceiro-h3">Pronampe 2022</span><span className="terceiro-h3"></span> saiba como ter acesso ao benefício e veja as taxas</h3>                
                    <h6 className="segundo-h6">Conheça a linha de crédito do Programa Nacional de Apoio às Microempresas e Empresas de Pequeno Porte para auxiliar no desenvolvimento e fortalecimento do seu negócio e saiba como solicitar.</h6>
                    <a href="#pronampe-2022" className="btn btn-success btn-lg btn-capa-pronampe-2022 zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-pronampe-2022 zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;