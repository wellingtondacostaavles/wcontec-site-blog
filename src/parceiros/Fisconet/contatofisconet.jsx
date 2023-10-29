import React from 'react';

function Contatofisconet(){
    return <section id="contato-fisconet">    
          <div className="container">        
            <div className="row">
                <div>
                    <p className="cnpj-fisconet">Fisconet</p>
                    <p className="endereco-fisconet">Pres. Franklin Roosevelt, 1554 - Floresta, 90.230-002 - Porto Alegre - RS</p>
                </div>
                <div>   
                  <ul className="list-unstyled list-inline social">
                      <li className="list-inline-item"><a href="https://api.whatsapp.com/send?phone=5551994775506" target="_blank"><i className="fa fa-whatsapp fa-2x icon-color"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.facebook.com/fisconetoficial" target="_blank"><i className="fa fa-facebook fa-2x icon-color"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.youtube.com/@fisconetoficial" target="_blank"><i className="fa fa-youtube fa-2x icon-color"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.instagram.com/fisconetoficial/" target="_blank"><i className="fa fa-instagram fa-2x icon-color"></i></a></li>
                    </ul>
              </div>
            </div>
        </div>
     </section>;
  }

export default Contatofisconet;