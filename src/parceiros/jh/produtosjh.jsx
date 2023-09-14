import React from 'react';
import './jh.css';

function Produtosjh(){
    return <section id="produtos-jh">      
         <div className="container">                
            <div className="row">
                <div>
                    <h1 className="titulo-produtos-jh">Confira abaixo nossos produtos e consulte o preço de acordo com sua região</h1>
                </div>
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF/RestituicaoIR/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Saiu o primeiro lote de restituição do Imposto de Renda 2022</h4>
                            <p className="card-text">Veja se o seu nome está na lista do primeiro lote de restituição, mas não se preocupe, caso não esteja nesse, logo teremos as liberações dos próximos. Veja o calendário.</p>
                            <a href="/blog-restituicao-ir" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
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
            </div>
            <div className="row">    
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF/Deducoeslegaisoudescontosimplificado/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Deduções legais ou desconto simplificado, saiba qual escolher</h4>
                            <p className="card-text">Vai depender do total de despesas dedutíveis que você tem em relação à renda. Daí você pode avaliar se é mais vantajoso optar por deduções legais ou desconto simplificado.</p>
                            <a href="/blog-deducoes-legais-desconto-simplificado-irpf-22#" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>            
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Novidadesnadeclaracaoirpf22/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Confira as novidades na declaração do Imposto de Renda 2022</h4>
                            <p className="card-text">São várias mudanças, e a que chama mais atenção será o recebimento da restituição ou o pagamento do imposto por meio de Pix, basta a cheve ser o CPF.</p>
                            <a href="/blog-novidades-na-declaracao-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row">    
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF/Documentosnecessarios/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Documentos necessários para a Declaração do Imposto de Renda 2022</h4>
                            <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                            <a href="/blog-documentosnecessarios-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Normasparaemissao/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Normas para emissão do Comprovante de Rendimentos 2022</h4>
                            <p className="card-text">Foram estabelecidas normas sobre o comprovante de rendimentos pagos e de imposto sobre a renda retido na fonte a vigorar a partir de 01.01.2022.</p>
                            <a href="/blog-normas-para-emissao-e-entrega-do-comprovante-de-rendimentos" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>            
            </div>  
        </div>
                       
    </section>;
  }

export default Produtosjh;