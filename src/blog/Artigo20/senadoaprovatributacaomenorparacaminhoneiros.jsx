import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../Components/Contato/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos2 from '../Components/Artigos/artigos2';
import Capa from '../Artigo20/capa';
import Artigosrelacionados from '../Artigo20/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo20.css';

function Senadoaprovatributacaomenorparacaminhoneiros(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="senadoaprovatributacaomenorparacaminhoneiros">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Um aumento significatvo!</h3>
                    </div>
                    

                    <div className="row">
                            <p>De acordo com o projeto o limite de enquadramento para os MEI caminhoneiros passa de R$ 81 mil anuais para R$ 251,6 mil anuais. Já a alíquota a pagar para a Previdência Social será de 12% sobre o salário mínimo.</p>
                        </div>  
                </div>       
            
               <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>"Este projeto contém um valor exato da receita bruta anual máxima aplicável a transportadores autônomos de cargas para enquadramento no MEI. R$ 251,6 mil, compatível com a realidade deste setor, cuja importância para o crescimento do Brasil é irrefutável. Cumprimento o senador Jorginho Mello, que aqui é conhecido quase pela alcunha Jorginho Pronampe Mello, um defensor deste segmento por todos nós reconhecido, com iniciativas de absoluto acerto", afirmou o senador Marcos Rogerio (DEM-RO), que leu o relatório de Irajá (PSD-TO) favorável à proposta.</p>
                            <h3>Simples Nacional</h3>
                            <p>O projeto tambem aumenta o número de integrantes do Comitê Gestor do Simples Nacional (CGSN), incluindo um representante do Serviço Brasileiro de Apoio às Micro e Pequenas Empresas (Sebrae), e um das confederações nacionais de representação do segmento das micro e pequenas empresas.</p>  
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Senadoaprovatributacaomenorparacaminhoneiros/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row"> 
                        <p>Dos 4 membros indicados pelo governo, 3 deverão ser da Receita e um da Subsecretaria de Desenvolvimento das Micro e Pequenas Empresas, Empreendedorismo e Artesanato. Já a vaga das Confederações será ocupada em rodízio anual entre as Confederações existentes.</p>
                        <p>Este projeto segue para sanção do presidente Jair Bolsonaro.</p>
                    </div>
                </div>  
            
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Fonte: Agência Senado</p>
                    <p>Créditos: @forumcontabeis.</p>
                    <p>Publicado por: Danielli Nader - Jornalista</p>
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

export default Senadoaprovatributacaomenorparacaminhoneiros;