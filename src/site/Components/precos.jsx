import React from 'react';

function Precos(){
    return <section id="planos-e-precos">
        <div className="container">

            <div className="row text-center">
                <div className="titulo">
                    <h1>Encontre o plano ideal para sua empresa</h1>
                    <p>Planos válidos para empresas enquadradas no Simples Nacional.</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4>BÁSICO</h4>
                        </div>    
                        <div className="card-body">
                            <p>Para micro empreendedor individual (MEI) a partir de</p>
                            <h2>R$ 69,90<small className="text-muted"> /mês</small></h2>
                            <p>O contrato terá vigência de 12 meses renovados automaticamente</p>
                            <a href="https://wcontec.osayk.com.br/#/cadastro" className="btn btn-lg btn-outline-primary btn-artigos">Assinar Agora</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                        <div className="card-header py-3 text-white bg-primary border-primary">
                            <h4>AVANÇADO</h4>
                        </div>
                        <div className="card-body">
                            <p>Serviços e/ou comercio (MEI, ME, EPP) a partir de</p>
                            <h2>R$ 319,80<small className="text-muted"> /mês</small></h2>
                            <p>O contrato terá vigência de 12 meses renovados automaticamente</p>
                            <a href="https://wcontec.osayk.com.br/#/cadastro" className="btn btn-lg btn-primary btn-artigos">Assinar Agora</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4>PREMIUM</h4>
                        </div>
                        <div className="card-body">
                            <p>Serviços e/ou comercio (MEI, ME, EPP) a partir de</p>
                            <h2>R$ 615,90<small className="text-muted"> /mês</small></h2>
                            <p>O contrato terá vigência de 12 meses renovados automaticamente</p>
                            <a href="https://wcontec.osayk.com.br/#/cadastro" className="btn btn-lg btn-outline-primary btn-artigos">Assinar Agora</a>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="display-6 text-center mb-4">Compare Planos</h3>

            <div className="table-responsive">
            <table className="table text-center">
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
                    <td className="bi"></td>
                    <td className="bi"><img src="Images/check.png" /></td>
                </tr>
            </tbody>           

            <tbody>    
                <tr>
                    <th scope="row" className="text-start">Cálculo e emissão de guia de impostos</th>
                    <td className="bi"></td>
                    <td className="bi"><img src="Images/check.png" /></td>
                    <td className="bi"><img src="Images/check.png" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">DRE, Balanço Patrimonial e Balancete</th>
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
                    <td className="bi"><h6>até 5 sócios grátis</h6></td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">Folha de pagamento</th>
                    <td className="bi"></td>
                    <td className="bi"></td>
                    <td className="bi"><h6>até 3 funcionários grátis</h6></td>
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
                    <th scope="row" className="text-start">Emissor de NFS-e ilimitado</th>
                    <td className="bi"><img src="Images/check.png" /></td>
                    <td className="bi"><img src="Images/check.png" /></td>
                    <td className="bi"><img src="Images/check.png" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">Emissor de NF-e</th>
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
    </section>;
  }

export default Precos;