import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Capa from '../Artigo21/capa';
import Artigos from '../Components/Artigos/artigos';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigosrelacionados from '../Artigo20/artigosrelacionados';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../../site/Components/contato';
import './artigo21.css';
import Cardsvr from './cardsvr';

function Consultasaosistemavaloresareceberbcb(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="consulta-ao-sistema-valores-a-receber-bcb"> 

                <div className="container">
                    <div className="row"> 
                        <h3>As consultas ao sistema já estão liberadas</h3>
                        <p>O BC estima que R$ 6 bilhões estejam disponíveis para cerca de 38 milhões de pessoas físicas e 2 milhões de pessoas jurídicas.</p>
                        <p>Consulta de valores de pessoas falecidas é uma das novidades. Nesta nova fase também foram incluídas contas de pagamento pré ou pós-paga encerradas com saldo disponível, contas mantidas por corretoras e distribuidoras.</p>
                    </div>                
                </div>  

               <div className="container">
                    <div className="row">
                        <div className="col-lg-6">                            
                            <p>Mas não se preocupe, mesmo se você não consultar ou solicitar o resgate do saldo existente em todas essas datas, ele continuará guardado à sua espera.</p>
                            <p>Ressaltamos que não é possível consultar ou solicitar os valores no site principal do Banco Central NEM dentro do sistema Registrato. Todas as consultas e solicitações serão feitas exclusivamente em valoresareceber.bcb.gov.br.</p>
                            <p>Atenção: hoje basta seu CPF ou CNPJ, mas você precisará de um login Gov.br nível prata ou ouro para acessar o Sistema Valores a Receber na data e período agendados para consulta e resgate. NÃO será possível acessar o sistema com seu login Registrato. Se você ainda não tem login Gov.br, faça seu cadastro gratuito no site ou pelo App Gov.br (Google Play e App Store).</p>  
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Consultasaosistemavaloresareceberbcb/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row"> 
                        <p>Não caia em golpes! O único site para consulta e solicitação no sistema é o valoresareceber.bcb.gov.br onde você acessa clicando no link abaixo, o Banco Central não envia links e NINGUÉM está autorizado a entrar em contato com você em nome do Banco Central ou do Sistema Valores a Receber.</p>
                        <p></p>
                    </div>
                </div>  
            
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Fonte: Site do Banco Central do Brasil</p>
               </div>
            </div>     

           
    </section>
    <Cardsvr/>
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Consultasaosistemavaloresareceberbcb;