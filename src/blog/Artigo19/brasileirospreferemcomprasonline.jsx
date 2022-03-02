import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../Components/Contato/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo19/capa';
import Artigosrelacionados from '../Artigo19/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo19.css';

function Brasileirospreferemcomprasonline(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="brasileirospreferemcomprasonline">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Mudanças nos hábitos dos consumidores e no atendimento das empresas</h3>
                    </div>
                    

                    <div className="row">
                            <p>De acordo com a pesquisa 71% dos entrevistados passaram a preferir as compras online com a explosão da crise sanitária, situação que impulsionou o e-commerce.</p>
                            <p>A pesquisa também ressalta que o WhatsApp foi o meio digital com maior alta de utilização no momento da compra, sendo escolhido por 51% dos consumidores.</p>
                            <p>Um fator importante foi a constatação do bom atendimento prestado pelas empresas como item essencial para a grande maioria dos entrevistados. 96,8% dos brasileiros consideram o atendimento algo muito ou extremamente importante ao comprarem um produto ou adquirirem um serviço.</p>
                            <h3>Experiência com atendimento</h3>
                        </div>  
                </div>       
            
               <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Outro item levantado no estudo foi a experiência do consumidor com o atendimento prestado pelas empresas, para entender as preferências antes e depois da pandemia, a partir de quesitos como: agilidade, humanização, resolutividade, simplificação, empatia, entendimento das necessidades, eficiência e conveniência.</p>  
                            <p>O intuito foi identificar se piorou, se está igual ou melhorou. O resultado geral mostrou que os respondentes não notaram diferença na empatia (41%) e no entendimento de suas necessidades (40%). </p>
                            <p>Em relação a conveniência e a eficiência foram positivamente avaliadas como fatores que melhoraram após a crise sanitária, com percentuais de 43% e 37%.</p>
                            <p>A pesquisa envolveu 411 respondentes de todo Brasil, para uma margem de erro de 5% e um nível de confiança de 95%.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Brasileirospreferemcomprasonline/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>            
               
            <div className="container">
                <div className="row"> 
                    <p>O método de coleta foi por envio de e-mail e redes sociais, com resposta preenchida em formulário eletrônico.</p>
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
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Brasileirospreferemcomprasonline;