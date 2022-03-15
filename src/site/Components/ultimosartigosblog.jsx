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
                        <center><img src="/Images/DIRPF22/Deducoeslegaisoudescontosimplificado/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Deduções legais ou desconto simplificado, qual escolher?</h4>
                            <p className="card-text">Vai depender do total de despesas dedutíveis que você tem em relação à renda. Você pode avaliar se é melhor optar por deduções legais ou desconto simplificado.</p>
                            <a href="/blog-deducoes-legais-desconto-simplificado-irpf-22#" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>

            <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/DIRPF22/Documentosnecessarios/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Documentos necessários para a DIRPF 2022</h4>
                            <p className="card-text">Juntar os documentos e também guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</p>
                            <a href="/blog-documentosnecessarios-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>
                
                <div className="col-lg-4">
                    <div className="card card-artigos">
                        <center><img src="/Images/Novidadesnadeclaracaoirpf22/ultimosartigos.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">IR - Confira as novidades na declração de 2022</h4>
                            <p className="card-text">São várias mudanças, e a que chama mais atenção será o recebimento da restituição ou o pagamento do imposto por meio de Pix, basta a cheve ser o CPF.</p>
                            <a href="/blog-novidades-na-declaracao-irpf-22" className="btn btn-primary btn-artigos">Ler Post</a>
                        </div>
                    </div>  
                </div>                            
            </div>  
        </div>               
    </section>;}

export default Ultimosartigosblog;