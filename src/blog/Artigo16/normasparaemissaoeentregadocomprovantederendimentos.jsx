import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../../site/Components/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo16/capa';
import Artigosrelacionados from '../Artigo16/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo16.css';

function Normasparaemissaoeentregadocomprovantederendimentos(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="normasparaemissaoeentregadocomprovantederendimentos">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Cuidado com o prazo!</h3>
                    </div>
               </div>       
            
               <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>A pessoa física ou jurídica que tenha pago a pessoa física rendimentos com retenção do imposto sobre a renda na fonte durante o ano-calendário, ainda que em um único mês, fornecer-lhe-á o Comprovante de Rendimentos Pagos e de Imposto sobre a Renda Retido na Fonte.</p>
                            <p>O comprovante deverá ser fornecido até o último dia útil do mês de fevereiro do ano subsequente ao do pagamento dos rendimentos ou por ocasião da rescisão do contrato de trabalho, se esta ocorrer antes da referida data.</p>
                            <p>No caso de rendimentos não sujeitos à retenção do imposto sobre a renda na fonte, pagos por pessoa jurídica, o comprovante deverá ser entregue, no mesmo prazo referido acima, ao beneficiário que o solicitar até o dia 15 de janeiro do ano subsequente ao do pagamento dos rendimentos.</p>  
                            <p>Fica sujeita ao pagamento de multa de R$ 41,43 por comprovante, a fonte pagadora que deixar de fornecer o comprovante aos beneficiários, dentro do prazo fixado, ou fornecê-lo com inexatidão.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Normasparaemissao/capasecundaria.png"/></center>
                    </div>  
                </div>                            
            </div>   
                
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Créditos: Guia Tributário.</p>
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

export default Normasparaemissaoeentregadocomprovantederendimentos;