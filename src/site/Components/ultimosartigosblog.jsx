import React from 'react';
import {Link, Redirect}  from 'react-router-dom';

function Ultimosartigosblog(){
    return <section id="ultimosartigosblog">
        <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Artigos em destaque</h1> 
                <p>Fique por dentro do mundo contábil, gestão empresarial e finanças. </p>          
                </div>
            </div> 
        </div>        

        <div className="container">                
            <div className="row">
            <div className="col-lg-4 restituicaoIR">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF22/RestituicaoIR/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Consulte o quinto lote de restituição do IR 2022</h4>
                            <p className="card-text">Veja se o seu nome está na lista do quinto lote, caso não esteja, logo teremos as liberações dos próximos, avisaremos assim que forem liberados.</p>
                            <Link to="/blog/restituicao-ir" className="btn btn-primary btn-artigos">Ler Post</Link>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4 pronampe">
                    <div className="card card-artigos">
                        <center><img src="/Images/Pronampe2022/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Pronampe 2022 saiba como ter acesso ao benefício</h4>
                            <p className="card-text">Conheça a linha de crédito destinada às Microempresas e Empresas de Pequeno Porte para auxiliar no desenvolvimento do seu negócio.</p>
                            <Link to="/blog-pronampe-2022-saiba-como-ter-acesso-ao-benefício-e-veja-as-taxas" className="btn btn-primary btn-artigos">Ler Post</Link>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 emitirNFe">
                    <div className="card card-artigos">
                        <center><img src="/Images/Notasfiscais/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Emitir Nota Fiscal, saiba quem tem essa obrigação.</h4>
                            <p className="card-text">Todo empreendedor deve emitir a nota fiscal. A obrigação vale para os ME, EPP e para os MEIs, salvo se estes venderem ou prestarem serviços para pessoa física.</p>
                            <Link to="/blog/como-emitir-nota-fiscal" className="btn btn-primary btn-artigos">Ler Post</Link>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 aberturadeempresa">
                    <div className="card card-artigos">
                        <center><img src="/Images/Abrirempresa/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Descomplicando o processo de abertura de empresa</h4>
                            <p className="card-text">Saiba o que é preciso fazer para abrir sua microempresa, comerçando com o registro na Junta Comercial do estado ou no Cartório de Registro de Pessoa Jurídica.</p>
                            <Link to="/blog/abrir-uma-empresa" className="btn btn-primary btn-artigos">Ler Post</Link>
                        </div>
                    </div>  
                </div>               
            </div>  
        </div>               
    </section>;}

export default Ultimosartigosblog;