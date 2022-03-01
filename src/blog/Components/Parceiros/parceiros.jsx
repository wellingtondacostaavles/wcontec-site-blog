import React from 'react';
import {Link} from 'react-router-dom';
import './parceiros.css';

function Parceiros(){
    return <section id="parceiros">      
     <div className="container">        
        <div className="row coluna1">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">
                <a href="https://api.whatsapp.com/send?phone=5581997780156" target="_blank"><img src="Images/Parceiros/Diniz-contabilidade.png"/></a>
            </div>
            <div class="col">
                <a href="https://mpago.li/1Ts8gW7" target="_blank"><img src="Images/Parceiros/Mercado-pago.png"/></a>
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div className="row coluna2">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">
                <a href="https://api.whatsapp.com/send?phone=5581996584830" target="_blank"><img src="Images/Parceiros/Certificado.digital.png"/></a>
            </div>
            <div class="col">
                <a href="https://api.whatsapp.com/send?phone=5581998753986" target="_blank"><img src="Images/Parceiros/OGS.png"/></a>
            </div>
            <div class="col">
                <a href="https://jhmateriaisparaconstrucao.com/" target="_blank"><img src="Images/Parceiros/JH.png"/></a>
            </div>
            <div class="col">
            <a href="https://api.whatsapp.com/send?phone=5581996584830" target="_blank"><img src="Images/Parceiros/Torne-se-parceiro.png"/></a>
            </div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div className="row">
                <div className="titulo formtext">
                    <h6>Parceiros</h6>
               </div>
        </div>  
    </div>    
    </section>;
  }

export default Parceiros;