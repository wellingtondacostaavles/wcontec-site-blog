import React from 'react';
import './tecnologiadainformacao.css';

function Tecnologiadainformacao(){
    return <section id="tecnologia-da-informacao">      
         <div className="container">                
            <div className="row">
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Brasileirospreferemcomprasonline/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">71% dos brasileiros optar comprar online</h4>
                            <p className="card-text">Uma pesquisa realizada pela ConQuist Consultoria mostrou que a pandemia mudou a maneira como os consumidores fazem compras ou contratam um serviço, e a preferência pela internet vem ganhado força entre os brasileiros.</p>
                            <a href="/blog-brasileiros-preferem-compras-online" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Notasfiscais/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Veja se você está obrigado a Emitir NF</h4>
                            <p className="card-text">Todo empreendedor deve emitir a nota fiscal ao fazer qualquer operação negocial. A obrigação vale para o microempreendedor (ME), empresas de pequeno porte (EPPs) e para os microempreendedores individuais (MEIs).</p>
                            <a href="/blog-obrigatoriedade-de-emitir-nota-fiscal#obrigatoriedade-de-emitir-nota-fiscal" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row">    
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Microempreendedor/Notasparaomei/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Emissão de nota fiscal para microempreendedor individual</h4>
                            <p className="card-text">O MEI está dispensado de emitir NF para pessoa física, mas quando o cliente for uma empresa, será necessário emitir a nota fiscal eletrônica veja os tipos notas permitidas.</p>
                            <a href="/blog-tipos-de-notas-permitidas-para-o-mei" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6">
                <div className="card card-artigos">
                        <center><img src="/Images/Abrirempresa/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Como a tecnologia ajuda no processo de abertura de empresa</h4>
                            <p className="card-text">Saiba o que é preciso fazer para abrir sua microempresa, comerçando com o registro na Junta Comercial do estado ou no Cartório de Registro de Pessoa Jurídica.</p>
                            <a href="/blog-abrir-empresa" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>                      
                </div>            
            </div>  
        </div>
                       
    </section>;
  }

export default Tecnologiadainformacao;