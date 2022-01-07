import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="contato">    
        
        <div className="row text-center">
                <div className="titulo">
                    <h5>Parceiros</h5>
               </div>
            </div>

      <div className="container">        
            <div className="row">
              <div className="col-lg-12">
                 <img src="/Images/Logo-WCONTEC.P.png"/>
             </div>
            </div>
                     
            <div>   
                <ul className="list-unstyled list-inline social text-center">
                    <li className="list-inline-item"><a href="https://t.me/wcontec"><i className="fa fa-telegram fa-1x"></i></a></li>
                    <li className="list-inline-item"><a href="https://instagram.com/wcontec?r=nametag"><i className="fa fa-instagram fa-1x"></i></a></li>
                    <li className="list-inline-item"><a href="mailto:contato@wcontec.com.br" target="_blank"><i className="fa fa-envelope fa-1x"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.youtube.com/c/WCONTEC"><i className="fa fa-youtube fa-1x"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/w_contec"><i className="fa fa-twitter fa-1x"></i></a></li>
                    <li className="list-inline-item"><a href="https://api.whatsapp.com/send?phone=5581996584830"><i className="fa fa-whatsapp fa-1x"></i></a></li>
                    <li className="list-inline-item"><a href="https://api.whatsapp.com/send?phone=5581996584830"><i className="fa fa-localizacao fa-1x"></i></a></li>
                </ul>
            </div>           

        </div>
      
      <p>Av. Barão de Vera Cruz, 188-D - Cruz de Rebouças, Igarassu - PE</p>
    </section>;
  }

export default Footer;