import React from 'react';
import {Link} from 'react-router-dom';
import './aposentadoriaporidade2023.css';

function Artigosrelacionados(){
    return <section id="artigosrelacionados-aposentadoria-por-idade-2023">      
       <div className="container">
            <div className="row text-center">
                <div className="titulo">
                <h1>Assuntos Relacionados</h1>         
                </div>
            </div> 
        </div>
         
         <div className="container">                
            <div className="row">                 
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Inssmudacasexo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">INSS - será que a aposentadoria muda para quem troca de sexo?</h4>
                            <p className="card-text">A idade é um requisito importante a ser analisado pelo sistema previdenciário. Atualmente, a regra geral é de 65 anos para homens e 62 anos para mulheres. Mas...</p>
                            <a href="/blog-inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6">
                    <div className="card card-artigos">
                        <center><img src="/Images/Comoaproveitaraomaximoo/capaprincipal.png" className="card-img-top" alt="..."/></center>
                        <div className="card-body">
                            <h4 className="card-title">Como aproveitar o contrato de experiência com o empregado?</h4>
                            <p className="card-text">Todas as contratações de empregados são feitas com um período de experiência para que o empregador possa avaliar se as aptidões do novo contratado.</p>
                            <a href="/blog-como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado" className="btn btn-primary btn-artigos zoom-img">Ler Post</a>
                        </div>
                    </div>  
                </div>  
            </div>       
        </div>          
       </section>;
  }

export default Artigosrelacionados;