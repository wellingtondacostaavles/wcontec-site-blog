import React from 'react';
import NavbarContactenos from './Components/navbar';
import './contacte-nos.css';

function Siganos(){
    return <div>
    <NavbarContactenos/>                 
      
    <section id="siga-nos">
      
    <div className="container">        
            <div className="row">
                <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                    <img src="/Images/Logo-WCONTEC.P.png"/>
                  </div>
                  <div className="col-lg-4"></div>
                <div className="siga">   
                    <ul className="list-unstyled list-inline social text-center">
                      <li className="list-inline-item siga"><a href="https://api.whatsapp.com/send?phone=5581996584830" target="_blank"><i className="fa fa-whatsapp fa-4x"></i></a></li>
                      <li className="list-inline-item siga"><a href="https://t.me/+bLsp1DsfZOo2M2Ix" target="_blank"><i className="fa fa-telegram fa-4x"></i></a></li>
                      <li className="list-inline-item siga"><a href="https://instagram.com/wcontec?r=nametag" target="_blank"><i className="fa fa-instagram fa-4x"></i></a></li>
                    </ul>
                </div>
                <div className="siga2">   
                    <ul className="list-unstyled list-inline social text-center">
                      <li className="list-inline-item siga2"><a href="mailto:contato@wcontec.com.br"><i className="fa fa-envelope fa-4x"></i></a></li>
                      <li className="list-inline-item siga2"><a href="https://www.facebook.com/people/Wcont-Servi%C3%A7os-Cont%C3%A1beis/100072384950030/?sk=about" target="_blank"><i className="fa fa-facebook fa-4x"></i></a></li>
                      <li className="list-inline-item siga2"><a href="https://twitter.com/w_contec" target="_blank"><i className="fa fa-twitter fa-4x"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="container">                              
              <div className="row">
                  <div className="titulo formtext-siga-nos">
                      <p>©2017 WCONT SERVIÇOS CONTÁBEIS - 30.394.935/0001-34 AV. BARÃO DE VERA CRUZ, 188 D, CRUZ DE REBOUÇAS, IGARASSU - PE, CEP. 53.625-015. EMPRESA DE CONTABILIDADE EM PARCERIA COM A OSAYK PLATAFORMA DE NEGÓCIOS E TECNOLOGIA LTDA - 22.296.308/0001-69. RUA PAULO ASSIS RIBEIRO, 103, BARRA DA TIJUCA, RIO DE JANEIRO, RJ, CEP. 22621-210. OFERECE O DIREITO DE USO VIA WEB (INTERNET) DE PLATAFORMA TECNOLÓGICA FINANCEIRA.</p>
                </div>
              </div>       
            </div>               
      </div>

    </section>            
  </div> 
  }

export default Siganos;