import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../Components/Contato/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo9/capa';
import Artigosrelacionados from '../Artigo9/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo9.css';

function Diferencasmeieirelisluei(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="eireli">

            <div className="container">
                <div className="row"> 
                    <h3>O que é uma EIRELI?</h3>
                    <p>Eireli é a sigla de Empresa Individual de Responsabilidade Limitada, um novo modelo de empreendimento criado em 2011 com o objetivo de legalizar seu negócio como sociedade limitada, eliminando a figura do sócio “fantasma”. Com a Eireli, o empresário pode abrir sua empresa tendo apenas ele mesmo como sócio.</p>
                    <p>Já em relação ao capital social, na Eireli há a exigência de um valor mínimo, que deve ser correspondente a 100 salários mínimos da época da abertura da empresa. E com relação de quanto pode faturar por ano, neste modelo de empresa não há um limite de faturamento anual, exceto o que for determinado pelo regime tributário que o empreendedor escolher.</p>
                </div>
            </div>        
                    
                    
            <div className="container">
                <div className="row"> 
                    <h3>Quem pode aderir à EIRELI?</h3>
                    <p>O modelo é válido para diversos ramos de atividade econômica, seja na área industrial, comercial, serviço ou até mesmo rural. Quem já tem uma empresa em Sociedade Limitada também pode transformá-la em Eireli sem precisar fechar o contrato, desde que apenas um dos sócios fique responsável e as regras sejam adequadas (incluindo o valor do capital social, alteração do nome e modificação dos documentos para o formato de ato constitutivo).</p>
                </div>
            </div>    
            
                
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">   
                        <h3>Vantagens de abrir uma EIRELI!</h3>  
                        <p><li className="sbAccessibliltyFontSize">Redução da informalidade, com a regularização da situação do empresário individual, que exercia a atividade à margem da lei.</li></p>
                        <p><li className="sbAccessibliltyFontSize">Exercício da atividade empresarial por uma pessoa com responsabilidade limitada, sem comprometer o patrimônio pessoal, ou seja: caso o negócio contraia dívidas, apenas o patrimônio social da empresa será utilizado para quitá-las.</li></p>
                        <p><li className="sbAccessibliltyFontSize">Não ter nenhum tipo de limite de faturamento.</li></p>
                        <p><li className="sbAccessibliltyFontSize">O empresário tem a liberdade de escolher o modelo de tributação que melhor adapte a sua atividade e ao porte da empresa, podendo optar, inclusive, pelo Simples Nacional.</li></p>
                        <p><li className="sbAccessibliltyFontSize">Incentivo à inovação tecnológica e o PAT (Programa de Alimentação do Trabalhador).</li></p>
                     </div>
                        <div className="col-lg-6">
                                <center><img src="/Images/Eireli/capasecundaria.png" /></center>
                            </div>
                        </div> 
                </div>   
                            
                    
          <div className="container">
                <div className="row">
                    <h3>Como podemos  te ajudar?</h3>                        
                    <p>Quer abrir uma Eireli, mas está achando tudo muito burocrático? Ou considera interessante mudar o tipo societário do negócio que já tem?</p>
                    <p>Acesse agora o nossa área do cliente e conheça nossos planos.</p>
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

export default Diferencasmeieirelisluei;