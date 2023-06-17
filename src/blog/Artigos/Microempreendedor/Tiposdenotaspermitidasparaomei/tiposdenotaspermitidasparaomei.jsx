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
                        <h3>Tipos de Notas fiscais para o MEI</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                            <p><li className="sbAccessibliltyFontSize">NF-e (Nota Fiscal de Produto): apesar do microempreendedor individual não pagar o imposto sobre o faturamento, esse modelo de nota o ajudará a manter um controle de vendas e compras de mercadorias. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NF-e;</a></li></p>
                            <p><li className="sbAccessibliltyFontSize">NFS-e (Nota Fiscal de Serviço): o microempreendedor individual poderá utilizá-la pra realiza serviços como atividade principal ou secundária. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NFS-e;</a></li></p>
                            <p><li className="sbAccessibliltyFontSize">NFC-e (Nota Fiscal ao Consumidor Eletrônica): substitui o Cupom Fiscal e é emitida para clientes finais. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NFS-e;</a></li></p>
                            <p><li className="sbAccessibliltyFontSize">CT-e (Conhecimento de Transporte Eletrônico): utilizada para reconhecer serviços de transporte de carga;</li></p>
                            <p>É importante que o microempreendedor individual arquive as notas fiscais, pelo prazo de 05 anos, a contar da data de sua emissão. Garantindo assim a segurança e controle de faturamento.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Microempreendedor/Notasparaomei/capasecundaria.png"/></center>
                    </div>  
                </div>
                <div className="row"> 
                    <p>Simplifique suas operações! Cadastre-se agora mesmo para emitir NF-e, NFS-e e NFC-e automaticamente a cada venda ou prestação de serviço. Nosso sistema se conecta diretamente com a Secretaria da Fazenda (Sefaz) de cada estado e a prefeitura correspondente, agilizando a emissão da nota fiscal eletrônica. Não perca tempo, aproveite os benefícios de uma emissão de notas fiscais ágil e eficiente. Cadastre-se já!</p>
                </div>
                <div className="row">    
                    <div>  
                        <a href="https://bit.ly/cadastre-se-na-wcontec" className="btn btn-outline-primary btn-lg btn-tipos-de-notas-permitidas-para-o-mei" target="_blank"> Emitir nota fiscal</a>
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

export default Tiposdenotaspermitidasparaomei;