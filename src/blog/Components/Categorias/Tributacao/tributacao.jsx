import React from 'react';
import './tributacao.css';

function Tributacao(){
    return <section id="tributacao">      
         <div className="container">                
            <div className="row text-center">
                <h1>Tributação</h1>   
            </div>
            <div className="row">
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Senadoaprovatributacaomenorparacaminhoneiros/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Caminhoneiros com uma tributação menor</h4>
                            <p className="card-text">O Senado aprovou um projeto de lei que muda a tributação de caminhoneiros autônomos inscritos como microempreendedores individuais.</p>
                            <a href="/blog-senado-aprova-tributacao-menor-para-caminhoneiros" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Naosepodeculparcargatributaria/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Não se pode culpar a carga tributária</h4>
                            <p className="card-text">Impostos não quebram empresas, a carga tributária sem duvida é um fator que gera dificuldades a empresários. Gestão empresarial é bem mais que simplesmente...</p>
                            <a href="/blog-nao-se-pode-culpar-a-cargatributaria" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Simplesnacional/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Entenda o Simples Nacional</h4>
                            <p className="card-text">O Simples Nacional é um regime tributário exclusivo para micro e pequenas empresas, criado em 2007  ele e consegue unir vários tributos em um só.</p>
                            <a href="/blog-simples-nacional" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>            
            </div>  
        </div>
                       
    </section>;
  }

export default Tributacao;