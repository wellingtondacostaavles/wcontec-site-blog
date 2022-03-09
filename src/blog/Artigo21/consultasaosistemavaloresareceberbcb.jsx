import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Capa from '../Artigo21/capa';
import Artigos2 from '../Components/Artigos/artigos2';
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
                        <h3>As datas serão agendadas!</h3>
                    </div>                   

                    <div className="row">
                            <p>Conforme o calendário abaixo. As datas serão agendadas de acordo com o ano de nascimento da pessoa ou da criação da empresa</p>
                        </div>  
                </div> 

            <div className="table-responsive">
            <table className="table text-center">
                <thead>
                <tr>
                    <th className="width40 alin">Data de nascimento (pessoa) ou de criação (empresa)</th>
                    <th className="width30">Período de agendamento (consulta e resgate)</th>
                    <th className="width30">Data de repescagem (para quem perder a data agendada)</th>
                </tr>
                </thead>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">Antes de 1968</th>
                    <td className="bi">07/03/2022 a 11/03/2022</td>
                    <td className="bi">12/03/2022</td>
                    </tr> 
                <tr>
                    <th scope="row" className="text-start">Entre 1968 e 1983</th>
                    <td className="bi">14/03/2022 a 18/03/2022</td>
                    <td className="bi">19/03/2022</td>
                    </tr>
                <tr>
                    <th scope="row" className="text-start">Após 1983</th>
                    <td className="bi">21/03/2022 a 25/03/2022</td>
                    <td className="bi">26/03/2022</td>
                    </tr>
            </tbody>          
            </table>
            </div>   

            <div className="container">
                    <div className="row"> 
                        <h3>Atenção quando receber a data!</h3>
                    </div>                   

                    <div className="row">
                            <p>Confira se você foi agendado(a) para o período de 4h às 14h ou de 14h às 24h. Consulte novamente sem problemas e receba a mesma informação caso você esqueça ou perca a data e o período.</p>
                            <p>Não deixe de voltar ao site valoresareceber.bcb.gov.br na data e período informados. Se não comparecer nessa data e período, você terá que voltar no sábado da repescagem, de acordo com o calendário acima. A repescagem vai funcionar durante todo o dia, das 4h às 24h.</p>
                            <p>Se você também perder seu sábado de repescagem, poderá consultar ou solicitar o resgate do saldo existente a partir de 28/03/2022.</p>
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
    <Artigos2/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Consultasaosistemavaloresareceberbcb;