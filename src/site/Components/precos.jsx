import React from 'react';

function Precos(){
    return <section id="planos-e-precos">
        <div className="container-fluid">

            <div className="row text-center">
                <div className="titulo">
                    <h1>Encontre o plano ideal para sua empresa</h1>
                    <p>Planos válidos para empresas enquadradas no Simples Nacional.</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm zoom-img">
                        <div className="card-header py-3">
                            <h4>BÁSICO</h4>
                        </div>    
                        <div className="card-body">
                            <p>Indicado para todos os tipos de microempreendedores a partir de:</p>
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="600">
                                        <p><small className="text-muted">R$ <span className="h2-preco-trassado">69</span>,90 /mês</small></p>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="6000">
                                        <p>R$ <span className="h2-preco">39</span>,90<small className="text-muted"> /mês</small></p>
                                    </div>                                                
                                </div>
                            </div>
                            <p>O contrato terá vigência de 12 meses renovados automaticamente</p>
                            <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-lg btn-outline-primary btn-artigos zoom-img">Assinar Agora</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary zoom-img">
                        <div className="card-header py-3 text-white bg-primary border-primary">
                            <h4>AVANÇADO</h4>
                        </div>
                        <div className="card-body">
                            <p>Indicado para todas as empresas sem funcionários a partir de:</p>
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="600">
                                        <p><small className="text-muted">R$ <span className="h2-preco-trassado">120</span>,90 /mês</small></p>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="6000">
                                        <p>R$ <span className="h2-preco">99</span>,90<small className="text-muted"> /mês</small></p>
                                    </div>                                                
                                </div>
                            </div>
                            <p>O contrato terá vigência de 12 meses renovados automaticamente</p>
                            <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-lg btn-primary btn-artigos zoom-img">Assinar Agora</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm zoom-img">
                        <div className="card-header py-3">
                            <h4>PREMIUM</h4>
                        </div>
                        <div className="card-body">
                            <p>Indicado para todas as empresas de pequeno porte a partir de:</p>
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="600">
                                        <p><small className="text-muted">R$ <span className="h2-preco-trassado">180</span>,90 /mês</small></p>
                                    </div>
                                <div className="carousel-item" data-bs-interval="6000">
                                    <p>R$ <span className="h2-preco">159</span>,90<small className="text-muted"> /mês</small></p>
                                </div>                                                
                            </div>
                        </div>
                            <p>O contrato terá vigência de 12 meses renovados automaticamente</p>
                            <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-lg btn-outline-primary btn-artigos zoom-img">Assinar Agora</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row tabela">    
                <h3 className="display-6 text-center mb-4">Compare planos</h3>

                <div className="table-responsive">
                <table className="table text-center ">
                    <thead>
                    <tr>
                        <th className="width34"></th>
                        <th className="width22">Básico</th>
                        <th className="width22">Avançado</th>
                        <th className="width22">Premium</th>
                    </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="text-start">Abertura da empresa grátis</th>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr> 
                    <tr>
                        <th scope="row" className="text-start">Acesso a platafoma</th>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Contador exclusivo</th>
                        <td className="bi"></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                </tbody>           

                <tbody>    
                    <tr>
                        <th scope="row" className="text-start">Cálculo de impostos</th>
                        <td className="bi"></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">DRE, Balanço e Balancete</th>
                        <td className="bi"></td>
                        <td className="bi"></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Obrigações acessórias</th>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>                                
                </tbody>

                <tbody>    
                    <tr>
                        <th scope="row" className="text-start">Pró-labore dos sócios</th>
                        <td className="bi"></td>
                        <td className="bi"></td>
                        <td className="bi"><h6>até 5 sócios</h6></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Folha de pagamento</th>
                        <td className="bi"></td>
                        <td className="bi"></td>
                        <td className="bi"><h6>até 3 funcionários</h6></td>
                    </tr>                               
                </tbody>

                <tbody>
                    <tr>
                        <th scope="row" className="text-start">Perícia Contábil</th>
                        <td className="bi"></td>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                    </tr> 
                    <tr>
                        <th scope="row" className="text-start">Planejamento Tributário</th>
                        <td className="bi"></td>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                    </tr>                
                </tbody>

                <tbody>    
                    <tr>
                        <th scope="row" className="text-start">Emissor de NF-e</th>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Emissor de NFC-e</th>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Emissor de NFS-e</th>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                        <td className="bi"><img src="Images/check.png" /></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Certificado Digital</th>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                        <td className="bi"><h6>Cobrado à parte</h6></td>
                    </tr>                                 
                </tbody> 
                </table>
                </div> 
            </div>    
        </div>
    </section>;
  }

export default Precos;