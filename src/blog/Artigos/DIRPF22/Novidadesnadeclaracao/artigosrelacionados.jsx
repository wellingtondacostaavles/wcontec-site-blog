import React from 'react';
import {Link} from 'react-router-dom';
import './novidadesnadeclaracaoirpf22.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-novidades-na-declaracao-irpf-22">      
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
                            <center><img src="/Images/DIRPF22/Documentosnecessarios/capaprincipal.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Documentos necessários para a DIRPF 2022</h4>
                                <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                                <a href="/blog-documentosnecessarios-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>  
                
                    <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Normasparaemissao/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Normas para emissão e entrega do Comprovante de Rendimentos 2022</h4>
                            <p className="card-text">Foram estabelecidas normas sobre o comprovante de rendimentos pagos e de imposto sobre a renda retido na fonte a vigorar a partir de 01.01.2022.</p>
                            <a href="/blog-normas-para-emissao-e-entrega-do-comprovante-de-rendimentos" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;