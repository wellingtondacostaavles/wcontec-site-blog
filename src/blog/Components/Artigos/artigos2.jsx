import React from 'react';
import './artigos.css';
import {Link, Redirect}  from 'react-router-dom';

function Artigos2(){
    return <section id="artigos2">      
         
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
                        <center><img src="/Images/Brasileirospreferemcomprasonline/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Pesquisa aponta que 71% dos brasileiros preferem compras online</h4>
                            <p className="card-text">Uma pesquisa realizada pela ConQuist Consultoria mostrou que a pandemia mudou a maneira como os consumidores fazem compras ou contratam um serviços.</p>
                            <a href="/blog-brasileiros-preferem-compras-online" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Comoaproveitaraomaximoo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Como aproveitar o contrato de experiência com o empregado?</h4>
                            <p className="card-text">Todas as contratações de empregados são feitas com um período de experiência para que o empregador possa avaliar se as aptidões do novo contratado.</p>
                            <a href="/blog-como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>

        <div className="container">                
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Consultasaosistemavaloresareceberbcb/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>Já estão disponíveis as consultas ao Sistema Valores a Receber</h4>
                            <p>Através desta consulta você saberá se tem valor a receber ou não, caso tenha, ficará por dentro da data e o período para consultar e solicitar o resgate do saldo existente.</p>
                            <a href="/blog-consulta-ao-sistema-valores-a-receber-bcb" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Profissionaisautonomosestaoemcrescimento/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Profissionais autônomos estão em crescimento no Brasil</h4>
                            <p className="card-text">O trabalho por conta própria, conhecidos como profissionais autônomos, atingiu o número recorde de 24,8 milhões de pessoas no segundo trimestre de 2021.</p>
                            <a href="/blog-profissionais-autonomos-estao-em-crescimento" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>

        <div className="container">                
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Dicasparaoanonovo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Dicas para planejar o ano novo da sua empresa e estruturar seu negócio.</h4>
                            <p className="card-text">Com o final do ano se aproximando, é importante montar ações para cada pilar do seu negócio: finanças, marketing, vendas, pessoas e estratégias. Confira algumas dicas.</p>
                            <a href="/blog-dicas-para-planejar-o-ano-novo-da-sua-empresa" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Inssmudacasexo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">INSS - será que a aposentadoria muda para quem troca de sexo?</h4>
                            <p className="card-text">A idade é um requisito importante a ser analisado pelo sistema previdenciário. Atualmente, a regra geral é de 65 anos para homens e 62 anos para mulheres. Mas...</p>
                            <a href="/blog-inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>
                 
    </section>;
  }

export default Artigos2;