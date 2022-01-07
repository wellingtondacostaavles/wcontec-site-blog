import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../Components/Parceiros/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos2 from '../Components/Artigos/artigos2';
import Capa from '../Artigo6/capa';
import Artigosrelacionados from '../Artigo6/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo6.css';

function Sociedadelimitadaunipessoal(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="sociedadelimitadaunipessoal">

            <div className="container">
                <div className="row"> 
                    <h3>Chega de burocracia!</h3>
                    <p>O tanto de burocracia que há para abrir uma empresa no Brasil desestimula muitas pessoas a começar a empreender, por isso, ela veio para resolver esse problema, a Sociedade Limitada Unipessoal pode ser a chave que você precisava para começar o seu próprio negócio.</p>
                </div> 
            </div>      
            
        
            <div className="container">
                <div className="row">                 
                    <h3>O que é Sociedade Limitada Unipessoal (SLU)?</h3>
                    <p>Ainda que tenha a palavra “sociedade” na sua composição, a SLU é formada por apenas uma pessoa, o próprio empreendedor, ou seja a sociedade limitada unipessoal é o tipo de natureza jurídica que permite ao seu optante montar o próprio negócio sem a necessidade de um sócio nem um capital social previamente definido. Além disso, vale ressaltar que, nesse tipo, a responsabilidade social é limitada, assim o patrimônio pessoal fica separado do patrimônio da empresa e caso haja algum problema financeiro relevante, ou mesmo falência, os bens do empreendedor não podem ser utilizados para quitação das dívidas.</p>
                    <p>Enão podemos dizer que a sociedade unipessoal desempenha um papel fundamental no desenvolvimento da jornada empreendedora pelo resultado de uma maior liberdade econômica.</p>
                </div>
            </div>     

            <div className="container">
                <div className="row"> 
                    <div className="titulo">
                        <h3>Como foi criada a SLU?</h3>
                    </div>
                </div>
            </div>   
                
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">   
                        <p>Criada pela Medida Provisória 881, tambem conhecida como “MP da liberdade econômica” é extremamente importante, pois é a responsável pela criação da sociedade limitada unipessoal.</p>
                        <p>De principio tinha como ojetivo principal levar à criação dessas legislações para desburocratizar o processo de abertura de empresas no Brasil.</p>
                        <p>Então foi criado um formato de empresa que pode ser aberta sem o custo elevado do Capital Social exigido na Eireli, e sem a necessidade de sócios, mantendo o patrimônio do empreendedor protegido, trazendo ainda mais liberdade e estímulo para o empreendedorismo brasileiro ao promover a desburocratização em algumas áreas responsáveis por limitações significativas na concepção e consolidação de um negócio</p>
                        <p>Essa possibilidade fomenta a legalização de negócios e colabora para o desenvolvimento e o crescimento da economia nacional.</p>
                    </div> 

                    <div className="col-lg-6">
                        <center><img src="/Images/Slu/capasecundaria.png" /></center>
                    </div> 
                </div>
            </div>           
                            
            <div className="container">
                <div className="row">     
                    <h3>Quais são as características da Sociedade Limitada Unipessoal, SLU?</h3>
                    <p>Podemos dizer que as próprias características da Sociedade Limitada Unipessoal são consideradas as suas vantagens:</p>
                    <p><li className="sbAccessibliltyFontSize">Não precisa de sócio para ser aberta;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Inexigibilidade de Limite de Salário: não há a necessidade de 100 salários mínimos para constituir o capital social na abertura da sociedade;</li></p> 
                    <p><li className="sbAccessibliltyFontSize">Separação do patrimônio pessoal do empreendedor com o patrimônio da empresa.</li></p>
                    <p>Somado a esses pontos, a SLU tem outra vantagem bastante interessante que não existe em outras naturezas jurídicas, que é a possibilidade de abrir mais de uma empresa nesse formato.</p>
                </div>
            </div> 

            <div className="container">
                <div className="row"> 
                    <div className="titulo">
                        <h3>Potencialize já o seu crescimento, ponha isso em prática!</h3>
                        <p>Saíba que ter acesso às informações sobre a sua sociedade limitada unipessoal fará toda a diferença no seu planejamento e tomada de decisão.</p>
                        <p>Já basta a grande burocracia que atrapalha nós brasileiros, não possuir o conhecimento necessário para empreender de forma assertiva, pode ser prejudicial para a vida de qualquer empresa.</p>
                        <p>Saber escolher o melhor tipo de natureza jurídica para atender a sua demanda e dispor de todo aparato sem ter que sofrer com ações que comprometem a consolidação da sua empresa é o tipo de medida que qualquer pessoa que almeja o sucesso gostaria.</p>
                        <p>Então empreender exige muita dedicação e vontade de aperfeiçoamento constante, provenientes da busca incessante por resultados cada vez melhores. Se você deseja potencializar seu negócio, ao dispor de toda a informação contábil necessária para uma tomada de posição assertiva, está no lugar certo, visite a área do cliente e saiba mais!</p>
                    </div>            
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

export default Sociedadelimitadaunipessoal;