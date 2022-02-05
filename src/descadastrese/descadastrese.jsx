import React from 'react';
import './descadastrese.css';

function Descadastrese(){
    return <div>
                   
      
    <section id="descadastrese">
      
    <div className="container">                
            <div className="row">
                <div className="col-lg-6">
                    <center><img src="/Images/Descadrastre-se/boneco-deprimido.jpg" alt="..."/></center>  
                </div>  
                            
                    
                <div className="col-lg-6">
                  <div className="row text-center">
                    <div className="titulo">
                        <h4>A despedida nos traz tristeza, mas respeitamos a sua escolha. Desejamos saber o que motivou a tomar essa decisão:</h4>
                    </div>
                </div>
                    <div className="wrapper">
                        <div className="form-group">
                            <input className="radio" name="theradio" id="radio1" type="radio" checked></input>
                            <label for="radio1">Apenas não quero mais receber</label>
                        </div>
                        <div className="form-group">
                            <input className="radio" name="theradio" id="radio2" type="radio" checked></input>
                            <label for="radio2">Conteúdo irrelevante para mim</label>
                        </div>
                        <div className="form-group">
                            <input className="radio" name="theradio" id="radio3" type="radio" checked></input>
                            <label for="radio3">Está me perturbando</label>
                        </div>
                        <div className="form-group">
                            <input className="radio" name="theradio" id="radio4" type="radio" checked></input>
                            <label for="radio4">Eu não autorizei o envio dos e-mails</label>
                        </div>
                        <div className="form-group">
                            <input className="radio" name="theradio" id="radio5" type="radio" checked></input>
                            <label for="radio5">Frequência de e-mail é muito alta</label>
                        </div>
                        <div className="form-group">
                            <input className="radio" name="theradio" id="radio6" type="radio" checked></input>
                            <label for="radio6">Outros</label>
                        </div>                         
                      </div>

                      <div className="container">                
                        <div className="row">  
                          <form
                            action="https://formsubmit.co/wcontec.informa@gmail.com"
                            method="POST"
                            className="form"
                          >
                            <label for="email">Digite seu e-mail</label>
                            <input type="email" name="email" id="email" required />
                            <input type="hidden" name="_captcha" value="false" />
                            <input
                              type="hidden"
                              name="_next"
                              value="https://www.wcontec.com.br/descadastramento-realizado-com-sucesso"
                            />
                            <div>
                            <button className="btn btn-success btn-lg btn-descadrastre-se" type="submit">Enviar</button>
                            <a href="/" className="btn btn-outline-primary btn-lg btn-descadrastre-se" type="submit">Área do Cliente</a>
                            </div>
                            </form>  
                          </div> 
                        </div>              
                    </div>  
                </div>
            </div>

    </section>            
  </div> 
  }

export default Descadastrese;