import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import Capa from './capa';
import Artigosrelacionados from './artigosrelacionados';
import Artigos2 from '../../Components/Artigos/artigos2';
import Categorias from '../../Components/Categorias/categorias';
import Recomendados from '../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../site/Components/parceiros';
import Footer from '../../../site/Components/contato';
import './obrigatoriedadedeemitirnotafiscal.css';

function Obrigatoriedadedeemitirnotafiscal(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="obrigatoriedade-de-emitir-nota-fiscal">
                                   
                <div className="container">
                    <div className="row"> 
                        <p>Com a finalidade de comprovar venda de produtos e serviços de uma empresa para uma determinada pessoa física ou jurídica, criou-se a Nota Fiscal. Esse documento fiscal é necessário para prestação de contas e comprovações na hora de pagar impostos, além de reduzir custos e processos burocráticos.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Tipos de notas fiscais</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>É de fundamental importância conhecer os diferentes tipos de notas fiscais para evitar sofrer com multas e outras penalidades para o seu negócio.</p>
                        <p><li className="sbAccessibliltyFontSize">NF-e (Nota Fiscal de Produto): utilizada para produtos e a cobrança de IPI e ICMS. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NF-e;</a></li></p>
                        <p><li className="sbAccessibliltyFontSize">NFS-e (Nota Fiscal de Serviço): utilizada por empresas que realizam serviços como atividade principal ou secundária. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NFS-e;</a></li></p>
                        <p><li className="sbAccessibliltyFontSize">NFC-e (Nota Fiscal ao Consumidor Eletrônica): substitui o Cupom Fiscal e é emitida para clientes finais. Requer sistema emissor de NFC-e;</li></p>
                        <p><li className="sbAccessibliltyFontSize">CT-e (Conhecimento de Transporte Eletrônico): utilizada para reconhecer serviços de transporte de carga;</li></p>
                        <p><li className="sbAccessibliltyFontSize">MDF-e (Manifesto de Documentos Fiscais Eletrônicos): utilizada para integrar movimentações mais complexas. Vincula diferentes documentos a uma unidade de carga.</li></p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Notasfiscais/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row"> 
                 <p>O sistema emissor se comunica com o site da Sefaz de cada Estado e a prefeitura correspondente no momento da emissão da NF-e ou NFS-e.</p>
                 <p>O MEI, mesmo que dispensado de emitir nota fiscal para consumidor pessoa física, é obrigado à emissão quando o destinatário da mercadoria ou serviço for uma empresa. Veja os tipos de <a href="/blog-tipos-de-notas-permitidas-para-o-mei#tipos-de-notas-permitidas-para-o-mei" target="_blank" className="tabela-a">notas permitidas para o microempreendedor individual.</a></p>
                </div>
            </div>   

            <div className="container">
                    <div className="row">
                        <p></p>
                        <p>Fonte de informações: Sebrae</p>
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

export default Obrigatoriedadedeemitirnotafiscal;