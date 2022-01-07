import React from 'react';
import {Link} from 'react-router-dom';
import './artigo20.css';

function Capa(){
    return <section id="capa-senadoaprovatributacaomenorparacaminhoneiros">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Senadoaprovatributacaomenorparacaminhoneiros/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Senado aprova<span className="terceiro-h3"> tributação menor para caminhoneiros</span></h3>                
                    <h6>O Senado aprovou um projeto de lei que muda a tributação de caminhoneiros autônomos inscritos como microempreendedores individuais, agora eles poderão faturar até R$ 251,6 mil anuais e pagar 12% para a previdência social sobre o salário mínimo.</h6>
                    <a href="#senadoaprovatributacaomenorparacaminhoneiros" className="btn btn-success btn-lg btn-capa-senadoaprovatributacaomenorparacaminhoneiros">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-senadoaprovatributacaomenorparacaminhoneiros">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;