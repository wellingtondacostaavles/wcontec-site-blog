import React from 'react';
import {Link, Redirect}  from 'react-router-dom';

function Ultimosartigosblog(){
    return <section id="ultimosartigosblog">
        <div className="container-fluid">
            <div className="row text-center">
                <div className="titulo">
                <h1>Artigos em destaque</h1> 
                <p>Fique por dentro do mundo contábil, gestão empresarial e finanças. </p>          
                </div>
            </div> 
        </div>        

        <div className="container">                
            <div className="row">
                <div className="col-lg-4 mei-e-a-Importancia-do-contador-na-efd-reinf">
                    <div className="card card-artigos">
                        <center><img src="/Images/Microempreendedor/MeieaImportanciadocontadornaeradaefdreinf/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>MEI e a importância do contador na era da EFD-Reinf</h4>
                            <p>Ser um Microempreendedor Individual (MEI) evoluiu significativamente ao longo dos anos, tornando-se uma jornada cada vez mais complexa e intrincada.</p>
                            <a href="/blog-mei-e-a-Importancia-do-contador-na-era-da-efd-reinf/" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 a-importrancia-retencoes-reinf">
                    <div className="card card-artigos">
                        <center><img src="/Images/Artigos/Efd-reinf-retencoes/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>Retenções na fonte: Guia EFD-Reinf para Empresas</h4>
                            <p>O entendimento das retenções na EFD-Reinf é essencial para o cumprimento de obrigações fiscais complexas e pode beneficiar sua empresa.</p>
                            <a href="/blog-efd-reinf-e-as-retencoes-na-fonte-guia-essencial-para-empresas" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 valores-a-receber-bc">
                    <div className="card card-artigos">
                        <center><img src="/Images/Consultasaosistemavaloresareceberbcb/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4>Já estão disponíveis as consultas ao Sistema Valores a Receber</h4>
                            <p>Através desta consulta você saberá se tem valor a receber ou não, caso tenha, ficará por dentro da data e o período para consultar e solicitar o resgate do saldo existente.</p>
                            <a href="/blog-consulta-ao-sistema-valores-a-receber-bcb" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 regras-aposentadoria-2023">
                    <div className="card card-artigos">
                        <center><img src="/Images/Artigos/Previdencia-Social/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Confira as novas regras para se aposentar em 2023</h4>
                            <p className="card-text">Se você deseja fazer o seu pedido de aposentadoria neste ano, deve ficar atento às alterações que aconteceram. Clique no botão abaixo e fique por dentro.</p>
                            <a href="/blog-regras-para-aposentadoria-2023" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 restituicaoIR">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF22/RestituicaoIR/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Receita Federal disponibiliza consulta ao lote residual do IR</h4>
                            <p className="card-text">Saiba como consultar se o seu nome está na lista do lote residual de restituição. Vale ressaltar que se o resgate da restituição não for realizado em um ano...</p>
                            <Link to="/blog/restituicao-ir#restituicao-IR" className="btn btn-primary btn-artigos zoom-img">Ler Post</Link>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-4 pronampe">
                    <div className="card card-artigos">
                        <center><img src="/Images/Pronampe2022/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Pronampe 2022 saiba como ter acesso ao benefício</h4>
                            <p className="card-text">Conheça a linha de crédito destinada às Microempresas e Empresas de Pequeno Porte para auxiliar no desenvolvimento do seu negócio.</p>
                            <Link to="/blog-pronampe-2022-saiba-como-ter-acesso-ao-benefício-e-veja-as-taxas" className="btn btn-primary btn-artigos zoom-img">Ler Post</Link>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 emitirNFe">
                    <div className="card card-artigos">
                        <center><img src="/Images/Notasfiscais/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Emitir Nota Fiscal, saiba quem tem essa obrigação.</h4>
                            <p className="card-text">Todo empreendedor deve emitir a nota fiscal. A obrigação vale para os ME, EPP e para os MEIs, salvo se estes venderem ou prestarem serviços para pessoa física.</p>
                            <a href="/blog-como-emitir-nota-fiscal" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 aberturadeempresa">
                    <div className="card card-artigos">
                        <center><img src="/Images/Abrirempresa/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div class="card-body">
                            <h4 className="card-title">Descomplicando o processo de abertura de empresa</h4>
                            <p className="card-text">Saiba o que é preciso fazer para abrir sua microempresa, comerçando com o registro na Junta Comercial do estado ou no Cartório de Registro de Pessoa Jurídica.</p>
                            <a href="/blog-abrir-uma-empresa" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 slu">
                    <div className="card card-artigos">
                        <center><img src="/Images/Slu/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Entenda a Sociedade Limitada Unipessoal (SLU)</h4>
                            <p className="card-text">Onde não é preciso ter sócios, não há exigência de valor mínimo para o Capital Social, e o patrimônio do empreendedor não se mistura com o da empresa.</p>
                            <a href="/blog-sociedade-limitada-unipessoal" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 documentos-necessarios-dirpf">
                    <div className="card card-artigos">
                            <center><img src="/Images/DIRPF/Documentosnecessarios/capaprincipal.png" className="card-img-top" alt="..."/></center>
                            <div className="card-body">
                                <h4 className="card-title">Documentos necessários para a Declaração de IR</h4>
                                <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                                <a href="/blog-documentosnecessarios-irpf" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                            </div>
                        </div>  
                </div>
                <div className="col-lg-4 deducoes-loegais-desconto-simplificado-dirpf">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF/Deducoeslegaisoudescontosimplificado/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Deduções legais ou desconto simplificado, saiba qual escolher</h4>
                            <p className="card-text">Vai depender do total de despesas dedutíveis que você tem em relação à renda. Daí você pode avaliar se é mais vantajoso optar por deduções legais ou desconto simplificado.</p>
                            <a href="/blog-deducoes-legais-desconto-simplificado-irpf" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 novidades-na-dirpf">
                    <div className="card card-artigos">
                        <center><img src="/Images/Novidadesnadeclaracaoirpf22/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Confira as novidades na declaração do Imposto de Renda 2023</h4>
                            <p className="card-text">Atenção para o prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2023 que começou no dia 15 de março, são várias mudanças.</p>
                            <a href="/blog-novidades-na-declaracao-irpf" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 obrigatoriedade-dirpf">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF/Obrigatoriedade/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Descubra se você precisa fazer a declaração do Imposto de Renda</h4>
                            <p className="card-text">Fique ligado nas mudanças anuais na legislação fiscal para evitar problemas futuros com a Receita Federal e garantir a conformidade com a lei tributária.</p>
                            <a href="/blog-saiba-se-voce-esta-obrigado-a-apresentar-a-dirpf" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>                               
            </div>  
        </div>               
    </section>;}

export default Ultimosartigosblog;