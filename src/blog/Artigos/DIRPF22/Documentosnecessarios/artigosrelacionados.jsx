import React from 'react';
import {Link} from 'react-router-dom';
import './documentosnecessarios.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-documentos-necessarios">      
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
                            <center><img src="/Images/Novidadesnadeclaracaoirpf22/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Confira as novidades na declaração do Imposto de Renda 2022</h4>
                                <p className="card-text">São várias mudanças, e a que chama mais atenção será o recebimento da restituição ou o pagamento do imposto por meio de Pix, basta a cheve ser o CPF.</p>
                                <a href="/blog-novidades-na-declaracao-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>  
                
                    <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF22/Deducoeslegaisoudescontosimplificado/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Deduções legais ou desconto simplificado, saiba qual escolher</h4>
                            <p className="card-text">Vai depender do total de despesas dedutíveis que você tem em relação à renda. Daí você pode avaliar se é mais vantajoso optar por deduções legais ou desconto simplificado.</p>
                            <a href="/blog-deducoes-legais-desconto-simplificado-irpf-22#" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;