import React from 'react';
import './recursoshumanos.css';

function Recursoshumanos(){
    return <section id="recursos-humanos">      
         <div className="container">                
            <div className="row">
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Inssmudacasexo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">A aposentadoria muda para quem troca de sexo?</h4>
                            <p className="card-text">A idade é um requisito importante a ser analisado pelo sistema previdenciário. Atualmente, a regra geral é de 65 anos para homens e 62 anos para mulheres. Mas...</p>
                            <a href="/blog-inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
            <div className="col-lg-6">
                <div className="card card-artigos">
                        <center><img src="/Images/Comoaproveitaraomaximoo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Como aproveitar o contrato de experiência</h4>
                            <p className="card-text">Todas as contratações de empregados são feitas com um período de experiência para que o empregador possa avaliar se as aptidões do novo contratado.</p>
                            <a href="/blog-como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row">    
            <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Horaextra/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Aprenda calcular a hora extra</h4>
                            <p className="card-text">Os brasileiros estão entre os dez que mais fazem horas extras no mundo. O país está na sétima posição, com cerca de 18 horas trabalhadas a mais por mês....</p>
                            <a href="/blog-hora-extra-passo-a-passo-de-como-calcular" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>            
            <div className="col-lg-6">
            <div className="card card-artigos">
                        <center><img src="/Images/Autonomo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Autônomo</h4>
                            <p className="card-text">O profissional que trabalha por conta própria e desempenha uma atividade remunerada sem vínculo empregatício, sua remuneração se dá por um contrato de prestação de serviços.</p>
                            <a href="/blog-autonomo" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>                      
                </div>
            </div>
        </div>
                       
    </section>;
  }

export default Recursoshumanos;