import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../Components/Parceiros/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo10/capa';
import Artigosrelacionados from '../Artigo10/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo10.css';

function Inssentendacomoeaaposentadoriadequemmudadesexo(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="inssentendacomoeaaposentadoriadequemmudadesexo">

            <div className="container">
                <div className="row"> 
                    <h3>Advogado Rômulo Saraiva</h3>
                    <p>De acordo como explica ao forum contábeis o advogado Rômulo Saraiva, especialista em Previdência Social, há diferença etária para quem passa a se identificar com o gênero feminino há a possibilidade de gerar o direito de se aposentar três anos mais cedo. O contrário já reflete o ônus de esperar mais tempo.</p>
                    <p>Rômulo ressalta, embora o Supremo Tribunal Federal, na ação direta de inconstitucionalidade nº 4.275, tenha decidido na que a autoidentificação das pessoas é um direito fundamental da personalidade em reconhecer a identidade de gênero, a Justiça ainda não se posicionou em caráter nacional sobre como fica a questão previdenciária, tendo em vista que além do requisito etário a carência, a expectativa de vida e o método de cálculo podem repercutir no valor financeiro a depender do gênero da pessoa.</p>
                    <p>Ele explica que o caminho mais rápido à aposentadoria pode gerar também direitos reflexos, como o fato de o titular da aposentadoria ter a cobertura previdenciária e poder gerar pensão por morte para o seu cônjuge, seja em união estável homoafetiva ou heteroafetiva.</p>
                </div>
            </div>        
                    
                    
            <div className="container">
                <div className="row"> 
                    <h3>Ainda precisa esperar pela legislação previdenciária</h3>
                </div>
            </div>    
            
                
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"> 
                        <p>É preciso que haja uma adaptação na legislação previdenciária, segurados transgênero irão se deparar com um nível de incerteza sobre as consequências previdenciárias. Segundo Saraiva, é preciso resolver sobre o que vai prevalecer: se é o sexo biológico ou o reconhecimento posterior do gênero, inclusive se fazendo necessária a mudança no registro civil, alterando prenome e o gênero.</p>
                        <p>Identificar o gênero do segurado tem importância nas regras de acesso e também no valor do benefício. E, por isso, que no âmbito administrativo do INSS este irá possivelmente adotar regras mais rigorosas, o que obrigará o interessado a procurar o Judiciário para dar a palavra final.</p>                      
                        <p>Segundo ele em seus dizeres finais é que, por enquanto, há esparsas e divergentes decisões sobre o assunto, sem existir uma orientação uniforme sobre esse tema.</p>
                     </div>
                        <div className="col-lg-6">
                                <center><img src="/Images/Inssmudacasexo/capasecundaria.png" /></center>
                            </div>
                        </div> 
                </div>   
                            
                    
          <div className="container">
                <div className="row">
                    <p>Créditos: @forumcontabeis.</p>
                    <p>Fonte: com informações do Agora São Paulo</p>
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

export default Inssentendacomoeaaposentadoriadequemmudadesexo;
