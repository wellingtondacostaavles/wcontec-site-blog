import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../Components/Parceiros/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos2 from '../Components/Artigos/artigos2';
import Capa from '../Artigo13/capa';
import Artigosrelacionados from '../Artigo13/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo13.css';

function Sebraeoferececapacitacao(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="sebraeoferececapacitacao">

            <div className="container">
                <div className="row"> 
                    <p>Conteúdos e materiais de apoio para capacitação dos empreendedores, como cursos do Sebrae que podem ser realizados de forma totalmente on-line e gratuita.</p>
                    <h3>Refúgio em Números</h3>
                    <p>O Comitê Nacional para os Refugiados (Conare), em sua 6ª edição divulgou os dados do relatório, mostrando que até o fim de 2020, existiam mais de 57 mil refugiados no Brasil. O empreendedorismo é a opção para grande parte dessas pessoas como forma de construir uma nova vida no país para o qual se transferiu.</p>
                    <p>Com isso o Sebrae fechou uma parceria com a ACNUR, Agência da ONU para Refugiados, para o desenvolvimento de ações de capacitação de refugiados empreendedores.</p>
                    <p>O Sebrae é um dos parceiros na plataforma Refugiados Empreendedores , iniciativa da ACNUR e do Pacto Global para dar maior visibilidade aos negócios liderados por empresários refugiados no Brasil.</p>
                    <p>Essa plataforma permite que o refugiado inscreva seu negócio e divulgue seus produtos e serviços. Também estão disponíveis conteúdos e materiais de apoio para capacitação dos empreendedores, como cursos do Sebrae que podem ser realizados de forma totalmente on-line e gratuita.</p>
                    <p>O Sebrae também está atuando na mobilização de suas unidades estaduais em unidades da Federação, que contam com um grande número de refugiados como Roraima, Amazonas e São Paulo, para divulgar a plataforma e oferecer capacitações locais. </p>
                </div>
            </div>        
            
                                    
                <div className="container">
                    <div className="row"> 
                        <h3>Cursos de capacitação para refugiados</h3>
                    </div>
                </div>    
                           
            
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Denise Forini, analista da Unidade de Assessoria Institucional do Sebrae, digulgou que a instituição realizou um processo de cursos que têm mais aderência para esse público, para que eles possam estar melhor preparados e contem com o auxílio do Sebrae para se formalizar.</p>
                            <p>“Estamos divulgando essas nossas capacitações, pois sabemos que elas são rápidas e fáceis de fazer e podem ajudar muitos refugiados que empreendem”.</p>  
                            <p>Todos os cursos têm duração de trinta dias e carga horária de até 18 horas. Para esses cursos, os empreendedores não precisam estar formalizados e devem apenas fazer um cadastro para passar a receber o conteúdo pelo aplicativo de mensagens, podendo concluir o estudo dos módulos nesse ambiente.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Sebraeoferececapacitacao/capasecundaria.png"/></center>
                    </div>  
                </div>                
            
                <div className="row">
                    <p>“Estamos criando também uma turma específica para refugiados no Up Digital, que é uma solução que ajuda os empreendedores a conhecerem e aplicarem estratégias e ferramentas de marketing digital em seus negócios. A primeira turma exclusiva para refugiados empreendedores deverá começar agora em dezembro”, comenta.</p>  
                    <p>Outra capacitação que visa qualificar os empreendedores de baixa renda na temática do empreendedorismo inovador que deve ser oferecida em breve é a Superare.</p>
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

export default Sebraeoferececapacitacao;
