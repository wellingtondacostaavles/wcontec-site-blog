import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../Components/Contato/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos2 from '../Components/Artigos/artigos2';
import Capa from '../Artigo15/capa';
import Artigosrelacionados from '../Artigo15/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo15.css';

function Dicasparaquemdesejamudardecarreira(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="dicasparaquemdesejamudardecarreira">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>O temor de ter que mudar de carreira por conta da pandemia</h3>
                    </div>
                    

                    <div className="row">
                            <p>A Pearson realizou uma pesquisa onde mostra que 76% dos brasileiros afirmam que o novo coronavírus mudou a percepção quanto às suas trajetórias profissionais e cerca de 60% disseram que tem medo de ter que mudar de carreira por conta da pandemia.</p>
                            <p>Para o CEO do Talenses Group, Luiz Valente, o atual momento econômico para quem ainda pensa em mudar de carreira é propício.</p>
                        </div>  
                </div>       
            
               <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>“Apesar de um mercado com crescimento de taxa de juros, de inflação, de expectativas do PIB 2022, nós temos um mercado aquecido, principalmente nos níveis gerenciais e de lideranças diretas de equipe.”</p>  
                            <p>A diretora de Recrutamento da Robert Half, Maria Sartori afirma que durante todo período da crise de Covid-19 ocorreram dois movimentos no mercado.</p>
                            <p>“Um movimento foi em dar um tempo na carreira, o chamado período sabático e outro movimento que vem mais forte é a busca por uma carreira que fazia sentido anteriormente, que pode ocorrer dentro da própria companhia ou fora.”</p>
                            <p>Vicente por sua vez afirma que mudar de carreira exige atenção máxima. “É necessário ter cuidado para essa decisão de guinada na carreira. É importante que o profissional faça essa reflexão do que ele quer, e do que ele não quer.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Dicasmudardcarreira/capasecundaria.png"/></center>
                    </div>  
                </div>                
            
                <div className="row">
                    <p>Para quem pretende mudar de carreira neste momento, é preciso avaliar alguns critérios, listados abaixo, para tomar a decisão mais correta.</p>
                </div>
            </div>   

            
            <div className="container">
                <div className="row"> 
                    <h3>Autoconhecimento</h3>
                    <p>Identifique suas habilidades e conhecimentos que você já tem para essa nova área que você pretende migrar e quais outros conhecimentos serão necessários ser adquiridos. Além de avaliar tudo que uma nova carreira pode mudar na sua vida.</p>
                    <p>“É interessante também conversar com as pessoas que estão ao redor, amigos, família para ter o máximo de informação possível. Com esse feedback de quem te observa de fora fica mais fácil visualizar o movimento que ele precisa fazer”, diz Valente.</p>
                </div>
            </div>   

             <div className="container">
                <div className="row"> 
                    <h3>Entenda o grau da mudança</h3>
                    <p>Não precisa ser uma radical, de uma área de finanças para uma área de criação de mídias, muitas vezes ela pode acontecer dentro do mesmo setor, mas com uma atuação de cargo diferente.</p>
                    <p>“Ele precisa compreender a área em que ele atua, se ele é um profissional que gosta de fazer análise financeira porque ele não quer controladoria, ele precisa entender se ele gosta do que ele faz e se ele não gosta eventualmente da área que ele está atuando”, afirma Valente.</p>
                </div>
            </div>             
                  
            <div className="container">
                <div className="row"> 
                    <h3>Pesquise sobre o setor</h3>
                    <p>Procure entender se é um setor próspero, se sofreu muito com os efeitos da pandemia ou se conseguiu superar as expectativas, a base salarial, os benefícios. Esteja ciente dos prós e dos contras. “Converse com profissionais da área para qual você quer ir, e conhecer mais a profissão e empresas desse segmento”, diz Maria.</p>
                </div>
            </div>     

            <div className="container">
                <div className="row"> 
                    <h3>Esteja atualizado</h3>
                    <p>Procure aperfeiçoar seus conhecimentos dentro do que essa nova área de mercado exige. </p>
                    <p>“Nunca deixe de se atualizar, por meio de atualizações e saber o que está acontecendo no mundo dos negócios”, diz Maria.</p>
               </div>
            </div>     
               
            
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Créditos: @forumcontabeis.</p>
                    <p>Publicado por: Amanda Santos - Jornalista</p>
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

export default Dicasparaquemdesejamudardecarreira;