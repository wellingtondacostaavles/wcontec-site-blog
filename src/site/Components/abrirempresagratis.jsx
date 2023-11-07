import React from 'react';

function Abrirempresagratis(){
 return <section id="abrir-empresa-gratis">
        <div className="container-fluid">            
                <div className="row">
                    <div className="titulo">
                        <h1>Abra sua empresa agora de um jeito fácil</h1>           
                    </div>
                </div>                
                <div className="row">                
                    <div className="col-lg-6">
                        <h5>Quer abrir sua empresa sem se preocupar com burocracias? Cadastre-se na Wcontec e aproveite nossa modalidade de abertura gratuita.</h5>
                        <h5>Nós cuidamos de tudo para você: desde a análise do melhor modelo empresarial até a elaboração da consulta prévia junto aos órgãos competentes, passando pela preparação do ato de constituição e a emissão do CNPJ junto à Receita Federal.</h5>
                        <h5> Além disso, podemos registrar sua empresa no Simples Nacional, o sistema simplificado de tributação com a menor carga tributária do Brasil. Com a Wcontec, você tem sua empresa aberta e pronta para faturar em poucos dias. Não perca mais tempo e comece já a empreender!</h5>
                    </div>
                    <div className="col-lg-6">
                        <img src="Images/AbrirEmpresa.png" />
                    </div>       
                </div>
                <div className="row"> 
                    <div className="titulo">
                        <h1>Como funciona</h1>                   
                    </div>    
                </div>
                <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">            
                    <div className="carroussel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="18000">
                                <div className="row">    
                                    <div className="col-lg-6">
                                        <img src="Images/Cadastro.png"/>
                                    </div>
                                    <div className="col-lg-6 formtext">  
                                        <h2>Passo 1</h2>
                                        <h5>Abra sua empresa sem custo adicional. Basta se cadastrar e fornecer os documentos necessários, que nós cuidamos do resto. Preparamos toda a documentação, colhemos sua assinatura e enviamos as taxas governamentais para você. É fácil, rápido e sem burocracias. Não perca mais tempo, comece já a empreender!</h5>
                                    </div>                            
                                </div>       
                            </div>    
                            <div className="carousel-item" data-bs-interval="18000">
                                <div className="row">    
                                    <div className="col-lg-6">
                                        <img src="Images/PagueasTaxas.png" />
                                    </div>
                                    <div className="col-lg-6 formtext">  
                                        <h2>Passo 2</h2>
                                        <h5>Após efetuar o pagamento das taxas e impostos governamentais, nossa equipe de contadores estará à disposição para oferecer todas as orientações necessárias para protocolar os documentos nos órgãos competentes, caso você não tenha optado pela abertura de empresa na forma Exclusiva. Conte conosco para garantir que todo o processo seja realizado de forma ágil e eficiente, sem complicações.</h5>
                                    </div>                            
                                </div>       
                            </div>  
                            <div className="carousel-item" data-bs-interval="15000">
                                <div className="row">    
                                    <div className="col-lg-6">
                                        <img src="Images/Pronto.png" />
                                    </div>
                                    <div className="col-lg-6 formtext">  
                                        <h2>Pronto!</h2>
                                        <h5>Com sua empresa aberta e já enquadrada no Simples Nacional, basta aguardar a aprovação dos órgãos públicos para começar a funcionar, emitir notas fiscais e faturar! A Wcontec cuidou de todos os detalhes para que você possa se concentrar no que realmente importa: fazer seu negócio crescer. Conte conosco para simplificar sua vida empreendedora.</h5>
                                    </div>                            
                                </div>     
                            </div>                
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>            
            </div>        
</section>;}

export default Abrirempresagratis;