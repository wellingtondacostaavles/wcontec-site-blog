import React from 'react';
import {Link} from 'react-router-dom';
import './artigos.css';

function Artigos(){
    return <section id="artigos">      
         
         <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Veja tambem</h1>         
                </div>
            </div> 
        </div>
         
         <div className="container">                
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Senadoaprovatributacaomenorparacaminhoneiros/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Senado aprova tributação menor para caminhoneiros</h4>
                            <p className="card-text">O Senado aprovou um projeto de lei que muda a tributação de caminhoneiros autônomos inscritos como microempreendedores individuais.</p>
                            <a href="/blog/senado-aprova-tributacao-menor-para-caminhoneiros" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                            
                    
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Transicaodooperacional/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Como fazer a transição do operacional para o empreendedorismo?</h4>
                            <p className="card-text">Somos focados totalmente no operacional e não conseguimos crescer porque a dificuldade de empreender no segmento que atuamos acaba nos barrando.</p>
                            <a href="/blog/transicao-do-operacional-para-o-empreendedorismo" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>

        <div className="container">                
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Dicasmudardcarreira/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Especialistas dão dicas para quem pretende mudar de carreira</h4>
                            <p className="card-text">Se a intenção é mudar de carreira, para que façamos isso com mais segurança, será necessário seguir algumas dicas dadas por especialistas.</p>
                            <a href="/blog/dicas-para-quem-deseja-mudar-de-carreira" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                            
                    
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Sebraeoferececapacitacao/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Sebrae oferece cursos gratuitos para empreendedores refugiados no Brasil</h4>
                            <p className="card-text">O Sebrae fechou uma parceria com a ACNUR, agência da ONU para refugiados, visando o desenvolvimento de ações de capacitação para refugiados empreendedores...</p>
                            <a href="/blog/sebrae-oferece-capacitacao" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>

        <div className="container">                
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Horaextra/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Hora extra: passo a passo de como calcular</h4>
                            <p className="card-text">Os brasileiros estão entre os dez que mais fazem horas extras no mundo. O país está na sétima posição, com cerca de 18 horas trabalhadas a mais por mês....</p>
                            <a href="/blog/hora-extra-passo-a-passo-de-como-calcular" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                            
                    
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/naosepodeculpar-ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Não se pode culpar a carga tributária em razão da falta de Gestão Empresarial</h4>
                            <p className="card-text">Impostos não quebram empresas, a carga tributária sem duvida é um fator que gera dificuldades a empresários. Gestão empresarial é bem mais que simplesmente vander...</p>
                            <a href="/blog/nao-se-pode-culpar-a-cargatributaria" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>
                 
    </section>;
  }

export default Artigos;