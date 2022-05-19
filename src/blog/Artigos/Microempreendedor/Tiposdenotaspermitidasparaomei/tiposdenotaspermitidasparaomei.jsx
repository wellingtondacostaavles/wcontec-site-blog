import React from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import Capa from './capa';
import Artigosrelacionados from './artigosrelacionados';
import Artigos2 from '../../../Components/Artigos/artigos2';
import Categorias from '../../../Components/Categorias/categorias';
import Recomendados from '../../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../../site/Components/parceiros';
import Footer from '../../../../site/Components/contato';
import './tiposdenotaspermitidasparaomei.css';

function Tiposdenotaspermitidasparaomei(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="tipos-de-notas-permitidas-para-o-mei">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Nota fiscal</h3>
                    </div>                    

                    <div className="row">
                        <p>É um documento necessário para prestação de contas e comprovações na hora de pagar impostos, além de reduzir custos e processos burocráticos. Tem como finalidade comprovar venda de produtos e serviços de uma empresa para uma determinada pessoa física ou jurídica.</p>
                        <p>O microempreendedor individual está dispensado de emitir nota fiscal para consumidor pessoa física, contudo, quando a venda ou serviço for realizado para uma empresa, será necessário emitir a nota fiscal eletrônica.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Tipos de Notas fiscais para o MEI</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                            <p><li className="sbAccessibliltyFontSize">NF-e (Nota Fiscal de Produto): apesar do microempreendedor individual não pagar o imposto sobre o faturamento, esse modelo de nota o ajudará a manter um controle de vendas e compras de mercadorias. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NF-e;</a></li></p>
                            <p><li className="sbAccessibliltyFontSize">NFS-e (Nota Fiscal de Serviço): o microempreendedor individual poderá utilizá-la pra realiza serviços como atividade principal ou secundária. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NFS-e;</a></li></p>
                            <p><li className="sbAccessibliltyFontSize">CT-e (Conhecimento de Transporte Eletrônico): utilizada para reconhecer serviços de transporte de carga;</li></p>
                            <p>É importante que o microempreendedor individual arquive as notas fiscais, pelo prazo de 05 anos, a contar da data de sua emissão. Garantindo assim a segurança e controle de faturamento.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Microempreendedor/Notasparaomei/capasecundaria.png"/></center>
                    </div>  
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

export default Tiposdenotaspermitidasparaomei;