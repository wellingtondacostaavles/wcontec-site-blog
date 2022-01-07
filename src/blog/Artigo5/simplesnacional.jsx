import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../Components/Parceiros/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo5/capa';
import Artigosrelacionados from '../Artigo5/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo5.css';

function Simplesnacional(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="simplesnacional">

        <div className="container">
            <div className="row"> 
                <h3>Simples Nacional, um sistema de tributação nacional mais simplificado</h3>
                <p>O Simples Nacional é o nome fantasia dado à um sistema de tributação nacional mais simplificado. Ele é simplificado porque consegue unir vários tributos em um só. Tributos da Receita Federal, estaduais e municipais.</p>
            </div> 
        </div>      
            
        
        <div className="container">
            <div className="row">                 
                <h3>Saiba se sua empresa pode se inscrever no Simples Nacional</h3>
                <p>Alguns fatores precisam ser observados, como faturamento, tipo de empresa, atividade, constituição societária, e o porte, que é definido pelo faturamento da empresa. Apenas Microempresas e Empresas de Pequeno Porte podem optar pelo Simples Nacional:</p>
                <p><li className="sbAccessibliltyFontSize">Microempresa (ME): até 360 mil reais de faturamento nos últimos 12 meses.</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresa de Pequeno Porte (EPP): de 360 mil reais a 4,8 milhões de reais de faturamento nos últimos 12 meses.</li></p>   
                <p>Vejamos abaixo outras condições que precisam ser atendidas se pretente enquadrar sua empresa no simples nacional, além do limite de faturamento, que é de até 4,8 milhões de reais anuais, temos:</p>
                <p><li className="sbAccessibliltyFontSize">Não possuir outra empresa no quadro societário: apenas pessoas físicas podem ser sócias</li></p>
                <p><li className="sbAccessibliltyFontSize">Não ser sócia de outra empresa: o CNPJ não pode participar do capital social de outra pessoa jurídica.</li></p>
                <p><li className="sbAccessibliltyFontSize">Caso os sócios possuam outras empresas, a soma do faturamento de todas elas não pode ultrapassar o limite de 4,8 milhões de faturamento</li></p>
                <p><li className="sbAccessibliltyFontSize">Não ser uma sociedade por ações (S/A)</li></p>
                <p><li className="sbAccessibliltyFontSize">Não possuir sócios que morem no exterior</li></p>
                <p><li className="sbAccessibliltyFontSize">Não possuir débitos com a Receita Federal, Estadual, Municipal e/ou Previdência.</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas com atividades permitidas em um dos anexos. Consulte a Tabela do Simples Nacional.</li></p>
                <p><li className="sbAccessibliltyFontSize">Micro e pequenas empresas (ME) e Empresas de pequeno porte (EPP).</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que não possuam débitos em aberto (aqueles sem negociação/parcelamento) com o Governo.</li></p>
             </div>
        </div>

                    
        <div className="container">
            <div className="row">
                <h3>Empresas que não podem solicitar a opção no Simples Nacional</h3>
                <p><li className="sbAccessibliltyFontSize">Empresas que possuam faturamento que exceda a R$ 4.8 milhões (ou proporcional para empresas novas) no ano calendário ou no anterior.</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que possuam um ou mais sócios com participação superior a 10% em empresa de Lucro Presumido ou Lucro Real e a soma do faturamento de todas empresas não ultrapasse R$ 4.8 milhões;</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas com um dos sócios com mais de uma empresa optante pelo Simples (Super Simples) e a soma dos faturamentos de todas suas empresas ultrapassa R$4.8 milhões</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que possuam pessoa jurídica (CNPJ) como sócio;</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que participam como sócias em outras sociedades;</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que estão em débito com o Instituto Nacional do Seguro Social (INSS), ou com as Fazendas Públicas Federal, Estadual ou Municipal, cuja exigibilidade não esteja suspensa;</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que possuam Filial ou representante de Empresa com sede no exterior;</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que são: Cooperativas (salvo as de consumo), sociedades por ações (S/A), ONGs, Oscip, bancos, financeiras ou gestoras de créditos / ativos;</li></p>
                <p><li className="sbAccessibliltyFontSize">Empresas que são resultantes ou remanescentes de cisão ou qualquer outra forma de desmembramento de pessoa jurídica que tenha ocorrido em um dos 5 anos-calendário anteriores.</li></p>
                               
                
                <div className="container">
                    <div className="row"> 
                        <div className="titulo">
                            <h3>Existe um limite de faturamento para empresas enquadradas no Simples Nacional?</h3>
                        </div>
                    </div>
                </div>

                 <div className="container">
                    <div className="row">
                        <div className="col-lg-6">             
                            <p>Sim, vejamos:</p>
                            <p>Já vimos que, o teto da receita bruta anual de uma empresa que pode ser cadastrada no Simples Nacional é de R$ 4,8 milhões.</p>            
                            <p>Levando em consideração os últimos 12 meses de faturamento bruto da empresa, sem descontos.</p>
                            <p>No início de atividade, no primeiro ano de existência o cálculo do faturamento acumulado é realizado por média, da seguinte forma:</p>
                            <p>1º mês: Faturamento do mês multiplicado por 12 meses</p>
                            <p>2° mês: Faturamento do primeiro mês multiplicado por 12 meses</p>
                            <p>3° mês: Média do faturamento do primeiro e segundo mês multiplicado por 12 meses</p>
                        </div> 
                        
                        <div className="col-lg-6">
                            <center><img src="/Images/Simplesnacional/capasecundaria.png" /></center>
                        </div>
                        
                        <div className="row">
                            <p>E assim por diante, até que a empresa complete 13 meses de funcionamento, quando o faturamento dos últimos 12 meses será sempre utilizado.</p>
                            <p>Faturamento acumulado acima de R$ 3,6 milhões</p>
                            <p>Vale ressaltar que, mesmo sendo optantes pelo Simples Nacional, empresas que faturam mais que R$ 3,6 milhões nos últimos 12 meses, terão o ISS e o ICMS recolhidos como as empresas de regime normal (não optantes).</p>
                            <p>Desta forma os impostos federais serão recolhidos no DAS – Documento de Arrecadação do Simples Nacional, e o ICMS e ISS terão guias geradas a parte, com as regras do Lucro Presumido e Real.</p>
                        </div>
                    </div>
                </div>
                
                
                <h3>Benefícios da empresa se do Simples Nacional</h3> 
                <p><li className="sbAccessibliltyFontSize">Tributação: Diversas atividades são menos tributadas em relação ao Lucro Presumido. A alíquota será definida pela atividade da sua empresa, especificada na Tabela do Simples.</li></p>    
                <p><li className="sbAccessibliltyFontSize">Pagamento de imposto unificado: Em uma única guia sua empresa paga o imposto, o DAS, falicitando sua vida que antes tinha de se desdobrar entre várias guias e periodicidades de pagamento diferentes.</li></p>    
                <p><li className="sbAccessibliltyFontSize">Contabilização Simplificada: Processo muito mais fácil para a contabilidade pois ele é isento de algumas declarações, como o SISCOSERV, Sped Contribuições, DCTF, e não precisa Certidões Negativas para fazer alterações contratuais.</li></p>    
                <h3>Outras vantagens do Simples Nacional?</h3>
                <p>Tabelas de alíquotas de reduzidas de impostos, que são calculadas de acordo com o faturamento do negócio. Antes da criação do Simples Nacional, as micro e pequenos empresas pagavam porcentagens maiores de tributos ao ter que optar pelo Lucro Presumido ou Real.</p>
                <p>Além disso, uma empresa Simples Nacional tem contabilidade simplificada e menos declarações em relação aos outros regimes, facilitando a gestão e rotina dos empreendedores. E mais: quem opta por esse enquadramento ainda pode receber benefícios em processos de licitação e na exportação de produtos. </p>    
                <h3>DAS (Documento de Arrecadação do Simples Nacional) o que é e para que ele serve?</h3> 
                <p>DAS é uma guia única de pagamento de impostos</p> 
                <p>É através do DAS que são recolhidos tributos como:</p> 
                <p><li className="sbAccessibliltyFontSize">Imposto de Renda de Pessoa Jurídica (IRPJ);</li></p>    
                <p><li className="sbAccessibliltyFontSize">Contribuição Social sobre o Lucro Líquido (CSLL);</li></p>    
                <p><li className="sbAccessibliltyFontSize">Programa de Integração Social (PIS);</li></p>    
                <p><li className="sbAccessibliltyFontSize">Contribuição para Financiamento da Seguridade Social (Cofins); </li></p> 
                <p><li className="sbAccessibliltyFontSize">Imposto sobre Produtos Industrializados (IPI);</li></p> 
                <p><li className="sbAccessibliltyFontSize">Imposto sobre a Circulação de Mercadorias e Serviços (ICMS);</li></p> 
                <p><li className="sbAccessibliltyFontSize">Imposto sobre Serviços (ISS);</li></p> 
                <p><li className="sbAccessibliltyFontSize">Contribuição Patronal Previdenciária (CPP).</li></p>                      
                <p>Veja que facilidade, em vez de ter que pagar diversas guias, cada em uma data diferente, você só precisa pagar uma contribuição mensal.</p> 
                <p>Quanto ao vencimento o DAS é sempre até o dia 20 de cada mês, e se dia 20 cair em um feriado ou final de semana, o vencimento será no próximo dia útil.</p>  
                <p>Detalhe muito importante, no caso de empresas em que o faturamento dos últimos 12 meses supere R$ 3,6 milhões, o ICMS e ISS serão cobrados em separado do DAS e incluirão as obrigações acessórias de uma empresa optante pelo Lucro Presumido ou Real. Desta forma apenas os tributos federais serão recolhidos pela guia única.</p> 
                <p>É importante mencionar que empresas do Simples poderá ter que recolher outras guias específicas para algumas operações como o diferencial de alíquotas e a substituição tributária para comércios e indústrias ou a retenção de impostos federais na contratação de serviços de empresas de regime normal.</p>
            
                           
                <div className="container">
                    <div className="row"> 
                        <div className="titulo">
                            <h3>Como minha empresa pode optar por ser do Simples Nacional?</h3>
                        </div>
                    </div>
                </div>              
               
               
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">             
                            <p>Este é praticamente o ultimo passo, pedir para ser enquadrado nesse regime tributário é uma ação que ocorrerá mais no fim do processo de abertura de um negócio. Depois de escolher, natureza jurídica, atividades e tantas outras decisões que somente um contator confiável pode te ajudar a tomar, chega a hora de solicitar o enquadramento.</p>
                            <p>Será necessário gerar um código de acesso ao portal para solicitar o enquadramento, o que exigirá o número do recibo da última declaração de imposto de renda pessoa física do sócio responsável pela empresa ou, caso não tenha sido obrigado a entregar a declaração, o número do título de eleitor.</p>            
                            <p>Importante: Empresas recem abertas tem um prazo para realizar a solicitação: 30 dias após a aprovação da inscrição municipal ou estadual, desde que não ultrapasse 180 dias da abertura do CNPJ, e para quem já tem o seu negócio e quer solicitar o enquadramento pode realizar a opção sempre em janeiro de cada ano.</p>
                        </div> 
                        
                        <div className="col-lg-6">
                            <center><img src="/Images/Simplesnacional/capasecundaria2.png" /></center>
                        </div>
                        
                        <div className="row">
                            <h3>Minha empresa pode ser excluída do Simples Nacional?</h3>                         
                            <p>Sim, se a sua empresa for enquadrada no Simples e durante o ano ultrapassar o faturamento permitido, incluir alguma atividade não permitida ou realizar qualquer alteração no contrato que seja impeditiva para este regime tributário, será obrigatório informar a Receita Federal e solicitar o desenquadramento, observando os prazos estabelecidos. Seguem alguns exemplos:</p>
                            <p><li className="sbAccessibliltyFontSize">Ultrapassar o faturamento em menos de 20% (R$ 5.760.000,00): Desenquadramento a partir de janeiro do ano seguinte.</li></p> 
                            <p><li className="sbAccessibliltyFontSize">Ultrapassar o faturamento em mais de 20% (R$ 5.760.000,00): Desenquadramento a partir do mês subsequente à ocorrência do excesso.</li></p> 
                            <p><li className="sbAccessibliltyFontSize">Inclusão de atividade impeditiva: Desenquadramento a partir do mês subsequente à inclusão.</li></p> 
                            <p>Claro, ainda existe uma série de exigências e obrigações fiscais a se cumprir, algumas até complicadas de se entender, como os anexos: mas é aí que o seu contador deve atuar! Esse profissional vai te ajudar a cumprir tudo corretamente para que você não tenha mais preocupações ao lidar com sua empresa.</p>                            
                        </div>
                    </div>
                </div>
                               
                
                <div className="container">
                    <div className="row"> 
                        <p>Fonte de informações: Blog da Contabilizei, um dos maiores portal de informações contábeis do Brasil</p>
                    </div>
                </div>    


                <div className="container">
                    <div className="row"> 
                        <div className="titulo">
                            <p>Gostou e achou interessante ter sua empresa enquadrada no Simples Nacional?</p>
                            <p>Podemos te ajudar, clica no botão abaixo e opte por abrir sua empresa de forma gratuita.</p>
                        </div>
                    </div>
                </div>   
            </div>                
        </div>          
           
    </section>
    <Artigosrelacionados/>
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Simplesnacional;