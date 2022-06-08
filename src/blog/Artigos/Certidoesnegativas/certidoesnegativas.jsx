import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import Capa from './capa';
import Artigos2 from '../../Components/Artigos/artigos2';
import Categorias from '../../Components/Categorias/categorias';
import Recomendados from '../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../site/Components/parceiros';
import Footer from '../../../site/Components/contato';
import './certidoesnegativas.css';

function Certidoesnegativas(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="certidoes-negativas">      
            
               <div className="container">
                    <div className="row"> 
                        <h3>Para que servem as certidões?</h3>
                        <p>Buscando uma comprovação que a empresa não possui pendências com órgãos federais, estaduais ou municipais no momento da emissão do documento, os bancos solicitam as certidões negativas de débitos.</p>
                        <h3>Veja como obter as certidões negativas de débitos da sua empresa de forma online</h3>
                        <p><li className="sbAccessibliltyFontSize">Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União - a Receita Federal é a responsável pela emissão desta certidão, e libera quando for verificada a regularidade fiscal do contribuinte quanto aos créditos tributários federais administrados pela Secretaria da Receita Federal do Brasil - RFB e quanto à Dívida Ativa da União administrada pela Procuradoria Geral da Fazenda Nacional – PGFN, a empresa não pode possuir pendências relativas a débitos, a dados cadastrais e à apresentação de declarações.</li></p>
                            <p>Clique no botão abaixo para emitir a Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União válida por 180 dias.</p>
                                <div className="col">
                                    <a href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir" className="btn btn-primary btn-certidoes-negativas" target="_blank">portal da Receita Federal</a>
                                </div>    
                            <p><li className="sbAccessibliltyFontSize">Certificado de regularidade do FGTS - Emitida pela Caixa Econômica Federal do Brasil, essa certidão serve para que o empresário possa relacionar-se com os órgãos da Administração Pública e com instituições oficiais de crédito. A empresa deve ter cumprido todas as obrigações legais junto ao Fundo de Garantia do Tempo de Serviço - FGTS, tanto no que diz respeito às contribuições quanto a empréstimos com recursos originários do FGTS.</li></p>
                            <p>Clique no botao abaixo para emitir o Certificado de regularidade do FGTS</p>
                                <div className="col">    
                                    <a href="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf" className="btn btn-primary btn-certidoes-negativas" target="_blank">portal da Caixa Econômica Federal</a>
                                </div>    
                            <p><li className="sbAccessibliltyFontSize">Certidão Negativa de Débitos Trabalhistas - Emitida pelo Tribunal Superior do Trabalho, essa certidão é baseada nas informações remetidas por todos os 24 Tribunais Regionais do Trabalho do país. A certidão será negativa se a empresa não estiver inscrita como devedora no Banco Nacional de Devedores Trabalhistas - BNDT.</li></p>
                            <p>A Certidão é nacional e tem validade de 180 dias. Para emitir, basta clicar no botão baixo e acessar o portal do Tribunal Superior do Trabalho e informar o CNPJ.</p>
                                <div className="col">
                                    <a href="https://www.tst.jus.br/certidao1" className="btn btn-primary btn-certidoes-negativas" target="_blank">portal do Tribunal Superior do Trabalho</a>
                                </div>
                        </div> 
                    <div className="row">
                        <p><li className="sbAccessibliltyFontSize">Certidão Negativa de Débito Estadual - esta será emitida quando for verificada a regularidade fiscal do contribuinte quanto aos créditos tributários estaduais administrados pela Secretaria Estadual da Fazenda de cada estado.</li></p>
                        <p>Emita a Certidão Negativa de Débito Estadual do estado desejado clicando no botão correspondente abaixo.</p>   
                        <div className="col-lg-6">                     
                            <a href="http://portalcidadao.riobranco.ac.gov.br/solicitacao-de-certidao/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Acre</a>
                            <a href="https://apl03.sefaz.al.gov.br/certidao/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Alagoas</a>
                            <a href="http://www.sefaz.ap.gov.br/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Amapá</a>
                            <a href="http://sistemas.sefaz.am.gov.br/GAE/mnt/dividaAtiva/certidaoNegativa/emitirCertidaoNegativaNaoContPortal.do" className="btn btn-primary btn-certidoes-negativas" target="_blank">Amazonas</a>
                            <a href="https://www.sefaz.ba.gov.br/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Bahia</a>
                            <a href="https://ww4.ceara.gov.br/organograma/sefaz/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Ceará</a>
                            <a href="https://www.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=482&codSubCategoria=134" className="btn btn-primary btn-certidoes-negativas" target="_blank">Distrito Federal</a>
                            <a href="https://internet.sefaz.es.gov.br/agenciavirtual/area_publica/cnd/emissao.php" className="btn btn-primary btn-certidoes-negativas" target="_blank">Espírito Santo</a>
                            <a href="https://www.economia.go.gov.br/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Goiás</a>
                            <a href="https://sistemas1.sefaz.ma.gov.br/portalsefaz/jsp/menu/view.jsf?codigo=16" className="btn btn-primary btn-certidoes-negativas" target="_blank">Maranhão</a>
                            <a href="https://www.sefaz.mt.gov.br/cnd/certidao/servlet/ServletRotd?origem=60" className="btn btn-primary btn-certidoes-negativas" target="_blank">Mato Grosso</a>
                            <a href="http://www.sefaz.ms.gov.br/servicos/certidao-negativa/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Mato Grosso do Sul</a>
                            <a href="http://www.fazenda.mg.gov.br/empresas/certidao_debitos/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Minas Gerais</a>
                            <a href="https://app.sefa.pa.gov.br/emissao-certidao/template.action" className="btn btn-primary btn-certidoes-negativas" target="_blank">Pará</a>
                            <a href="https://www.sefaz.pb.gov.br/servirtual/certidoes/emissao-de-certidao-de-debitos-empresa" className="btn btn-primary btn-certidoes-negativas" target="_blank">Paraíba</a>
                            <a href="http://www.cdw.fazenda.pr.gov.br/cdw/emissao/certidaoAutomatica" className="btn btn-primary btn-certidoes-negativas" target="_blank">Paraná</a>
                            <a href="https://efisco.sefaz.pe.gov.br/sfi_trb_gpf/PREmitirCertidaoNegativaNarrativaDebitoFiscal" className="btn btn-primary btn-certidoes-negativas" target="_blank">Pernambuco</a>
                            <a href="https://webas.sefaz.pi.gov.br/certidaonft-web/index.xhtml" className="btn btn-primary btn-certidoes-negativas" target="_blank">Piauí</a>
                            <a href="https://pge.rj.gov.br/divida-ativa/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Rio de Janeiro</a>
                            <a href="http://angicos.rn.leg.br/certidaoestad/" className="btn btn-primary btn-certidoes-negativas" target="_blank">Rio Grande do Norte</a>
                            <a href="https://www.sefaz.rs.gov.br/Site/MontaMenu.aspx?MenuAlias=m_sit_fis" className="btn btn-primary btn-certidoes-negativas" target="_blank">Rio Grande do Sul</a>
                            <a href="https://portalcontribuinte.sefin.ro.gov.br/Publico/certidaoNegativa.jsp" className="btn btn-primary btn-certidoes-negativas" target="_blank">Rondônia</a>
                            <a href="https://www.sefaz.rr.gov.br/empresa/certidao-negativa-de-debitos" className="btn btn-primary btn-certidoes-negativas" target="_blank">Roraima</a>
                            <a href="http://www.sef.sc.gov.br/servicos-orientacoes/diat/certid%C3%B5es-de-d%C3%A9bitos-estaduais-cnd" className="btn btn-primary btn-certidoes-negativas" target="_blank">Santa Catarina</a>
                            <a href="https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx" className="btn btn-primary btn-certidoes-negativas" target="_blank">São Paulo</a>
                            <a href="https://www.tjse.jus.br/portal/servicos/judiciais/certidao-online/solicitacao-de-certidao-negativa" className="btn btn-primary btn-certidoes-negativas" target="_blank">Sergipe</a>
                            <a href="https://www.to.gov.br/sefaz/cnd-certidao-negativa-de-debitos/7h3xx8lr88vg" className="btn btn-primary btn-certidoes-negativas" target="_blank">Tocantins</a>
                        </div>                  
                        <div className="col-lg-6">
                            <center><img src="/Images/Certidoesnegativas/capasecundaria.png"/></center>
                        </div>  
                    </div>
                    <div className="row">
                        <p><li className="sbAccessibliltyFontSize">Certidão Negativa de Tributos Mobiliários e Imobiliários - cada município tem a sua, expedida pela Prefeitura. Mas não são todas as cidades brasileiras que oferecem a funcionalidade pela internet. É baseada em dados constantes no Cadastro de Contribuinte Mobiliários, que inclui Pessoas Físicas e Jurídicas que exercem atividades em determinado município. O documento Mobiliário atesta a inexistência de débitos referentes ao Imposto sobre Serviços e a taxas relacionadas à prestação de serviços, enquanto o documento Imobiliário comprova que não existem dívidas relacionadas ao IPTU ou a outras taxas imobiliárias (como taxa de asfalto, taxa de conservação e coleta de lixo).</li></p>
                        <p>Para emitir a certidão, é recomendado acessar o portal da prefeitura da cidade onde a sua empresa está instalada e descobrir se a emissão pode ser feita pela internet.</p>
                    </div>              
                </div> 

            <div className="container">
                    <div className="row">
                        <p></p>
                        <p>Fonte de informações: blog contaazul - veja mais: <a href="https://blog.contaazul.com/saiba-como-tirar-5-certidoes-negativas-de-debitos-de-sua-empresa#:~:text=Para%20emitir%20a%20certid%C3%A3o%2C%20basta,informar%20o%20n%C3%BAmero%20do%20CNPJ." target="_blank" className="tabela-a">Certidões negativas habilitam participação em licitações.</a></p>
                    </div>
                </div>              
                        
    </section>
    <Artigos2/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Certidoesnegativas;