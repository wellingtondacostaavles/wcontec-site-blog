import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../Components/Parceiros/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo14/capa';
import Artigosrelacionados from '../Artigo14/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo14.css';

function Profissionaisautonomosestaoemcrescimento(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="profissionaisautonomosestaoemcrescimento">

            <div className="container">
                <div className="row"> 
                    <h3>O profissional autônomo atingiu o número recorde de 24,8 milhões</h3>
                    <p>De acordo com dados da Pnad Contínua (Pesquisa Nacional por Amostra de Domicílios Contínua), divulgada pelo IBGE (Instituto Brasileiro de Geografia e Estatística) em setembro, o trabalho por conta própria, conhecidos como profissionais autônomos, atingiu o número recorde de 24,8 milhões de pessoas no segundo trimestre de 2021.</p>
                    <p>Isso corresponde a um crescimento de 4,2% comparado ao trimestre anterior e corresponde a 28,3% de toda a população ativa no mercado de trabalho, segundo o IBGE. Outra pesquisa, da startup Contabilizei, mostra aumento no número de abertura de empresas no país.</p>
                    <p>Os dados de registrados apontam 1.107.787 de novas empresas no terceiro trimestre deste ano contra 927.228, em 2020.</p>
                 </div>
            </div>        
            
                                    
                <div className="container">
                    <div className="row"> 
                        <h3>Tendência já vinha antes da pandemia</h3>
                    </div>
                </div>    
                           
            
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Mesmo com dados apontando um alto crescimento de trabalhadores autônomos desdo o início da pandemia, a tendência do trabalho por conta própria ou de trabalhadores autônomos já vinha em uma crescente mesmo antes de março de 2020 onde deu inicio a doença covid-19.</p>
                            <p>Entre setembro e novembro de 2019, o contingente chegou a 24,6 milhões. "A perspectiva é de crescimento contínuo. A taxa de empreendedorismo potencial cresceu de 30%, em 2019, para 53%, em 2020", destaca Gularte.</p>
                            <p>O executivo Gularte se refere aos dados divulgados pelo relatório da Global Entrepreneurship Monitor (GEM) no ano de 2020, realizado no Brasil pelo Sebrae em parceria com o Instituto Brasileiro de Qualidade e Produtividade (IBPQ). O "empreendedorismo potencial" é composto por cidadãos que não têm um negócio constituído, mas pretendem acompanhando seu crescimento a tendencia é abrir uma empresa em até três anos.</p>  
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Profissionaisautonomosestaoemcrescimento/capasecundaria.png"/></center>
                    </div>  
                </div>                
            
                <div className="row">
                    <h3>Profissionais autônomos com CNPJ?</h3>
                    <p>Os profissionais autônomos são divididos em dois grupos: com ou sem CNPJ. De acordo com a Pnad Contínua, das 24,8 milhões de pessoas que atuam por conta própria, somente 5,8 milhões possuem CNPJ, enquanto 18,1 milhões correspondem ao trabalho por conta própria "informal".</p>
                    <p>Atualmente, ter um CNPJ é muito mais fácil se comparado aos anos 1980 e 90 do século passado. Hoje, o processo para abrir uma MEI (Microempreendedor Individual), por exemplo, é concluído em apenas um dia e garante diversos direitos e benefícios ao empreendedor.</p>
                </div>
            </div>         
            
               
            
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Fonte com informações Contabilizei</p>
                    <p>Créditos: @forumcontabeis.</p>
                    <p>Publicado por: Izabella Miranda - Jornalista</p>
                </div>
            </div>     

           
    </section>
    <Artigosrelacionados/>
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Profissionaisautonomosestaoemcrescimento;