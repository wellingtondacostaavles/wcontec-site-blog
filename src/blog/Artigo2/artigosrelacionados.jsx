import React from 'react';
import {Link} from 'react-router-dom';
import './artigo2.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados2">      
       <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Assuntos Relacionados</h1>         
                </div>
            </div> 
        </div>
         
         <div className="container">                
         <div className="row">            
                
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Eireli/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Empresa Individual de Responsabilidade Limitada (EIRELI)</h4>
                            <p className="card-text">Aqui o empresário tem a liberdade de escolher o modelo de tributação que melhor adapte a atividade e porte da empresa.</p>
                            <a href="/blog/eireli" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>   

                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/slu/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Sociedade Limitada Unipessoal (SLU)</h4>
                            <p className="card-text">Onde não é preciso ter sócios, não há exigência de valor mínimo para o Capital Social, e o patrimônio do empreendedor não se mistura com o da empresa.</p>
                            <a href="/blog/sociedadelimitadaunipessoal" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>   
 
            </div>  


            <div className="row">              
                    <div className="col-lg-6">
                        <div className="card card-artigos">
                            <center><img src="/Images/Ei/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Empresário Individual (EI)</h4>
                                <p className="card-text">Também conhecido como "firma individual", e diferente de MEI é ideal para quem quer exercer em nome próprio uma atividade empresarial, sem a necessidade de um sócio.</p>
                                <a href="/blog/empresarioindividual" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-6">
                        <div className="card card-artigos">
                            <center><img src="/Images/Diferecasform/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Diferenças entre MEI, EIRELI, SLU e EI</h4>
                                <p className="card-text">Apesar de parecer iguais, existem algumas diferenças que devemos ter cuidado na hora de escolher o melhor formato de empresa.</p>
                                <a href="/blog/diferencasmeieirelisluei" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>
                </div>        
        </div>   
       

    </section>;
  }

export default Artigosrelacionados;