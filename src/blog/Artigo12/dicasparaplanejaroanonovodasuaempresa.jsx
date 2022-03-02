import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../Components/Contato/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo12/capa';
import Artigosrelacionados from '../Artigo12/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo12.css';

function Dicasparaplanejaroanonovodasuaempresa(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="dicasparaplanejaroanonovodasuaempresa">

            <div className="container">
                <div className="row"> 
                    <h3>Planejamento de caixa</h3>
                    <p>O gerenciamento financeiro é algo fundamental para sua empresa, por isso, terminar o ano com um balanço geral, ajuda a controlar melhor o que está por vir, e a separar valores para fluxo de caixa, investimentos, despesas e estoque é de fundamental importancia.</p>
                    <p>Após isso será definir ações para os empregados, atualizar tabela de preços, descontos e qual será o investimento em marketing necessário. Deve-se observar quais produtos tem melhores e piores períodos de vendas, é necessário que haja um planejamento para isso.</p>
                </div>
            </div>        
            
                
            <div className="container">
                <div className="row">
                        <h3>Projeção de vendas</h3>
                        <p>Aí vai uma dica bacana, é projetar as vendas e as entradas mês a mês, e fazer as cobranças necessárias a fim de diminuir o índice de inadimplência. Fazer uma tabela de clientes e os potenciais clientes, tíquete médio consumido na loja, para avaliar o ano e fazer destes números uma meta a ser superada no ano que está por vim.</p>
                        <p>Com esse objetivo é interessante analisar pontos positivos e negativos do seu ramo de atuação, avaliando as ameaças e oportunidades do negócio.</p>                      
                        <p>Aposte na disseminação de informação através das redes sociais, pois é um canal dinâmico e permite atingir um número considerável de pessoas.</p>
                        <p>Mas prepare-se para com um planejamento para gestão de crises, como reclamações, e atendimento ao cliente. Ao mesmo tempo, são as redes grandes aliadas no atendimento e relação direta com o consumidor. É fundamental estar presente e ter boa repercussão, para a disseminação do produto ou serviço oferecido.</p>
                        <p>Aplicativos de chat também podem dar suporte ao atendimento e manter seu cliente sempre atualizado com as novidades e promoções da loja.</p>                    
                     </div>
                </div>   
                            
                <div className="container">
                    <div className="row"> 
                        <h3>Pessoas e ambiente</h3>
                    </div>
                </div>    
                           
            
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Se a ideia é fazer ajustes na equipe, agora é o momento, para já iniciar um novo ano com pessoas capacitadas e dispostas a fazer o negócio funcionar. O custo dos colaboradores durante o ano também deve ser estimado, para planejar pontos de melhoria e economia.</p>
                            <p>Na hora de contratar, se certifique que a pessoa está qualificada e disposta a assumir a responsabilidade, e se ela tem perfil para o negócio. Apostar em horários de produção mais flexíveis ou benefícios ao funcionário é interessante para torná-lo mais ativo e feliz durante o seu ofício.</p>  
                            <p>O ambiente de trabalho também pode receber um upgrade para motivar ainda mais os funcionários e fazer com que eles trabalhem motivados é fundamental. Além disso, deixe sempre o espaço aberto para o diálogo, iniciativas e sugestões dos colaboradores, para eles se sentirem parte do todo.</p>  
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Dicasparaoanonovo/capasecundaria.png"/></center>
                    </div>  
                </div>                
            
                <div className="row">
                    <p>Portanto, termine o ano com tudo organizado e se permita ousar em pontos possíveis no próximo ano. É uma habilidade do empreendedor encontrar nas dificuldades uma oportunidade para fazer melhor e planejar é sempre o melhor caminho.</p>  
                </div>
            </div>         
            
            <div className="container">
                <div className="row">
                        <h3>Marketing</h3>
                        <p>Aproveite o ano novo também para fortalecer seu marketing e até testar novos canais de vendas, analisando o mercado para direcionar suas ações e atrair ainda mais clientes.</p>
                        <p>É interessante analisar pontos positivos e negativos do seu ramo de atuação, avaliando as ameaças e oportunidades do negócio.</p>                      
                        <p>Aposte na disseminação de informação através das redes sociais, pois é um canal dinâmico e permite atingir um número considerável de pessoas.</p>
                        <p>E prepare-se para com um planejamento para gestão de crises, como reclamações, e atendimento ao cliente. Ao mesmo tempo, são as redes grandes aliadas no atendimento e relação direta com o consumidor. É fundamental estar presente e ter boa repercussão, para a disseminação do produto ou serviço oferecido.</p>
                        <p>Aplicativos de chat também podem dar suporte ao atendimento e manter seu cliente sempre atualizado com as novidades e promoções da loja.</p>                    
                     </div>
                </div>        
            
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Créditos: @forumcontabeis.</p>
                    <p>Publicado por: Danielle Nader - Jornalista</p>
                </div>
            </div>     

           
    </section>
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Dicasparaplanejaroanonovodasuaempresa;
