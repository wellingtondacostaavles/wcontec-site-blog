import React from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import Capa from './capa';
import Artigos2 from '../../../Components/Artigos/artigos2';
import Categorias from '../../../Components/Categorias/categorias';
import Recomendados from '../../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../../site/Components/parceiros';
import Footer from '../../../../site/Components/contato';
import './restituicaoIR.css';

function RestituicaoIR(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="restituicao-IR">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Restituição do terceiro lote do Imposto de Renda 2022</h3>
                    </div>                    

                    <div className="row">
                    <p>A Receita Federal está pagando o imposto de renda aos contribuintes que fizeram a declaração do Imposto de Renda 2022, e o mesmo ficará disponível durante um ano para que eles possam fazer sua retirada, se não fizerem durante esse prazo terá que ser feito mediante solicitação de formulário eletrônico.</p>
                                                            
                    <div className="col-lg-6">
                    <p>Clique no botão abaixo e saiba se o seu nome está no terceiro lote de restituições do Imposto de Renda 2022</p>
                    <a href="http://solucoes.receita.fazenda.gov.br/servicos/consrest/atual.app/paginas/mobile/restituicaoMobi.asp" className="btn btn-primary btn-restituicao-IR" target="_blank">Consultar na Receita Federal</a>
                    <p>Ou se preferir faça a consulta pelo telefone 146. Abaixo as datas estipuladas para cada lote:</p>
                    <p><li className="sbAccessibliltyFontSize">1º lote: 31 de maio de 2022</li></p>
                    <p><li className="sbAccessibliltyFontSize">2º lote: em 30 de junho de 2022</li></p>
                    <p><li className="sbAccessibliltyFontSize">3º lote: em 29 de julho de 2022</li></p>
                    <p><li className="sbAccessibliltyFontSize">4º lote: em 31 de agosto de 2022</li></p>
                    <p><li className="sbAccessibliltyFontSize">5º lote: em 30 de setembro de 2022</li></p>
                    </div>                
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF22/RestituicaoIR/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row">
                    <p>Se seu nome estiver nesta lista de restituições de Imposto de Renda ou nas próximas, saiba que o crédito bancário sempre estará disponível no final de cada mês na conta fornecida no momento do preenchimento da declaração. Vale ressaltar que a receita libera sempre uns 10 dias antes a consulta com todos os nomes da lista de restituição para aquele determinado lote.</p>                    
                </div>
            </div>              
    </section>
    <Artigos2/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default RestituicaoIR;