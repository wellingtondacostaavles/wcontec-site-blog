import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../../site/Components/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo2/capa';
import Artigosrelacionados from '../Artigo2/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo2.css';

function Mei(){
    return <div>
      <Navbar/>
      <Capa/>              
      
    <section id="mei">

        <div className="container">
            <div className="row"> 
                <h3>Como se tornar um Micro Empreendedor Individual?</h3>
                <p>Para ser um MEI, a área de atuação do profissional precisa estar na lista oficial da categoria, já que o MEI foi criado com o objetivo de regularizar a situação de profissionais informais. Para ser MEI, é necessário:</p>
                <p>Faturar até R$ 81.000,00 por ano, ou R$ 6.750,00 ao mês.</p>
                <p>Ter no máximo um empregado contratado recebendo o salário-mínimo ou o piso da categoria.</p>
                <p>Não ter participação em outra empresa como sócio titular.</p>
            </div> 
        </div>       
            
        <div className="container">
            <div className="row"> 
                <div className="titulo">
                    <h3>Qual o custo de ser um MEI?</h3>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-6">    
                    <p>O microempreendedor individual terá como despesas apenas o pagamento mensal do Simples Nacional.</p>
                    <h3>Valores</h3>
                    <p>R$ 56,00 Comércio ou Indústria.</p>
                    <p>R$ 60,00 Prestação de Serviços.</p>
                    <p>R$ 61,00 Comércio e Serviços juntos.</p>   
                    <h3>Cálculo</h3>
                    <p>O cálculo corresponde a 5% do limite mensal do salário mínimo e mais R$ 1,00 (um real), a título de ICMS, caso seja contribuinte desse imposto e/ou R$ 5,00 (cinco reais), a título de ISS, caso seja contribuinte desse imposto.</p>  
                    <p>O pagamento pode ser feito por meio de débito automático, online ou emissão do Documento de Arrecadação do Simples Nacional (DAS).</p>  
                </div>                
                <div className="col-lg-6">
                    <center><img src="/Images/Mei/capasecundaria.png"/></center>
                </div>
            </div>
        </div>

                    
        <div className="container">
            <div className="row">
                <h3>Quais os benefícios de ser um Micro Empreendedor Individual?</h3>
                <p>Você tem direito a auxílio-maternidade;</p>
                <p>Direito a afastamento remunerado por problemas de saúde;</p>
                <p>Aposentadoria;</p>
                <p>Sendo MEI, você é enquadrado no Simples Nacional e ficará isento dos tributos federais (Imposto de Renda, PIS, Cofins, IPI e CSLL);</p>
                <p>Com CNPJ, pode abrir conta em banco e tem acesso a crédito com juros mais baratos. Pode ter endereço fixo para facilitar a conquista de novos clientes;</p>
                <p>Conta com cobertura da Previdência Social para você e sua família.</p>
                <br></br>
                <br></br>
                <p>Fonte de informações: SEBRAE</p>             
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

export default Mei;