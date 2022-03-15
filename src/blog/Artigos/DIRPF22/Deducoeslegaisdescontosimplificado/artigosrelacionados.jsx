import React from 'react';
import {Link} from 'react-router-dom';
import './deducoeslegais-descontosimplificado.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-deducoes-legais-desonto-simplificado">      
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
                                <center><img src="/Images/DIRPF22/Documentosnecessarios/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                                <div className="card-body">
                                    <h4 className="card-title">Veja quais são os documentos necessários para a DIRPF 2022</h4>
                                    <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                                    <a href="/blog-documentosnecessarios-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                                </div>
                            </div>  
                        </div>           
                    <div className="col-lg-6">
                        <div className="card card-artigos">
                            <center><img src="/Images/Novidadesnadeclaracaoirpf22/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Confira as novidades na declaração do Imposto de Renda 2022</h4>
                                <p className="card-text">São várias mudanças interessantes, entre elas, a que chama mais atenção será o recebimento da restituição ou o pagamento do imposto por meio de Pix.</p>
                                <a href="/blog-novidades-na-declaracao-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;