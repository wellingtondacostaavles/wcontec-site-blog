import React from 'react';

function Abrirempresagratis(){
 return <section id="abrir-empresa-gratis">
        <div className="container">
            
                <div className="row">
                    <div className="titulo">
                        <h1>Abra sua empresa agora de um jeito fácil</h1>           
                    </div>
                </div>                  
                
                <div className="row">                
                    <div className="col-lg-6">
                        <p>Sabemos que para abrir seu negócio necessita da ajuda de um contador, então cadastre-se na Wcontec e opte por abrir sua empresa de forma gratuita.</p>
                        <p>Assim, com ajuda da tecnologia elaboramos a consulta prévia junto aos órgãos competentes, preparamos o ato de constituição e damos entrada na emissão do CNPJ junto a Receita Federal.</p>
                        <p>Por fim registramos sua empresa no sistema simplificado de tributação, Simples Nacional, aquele com a menor carga tributária do Brasil.</p>
                        <p>Percebeu como é fácil abrir seu negócio com a Wcontec? Você tem a sua empresa aberta e pronta para começar a emitir notas fiscais e faturar em poucos dias.</p> 
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
                                        <h5>Contrate um de nossos planos anual de acesso a plataforma, em seguida nos envie algumas informações que iremos te solicitar, vamos preparar toda documentação, colher sua assinatura e te enviar as taxas governamentais. </h5>
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
                                        <h5>Realize o pagamento das taxas e impostos governamentais, e caso você não tenha optado por abertura de empresa na forma Premium, nossa equipe de contadores oferecerá todas as orientações necessárias para protocolar os documentos nos órgãos competentes.</h5>
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
                                        <h5>Com sua empresa aberta e já enquadrada no Simples Nacional, é só aguardar a aprovação dos órgãos públicos para comerçar a funcionar, emitir nota fiscal e faturar!.</h5>
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