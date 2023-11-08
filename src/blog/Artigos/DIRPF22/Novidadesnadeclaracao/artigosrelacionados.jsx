import React from 'react';
import {Link} from 'react-router-dom';
import './novidadesnadeclaracaoirpf.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-novidades-na-declaracao-irpf">      
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
                                <h4 className="card-title">Documentos necessários para a Declaração de Imposto de Renda</h4>
                                <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                                <a href="/blog-documentosnecessarios-irpf" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                            </div>
                        </div>  
                    </div> 

                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF/Obrigatoriedade/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Descubra se você precisa fazer a declaração do Imposto de Renda</h4>
                            <p className="card-text">Fique ligado nas mudanças anuais na legislação fiscal para evitar problemas futuros com a Receita Federal e garantir a conformidade com a lei tributária.</p>
                            <a href="/blog-saiba-se-voce-esta-obrigado-a-apresentar-a-dirpf" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;