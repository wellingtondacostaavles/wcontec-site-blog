import React from 'react';
import './tecnologiadainformacao.css';

function Tecnologiadainformacao(){
    return <section id="tecnologia-da-informacao">      
         <div className="container">                
            <div className="row text-center">
                <h1>Tecnologia da informacao</h1>   
            </div>
            <div className="row">
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Brasileirospreferemcomprasonline/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">71% dos brasileiros optar comprar online</h4>
                            <p className="card-text">Uma pesquisa realizada pela ConQuist Consultoria mostrou que a pandemia mudou a maneira como os consumidores fazem compras ou contratam um serviço, e a preferência pela internet vem ganhado força.</p>
                            <a href="/blog-brasileiros-preferem-compras-online" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Notasfiscais/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Emitir Nota Fiscal, quem tem essa obrigação?</h4>
                            <p className="card-text">Todo empreendedor deve emitir a nota fiscal ao fazer qualquer operação negocial. A obrigação vale para o microempreendedor (ME), empresas de pequeno porte (EPPs) e para os microempreendedores individuais (MEIs).</p>
                            <a href="/blog-obrigatoriedade-de-emitir-nota-fiscal#obrigatoriedade-de-emitir-nota-fiscal" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Microempreendedor/Notasparaomei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Emissão de nota fiscal para MEI</h4>
                            <p className="card-text">O microempreendedor individual está dispensado de emitir nota fiscal para pessoa física, contudo, quando a venda ou serviço for realizado para uma empresa, será necessário emitir a nota fiscal eletrônica conheça os tipos notas permitidas.</p>
                            <a href="/blog-tipos-de-notas-permitidas-para-o-mei" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>            
            </div>  
        </div>
                       
    </section>;
  }

export default Tecnologiadainformacao;