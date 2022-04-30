import React from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import Capa from './capa';
import Artigosrelacionados from './artigosrelacionados';
import Artigos2 from '../../../Components/Artigos/artigos2';
import Categorias from '../../../Components/Categorias/categorias';
import Recomendados from '../../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../../site/Components/parceiros';
import Footer from '../../../../site/Components/contato';
import './obrigatoriedade.css';

function Obrigatoriedade(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="obrigatoriedade">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Estão obrigados a apresentar a Declaração:</h3>
                    </div>                    

                    <div className="row">
                    <p><li className="sbAccessibliltyFontSize">Quem recebeu um salário anual maior que R$ 28.559,70 em 2021;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Quem teve rendimentos isentos, não-tributáveis ou tributados exclusivamente na fonte superior a R$ 40.000,00 no ano;</li></p>
                                        
                    <div className="col-lg-6">
                    <p><li className="sbAccessibliltyFontSize">Quem obteve renda bruta maior que R$ 142.798,50 na atividade rural;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Quem teve a posse ou a propriedade, até o último dia do ano de 2021, de bens ou direitos (como imóveis, veículos e investimentos), de valor total superior a R$ 300.000,00;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Quem, em qualquer mês do ano passado, ganhou capital na alienação de bens ou direitos, sujeito à incidência do imposto, ou que aplicaram na bolsa de valores, de mercadorias, de futuros e assemelhadas;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Aqueles que passaram à condição de residente no Brasil e recebeu, até o último dia do ano de 2021, rendimentos com valor acima de R$ 28.559,70;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Quem vendeu, no ano passado, imóvel residencial e usou o recurso para compra de outra residência para moradia, dentro do prazo de 180 dias da venda, e optou pela isenção do IR.</li></p>
                    </div>                
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF22/Obrigatoriedade/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row">
                    <p>Atenção, o prazo do imposto de renda 2022 começou no dia 7 de março e encerra às 23h59min59s, horário de Brasília, do dia 31 de maio de 2022. Após o prazo, a Declaração de Ajuste Anual ainda poderá ser enviada pela Internet ou entregue nas Unidades de Atendimento da Receita Federal, mas o contribuinte terá que arcar com multa pelo atraso.</p>                    
                </div>
            </div>              
    </section>
    <Artigosrelacionados/>
    <Artigos2/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Obrigatoriedade;