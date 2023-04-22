import React from 'react';
import {Link} from 'react-router-dom';
import './artigo16.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados16">      
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
                                <center><img src="/Images/DIRPF/Documentosnecessarios/capaprincipal.png" className="card-img-top" alt="..."/></center>
                                <div className="card-body">
                                    <h4 className="card-title">Documentos necessários para a declaração do IR</h4>
                                    <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                                    <a href="/blog-documentosnecessarios-irpf" className="btn btn-primary btn-artigos">Ler Post</a>
                                </div>
                            </div>  
                        </div>  
            <div className="col-lg-6">
            <div className="card card-artigos">
                <center><img src="/Images/Novidadesnadeclaracaoirpf22/capaprincipal.png" className="card-img-top" alt="..."/></center>
                <div className="card-body">
                    <h4 className="card-title">Confira as novidades na declaração do Imposto de Renda</h4>
                    <p className="card-text">Atenção para o prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2023 que começou no dia 15 de março, são várias mudanças.</p>
                    <a href="/blog-novidades-na-declaracao-irpf" className="btn btn-primary btn-artigos">Ler Post</a>
                </div>
            </div>  
        </div>        
                        
            </div>    
        </div>          
       </section>;
  }

export default Artigosrelacionados;