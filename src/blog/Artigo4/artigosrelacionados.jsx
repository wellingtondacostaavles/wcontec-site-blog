import React from 'react';
import {Link} from 'react-router-dom';
import './artigo4.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados4">      
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
                        <center><img src="/Images/Simplesnacional/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Simples Nacional</h4>
                            <p className="card-text">O Simples Nacional é um regime tributário exclusivo para micro e pequenas empresas, criado em 2007  ele e consegue unir vários tributos em um só.</p>
                            <a href="/blog/simplesnacional" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                            
                    
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Autonomo/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Autônomo</h4>
                            <p className="card-text">O profissional que trabalha por conta própria e desempenha uma atividade remunerada sem vínculo empregatício, sua remuneração se dá por um contrato de prestação de serviços.</p>
                            <a href="/blog/autonomo" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>   
       

    </section>;
  }

export default Artigosrelacionados;