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
                        <h3>Veja os tipos e como emitir nota fiscal</h3>
                        <p>Com o objetivo de comprovar a venda de produtos e serviços de uma empresa para uma pessoa física ou jurídica específica, foi estabelecida a necessidade da emissão da Nota Fiscal. Esse documento fiscal é indispensável para prestar contas e comprovar transações no momento do pagamento de impostos, além de reduzir custos e simplificar processos burocráticos. Como a emissão da nota fiscal se tornou obrigatória para a maioria das pessoas, atualmente existem diversos sistemas capacitados e práticos que podem auxiliá-lo nesse processo.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Tipos de notas fiscais</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>É fundamental conhecer os diversos tipos de notas fiscais antes de aprender como emitir uma nota fiscal, a fim de evitar multas e outras penalidades para o seu negócio.</p>
                        <p><li className="sbAccessibliltyFontSize">NF-e (Nota Fiscal de Produto): utilizada para venda de produtos. Este tipo de nota fiscal possui um número único de identificação, o DANFE (Documento Auxiliar da Nota Fiscal Eletrônica), que é impresso e acompanha o transporte das mercadorias. Assim, tanto o emitente quanto o destinatário têm acesso aos dados da transação de forma eletrônica e física. Requer um <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">sistema emissor de NF-e;</a></li></p>
                        <p><li className="sbAccessibliltyFontSize">NFS-e (Nota Fiscal de Serviço): utilizada por empresas que prestam serviços e tem como objetivo documentar as transações, permitindo o controle fiscal e a comprovação das atividades realizadas. Sua emissão é feita pelo site da prefeitura, seguindo a legislação específica de cada município. Também é possível utilizar<a href="https://www.wcontec.com.br" target="_blank" className="tabela-a"> sistemas emissores</a> automáticos para agilizar esse processo;</li></p>
                    </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Notasfiscais/capasecundaria.png"/></center>
                    </div>
                    <div>
                        <p><li className="sbAccessibliltyFontSize">NFC-e (Nota Fiscal ao Consumidor Eletrônica): é um documento fiscal digital que substitui o cupom fiscal impresso, sendo utilizado para registrar vendas diretas a consumidores finais. Emitida em tempo real, no ponto de venda, por meio de <a href="https://www.wcontec.com.br" target="_blank" className="tabela-a">software emissor</a>, ela simplifica os processos, reduz custos e traz agilidade. Destinada a consumidores não contribuintes de ICMS, possui um documento auxiliar com QR Code para consulta e verificação de autenticidade. A NFC-e está sujeita à legislação específica de cada estado e representa uma modernização do sistema fiscal, simplificando a burocracia e facilitando o acompanhamento das operações comerciais pelos órgãos fiscais;</li></p>
                        <p><li className="sbAccessibliltyFontSize">CT-e (Conhecimento de Transporte Eletrônico): trata-se de um documento fiscal digital que substitui os antigos documentos em papel relacionados ao transporte de cargas. Emitido eletronicamente, o CT-e registra as informações sobre a prestação de serviços de transporte, proporcionando agilidade, redução de custos e maior controle sobre as operações. Ele permite o acompanhamento em tempo real da carga e está sujeito às regulamentações específicas de cada estado. O CT-e traz benefícios como a rastreabilidade, fiscalização facilitada e transparência no transporte de mercadorias;</li></p>
                        <p><li className="sbAccessibliltyFontSize">MDF-e (Manifesto de Documentos Fiscais Eletrônicos): é um documento fiscal eletrônico que substitui os antigos manifestos em papel no transporte de cargas em operações interestaduais. Emitido eletronicamente, o MDF-e registra e acompanha as informações sobre o transporte, como emitente, destinatário, mercadorias e veículos envolvidos. Ele simplifica os processos, reduz custos e proporciona maior controle e segurança nas operações. O MDF-e está sujeito às regulamentações de cada estado e integra-se com outros documentos fiscais eletrônicos, como o CT-e, contribuindo para a transparência e eficiência do transporte de cargas.</li></p>
                    </div>      
                </div>              
            </div>

            <div className="container">
                <div className="row">
                    <p>Atenção para o microempreendedor individual (MEI) que está dispensado de emitir nota fiscal para transações com pessoas físicas. No entanto, quando ocorrer uma venda ou prestação de serviço para uma empresa, é necessário emitir a nota fiscal eletrônica. Por isso é importante conhecer os tipos de notas fiscais.</p> 
                    <p>Não perca tempo! Agora que você conhece os diferentes tipos de nota fiscal e o processo de emissão através de um sistema web, clique no botão abaixo e cadastre-se para emitir NF-e, NFS-e e NFC-e automaticamente a cada venda ou prestação de serviço. É fundamental ressaltar que esse sistema se conecta diretamente com o site da Secretaria da Fazenda (Sefaz) de cada estado e com a prefeitura correspondente durante a emissão da nota fiscal eletrônica. Simplifique suas operações e mantenha-se em dia com suas obrigações fiscais. Cadastre-se agora mesmo e desfrute dos benefícios de uma emissão de nota fiscal ágil e eficiente!</p>
                </div>
                <div className="row">    
                    <div>  
                        <a href="https://bit.ly/cadastre-se-na-wcontec" className="btn btn-outline-primary btn-lg btn-como-emitir-nota-fiscal" target="_blank"> Emitir nota fiscal</a>
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

export default Obrigatoriedadedeemitirnotafiscal;