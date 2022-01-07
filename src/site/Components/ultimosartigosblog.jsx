import React from 'react';

function Ultimosartigosblog(){
    return <section id="ultimosartigosblog">
        <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Últimos artigos do nosso blog</h1> 
                <p>Fique por dentro do mundo contábil, gestão empresárial e finanças. </p>          
                </div>
            </div> 
        </div>  

        <div className="container">                
            <div className="row">
                <div className="col-lg-4">
                        <div className="card card-artigos">
                            <center><img src="/Images/Dicasmudardcarreira/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div class="card-body">
                                <h4 className="card-title">Especialistas dão dicas para quem pretende mudar de carreira</h4>
                                <p className="card-text">Se a intenção é mudar de carreira, para que façamos isso com mais segurança, será necessário seguir algumas dicas dadas por especialistas.</p>
                                <a href="/blog/dicasparaquemdesejamudardecarreira" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>
                                
                    
                <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Senadoaprovatributacaomenorparacaminhoneiros/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Senado aprova tributação menor para caminhoneiros</h4>
                            <p className="card-text">O Senado aprovou um projeto de lei que muda a tributação de caminhoneiros autônomos inscritos como microempreendedores individuais.</p>
                            <a href="/blog/senadoaprovatributacaomenorparacaminhoneiros" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  

                <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Comoaproveitaraomaximoo/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Como aproveitar o contrato de experiência com o empregado?</h4>
                            <p className="card-text">Todas as contratações de empregados são feitas com um período de experiência para que o empregador possa avaliar se as aptidões do novo contratado.</p>
                            <a href="/blog/comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>               
    </section>;}

export default Ultimosartigosblog;