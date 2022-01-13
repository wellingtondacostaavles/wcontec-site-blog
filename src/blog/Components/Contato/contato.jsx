import React from 'react';
import {Link} from 'react-router-dom';
import './contato.css';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="contato">    
        
        <div className="row text-center">
                <div className="titulo">
                    <h6>Parceiros</h6>
               </div>
            </div>

      <div className="container">        
            <div className="row">
              <div className="col-lg-12">
              <a href="/"><img src="/Images/Logo-WCONTEC.P.png" /></a>
             </div>
                     
            <div>   
                  <ul className="list-unstyled list-inline social text-center">
                      <li className="list-inline-item"><a href="https://t.me/+bLsp1DsfZOo2M2Ix" target="_blank"><i className="fa fa-telegram fa-2x"></i></a></li>
                      <li className="list-inline-item"><a href="https://instagram.com/wcontec?r=nametag" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
                      <li className="list-inline-item"><a href="mailto:contato@wcontec.com.br"><i className="fa fa-envelope fa-2x"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCAS5k1jRgeZqXSnd8W4Jfcg" target="_blank"><i className="fa fa-youtube fa-2x"></i></a></li>
                      <li className="list-inline-item"><a href="https://twitter.com/w_contec" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
                      <li className="list-inline-item"><a href="https://chat.whatsapp.com/Co4DkBgkhrr6XSDiRL3CBP" target="_blank"><i className="fa fa-whatsapp fa-2x"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="container">                              
              <div className="row">
                  <div className="titulo formtext">
                      <p>©2017 WCONT SERVIÇOS CONTÁBEIS - 30.394.935/0001-34 AV. BARÃO DE VERA CRUZ, 188 D, CRUZ DE REBOUÇAS, IGARASSU - PE, CEP. 53.625-015. EMPRESA DE CONTABILIDADE EM PARCERIA COM A OSAYK PLATAFORMA DE NEGÓCIOS E TECNOLOGIA LTDA - 22.296.308/0001-69. RUA PAULO ASSIS RIBEIRO, 103, BARRA DA TIJUCA, RIO DE JANEIRO, RJ, CEP. 22621-210. OFERECE O DIREITO DE USO VIA WEB (INTERNET) DE PLATAFORMA TECNOLÓGICA FINANCEIRA.</p>
                </div>
              </div>       
            </div>               
      </div>
    </section>;
  }

export default Footer;