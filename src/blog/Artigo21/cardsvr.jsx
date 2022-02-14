import React from 'react';
import {Link} from 'react-router-dom';


function Cardsvr(){
    return <section id="card-svr">      
        
        <div className="container text-center">
                    <h3 className="titulo">Acesse o Sistema Valores a Receber</h3>
                    <p>Clique no botão abaixo e tenha acesso a o único site para consulta e solicitação desses valores (valoresareceber.bcb.gov.br).</p>
                    

                    <div className="row"> 
                        <div className="col-sm-4"></div>
                             <div className="col-sm-4">
                                <div className="row">
                                <form
                                    action="https://formsubmit.co/contador.wellington@gmail.com"
                                    method="POST"
                                    className="form"                          
                          >
                                    <label className="label" for="email">Digite seu e-mail</label>
                                    <input className="form-control" type="email" name="email" id="email" required />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input
                                    type="hidden"
                                    name="_next"
                                    value="https://valoresareceber.bcb.gov.br/publico" target="_blank" 
                                    />    
                                    <div>
                                        <button className="btn btn-primary btn-card-svr" type="submit">Sistema Valores a Receber</button>
                                    </div>
                                </form>
                                    </div>
                                        <div className="col-sm-4"></div>
                                    </div>
                                </div>
                     </div>  
    </section>;
  }

export default Cardsvr;