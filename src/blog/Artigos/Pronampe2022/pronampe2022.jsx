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
import './pronampe2022.css';

function Pronampe2022(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="pronampe-2022">
                                   
                <div className="container">
                    <div className="row"> 
                        <p>Começou a nova fase do Pronampe nesta segunda-feira (25) e os interessados em contratar empréstimos já podem procurar as instituições financeiras.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>O que é o Pronampe 2022?</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>É uma nova fase de empréstimos para pequenas empresas com juros mais baixos e prazo maior para começar a pagar, criado em 2020 para socorrer empresários durante a pandemia o programa deste ano conta com mais benefícios, veja a quem se destina:</p>
                        <p><li className="sbAccessibliltyFontSize">MEI – Receita Bruta igual ou inferior a R$ 81 mil.</li></p>
                        <p><li className="sbAccessibliltyFontSize">Microempresa – Receita Bruta igual ou inferior a R$ 360 mil.</li></p>
                        <p><li className="sbAccessibliltyFontSize">Empresa de Pequeno Porte – Receita Bruta superior a R$ 360.000,00 e igual ou inferior a R$ 4.800.000,00.</li></p>
                        <p>Desde a criação até essa nova fase houveram algumas mudanças, podemos destacar duas importantíssimas, a inclusão do microempreendedor individual (MEI) e empresas de médio porte, e a norma que determina a necessidade do compartilhamento de informações sobre o faturamento do pequeno negócio, onde só após isso o empresário poderá negociar o empréstimo com a instituição financeira de sua preferência. Mais detalhes adiante.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Pronampe2022/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row">
                 <h3>Como solicitar</h3> 
                 <h5>O Pronampe está disponível em várias instituições financeiras</h5>   
                 <p>Para ter acesso ao crédito, é necessário compartilhar os dados de faturamento da sua empresa dentro do site da Receita Federal.</p>
                 <p><a href="#compartilha-receita-pronampe-2022" className="tabela-a">Clique e veja abaixo o passo a passo.</a></p>
                 <p>Se você é cliente Wcontec clique no botão abaixo “tenho interesse” para entrar em contato pelo WhatsApp e fazemos tudo juntos.</p>
                 <p>Se ainda não é cliente<a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="tabela-a"> clique aqui</a> e cadastre-se de graça em nossa plataforma, vá em solicitações e digite Pronampe que entraremos em contato.</p>
                 <p><a href="https://api.whatsapp.com/send?phone=5581996584830" target="_blank" className="btn btn-primary btn-restituicao-IR">Tenho Interesse</a></p>
                </div>
            </div> 

            <div className="container" id="compartilha-receita-pronampe-2022">
                    <div className="row">
                        <h3>Compartilha Receita - Pronampe 2022</h3>
                        <p>Compartilhe os dados da sua empresa no site da Receita Federal para solicitar o Pronampe.</p>
                        <h5>Acesse o e-CAC</h5>
                        <p>Clique aqui e faça o login pelo GOV.BR, acesse com o cpf do representante da empresa. Clique na em "outros" na aba superior. Selecione a opção "Autorizar o compartilhamento de dados" e depois "Nova autorização de compartilhamento de dados</p>
                        <h5>Informe seus dados</h5>
                        <p>Selecionar a opção "Informações sobre o faturamento da empresa" e digite o CNPJ da sua Empresa e o ano-calendário 2021.</p>
                        <h5>Selecione a vigência da autorização</h5>
                        <p>Esse é o prazo pelo qual a instituição financeira escolhida poderá consultar as informações compartilhadas.</p>
                        <h5>Insira os dados da instituição financeira</h5>
                        <p>Busque pelo nome da instituição financeira desejada ou pelo CNPJ da mesma.</p>
                        <h5>Autorização</h5>
                        <p>Clique em "autorizar" e insira o código numérico recebido no app GOV.BR. Pronto! Seus dados foram compartilhado com sucesso.</p>
                        <p><a href="https://cav.receita.fazenda.gov.br/autenticacao" target="_blank" className="btn btn-primary btn-restituicao-IR">Acessar o e-CAC</a></p>
                    </div>  
                </div>  

            <div className="container">
                    <div className="row">
                        <h3>Condições</h3>
                        <h5>Prazo</h5>
                        <p>Prazo total de 48 meses, sendo 11 de carência e 37 para pagamento.</p>
                        <h5>Taxa de juros competitiva</h5>
                        <p>Taxa de juros anual máxima correspondente à taxa Selic (Sistema Especial de Liquidação e de Custódia), acrescida de 6% a.a.</p>
                        <h5>Limite de contratação</h5>
                        <p>Até 30% do faturamento anual informado pela Receita Federal, limitado a R$ 150 mil por CNPJ, conforme capacidade de pagamento.</p>
                        <p>De acordo com o Ministério da Economia, a data de contratação da operação de crédito segue até 31 de dezembro de 2024. Até lá, o governo estima que R$ 50 bilhões possam ser emprestados para os pequenos negócios.</p>
                    </div>  
                </div>        

            <div className="container">
                    <div className="row">
                        <p></p>
                        <p>Fonte de informações: Caixa Economica Federal e Infomoney</p>
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

export default Pronampe2022;