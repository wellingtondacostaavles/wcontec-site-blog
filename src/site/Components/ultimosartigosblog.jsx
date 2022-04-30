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
                        <center><img src="/Images/DIRPF22/Obrigatoriedade/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Saiba se você está ogrigado a apresentar a DIRPF 2022</h4>
                            <p className="card-text">Entramos no último mês do prazo de entrega da Declaração do Imposto de Renda, mas muita gente ainda não sabe se está obrigado a prestar contas com o leão!</p>
                            <a href="/blog-saiba-se-voce-esta-obrigado-a-apresentar-a-dirpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Microempreendedor/Mircroempreendedorestemareceber/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Microempreendedor e Pessoa física com direito a crédito</h4>
                            <p className="card-text">Até R$ 1 mil para pessoa física e R$ 3 mil para Microempreendedor Individual. Juros de 1,95% para MEI e 1,99% PF ao mês, divididas em até 24 parcelas.</p>
                            <a href="/blog-microempreendedor-e-trabalhador-informal-tem-direito-a-receber" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF22/Deducoeslegaisoudescontosimplificado/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Deduções legais ou desconto simplificado, qual escolher?</h4>
                            <p className="card-text">Vai depender do total de despesas dedutíveis que você tem em relação à renda. Você pode avaliar se é melhor optar por deduções legais ou desconto simplificado.</p>
                            <a href="/blog-deducoes-legais-desconto-simplificado-irpf-22#" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>                         
            </div>  
        </div>               
    </section>;}

export default Ultimosartigosblog;