import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import Capa from './capa';
import Artigos from '../../Components/Artigos/artigos';
import Categorias from '../../Components/Categorias/categorias';
import Recomendados from '../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../site/Components/parceiros';
import Footer from '../../../site/Components/contato';
import './novostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024.css';

function NovostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="novos-tributos-em-DCTFWeb-2024">
                                   
            <div className="container">
                <div className="row">
                    <h3>Principais Mudanças:</h3>
                    <p><li className="sbAccessibliltyFontSize" style={{ marginLeft: '15px' }}><span className="stylo-p">Valores de Retenção de Tributos:</span> A partir de janeiro de 2024, os valores de retenção de Imposto de Renda, CSLL, PIS e Cofins, anteriormente registrados na Escrituração Fiscal Digital de Retenções e Outras Informações Fiscais (EFD-Reinf), passarão a ser declarados na DCTFWeb.</li></p> 
                    <p><li className="sbAccessibliltyFontSize" style={{ marginLeft: '15px' }}><span className="stylo-p">PIS/Pasep sobre Folha de Pagamento:</span> Também a partir desse período, os valores de PIS/Pasep apurados sobre a folha de pagamento e que eram registrados no eSocial serão incluídos na declaração da DCTFWeb.</li></p>
                </div>  
            </div>        
            
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Prazos e Procedimentos:</h3>
                        <p><li className="sbAccessibliltyFontSize" style={{ marginLeft: '15px' }}>Os recolhimentos desses tributos serão realizados em fevereiro de 2024, sendo emitidos por meio de Documento de Arrecadação de Receitas Federais (Darf) numerado, gerado pela própria DCTFWeb.</li></p> 
                        <p><li className="sbAccessibliltyFontSize" style={{ marginLeft: '15px' }}>Importante ressaltar que no mês de fevereiro, poderá haver a obrigatoriedade da entrega de duas declarações:</li></p>
                        <ol className="sbAccessibliltyFontSize" start="1"><li>A primeira DCTFWeb, para os fatos geradores relacionados ao PA janeiro de 2024, com prazo de transmissão até o dia 15 do mesmo mês.</li></ol>
                        <ol className="sbAccessibliltyFontSize" start="2"><li>A DCTF (PGD), referente ao PA dezembro de 2023, deve ser transmitida até o 15º dia útil.</li></ol>
                    </div>
                    <div className="col-lg-6">
                        <center><img src="/Images/Artigos/Previdencia-Social/capasecundaria.png"/></center>
                    </div>
                </div>    
            </div>
            <div className="container">
                <div className="row">
                   <p>É crucial que empresas e profissionais contábeis estejam cientes dessas mudanças, garantindo a conformidade com as novas obrigações fiscais. O IRRF sobre rendimentos do trabalho já está sendo declarado em DCTFWeb desde maio de 2023, demonstrando a evolução gradual do sistema.</p>
                   <p>Mantenha-se atualizado com as orientações fornecidas pela RFB e ajuste seus procedimentos internos para garantir uma transição tranquila diante dessas alterações significativas no cenário tributário. Para mais detalhes e informações oficiais, consulte a fonte da Receita Federal do Brasil (RFB).</p>
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

export default NovostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024;