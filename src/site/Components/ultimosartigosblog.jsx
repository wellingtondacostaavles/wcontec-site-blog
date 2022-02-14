import React from 'react';

function Ultimosartigosblog(){
    return <section id="ultimosartigosblog">
        <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Últimos artigos do nosso blog</h1> 
                <p>Fique por dentro do mundo contábil, gestão empresarial e finanças. </p>          
                </div>
            </div> 
        </div>  

        <div className="container">                
            <div className="row">
                <div className="col-lg-4">
                        <div className="card card-artigos">
                            <center><img src="/Images/Consultasaosistemavaloresareceberbcb/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Já estão disponíveis as consultas ao Sistema Valores a Receber</h4>
                                <p className="card-text">Consulte e saiba se você tem valor a receber ou não, caso tenha, ficará por dentro da data e o período para consultar e solicitar o resgate do saldo existente.</p>
                                <a href="/blog/consulta-ao-sistema-valores-a-receber-bcb" className="btn btn-primary btn-artigos">Ler Post</a>
                            </div>
                        </div>  
                    </div>
                                
                    
                <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Senadoaprovatributacaomenorparacaminhoneiros/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Senado aprova tributação menor para caminhoneiros</h4>
                            <p className="card-text">O Senado aprovou um projeto de lei que muda a tributação de caminhoneiros autônomos inscritos como microempreendedores individuais.</p>
                            <a href="/blog/senado-aprova-tributacao-menor-para-caminhoneiros" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  

                <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Comoaproveitaraomaximoo/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Como aproveitar o contrato de experiência com o empregado?</h4>
                            <p className="card-text">Todas as contratações de empregados são feitas com um período de experiência para que o empregador possa avaliar se as aptidões do novo contratado.</p>
                            <a href="/blog/como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>               
    </section>;}

export default Ultimosartigosblog;