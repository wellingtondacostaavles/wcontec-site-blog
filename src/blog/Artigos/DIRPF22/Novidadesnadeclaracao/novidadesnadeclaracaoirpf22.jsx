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
import './novidadesnadeclaracaoirpf22.css';

function Novidadesnadeclaracaoirpf22(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="novidades-na-declaracao-irpf-22">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Novidades na Declaração do Imposto de Renda 2023: pré-preenchida e prioridade na restituição.</h3>
                    </div>                    

                    <div className="row">
                        <p>A declaração pré-preenchida proporciona uma experiência mais completa do que a simples importação de dados da declaração do ano anterior. Ela permite obter informações atualizadas da base de dados da Receita Federal sobre bens, salários e pagamentos do contribuinte em 2022. Saiba mais sobre essa e outras novidades na declaração do Imposto de Renda deste ano.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Pix</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>A Receita Federal só permite que o CPF seja utilizado como chave Pix na declaração do Imposto de Renda. A medida é simples, pois a primeira informação solicitada pelo programa é o CPF do contribuinte. Caso haja erro na digitação, a declaração não pode ser concluída.</p>
                        <p>Para informar a chave Pix na declaração do Imposto de Renda, o contribuinte deve acessar a tela "Início" e, no quadro "Imposto a Pagar", preencher o campo "Informações bancárias". É importante ressaltar que a opção de informar a chave Pix só estará disponível para aqueles que já possuem a chave cadastrada com o CPF.</p>
                        <p>Caso prefira, é possível informar a chave Pix na hora de entregar a declaração, antes de clicar em "Enviar". No momento de inserir ou confirmar os dados bancários, basta escolher a opção do Pix.</p>
                    </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Novidadesnadeclaracaoirpf22/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row"> 
                    <p>Também será possível usar o Pix para pagar o DARF emitido pelo programa ou pelo aplicativo do Imposto de Renda, com o Código QR (versão avançada do código de barras), facilitando o pagamento.</p>
                    <h3>Pensão alimentícia vai para Rendimentos Isentos</h3>
                    <p>A partir deste ano, a pensão alimentícia não é mais um rendimento tributado.</p>  
                    <p>A mudança na não incidência de imposto sobre valores recebidos por trabalhadores em caso de dispensa sem justa causa segue uma decisão do STF (Supremo Tribunal Federal) de 2022. Essa decisão foi explicada pela professora Alessandra Bichof, coordenadora do curso de Ciências Contábeis da FAE Centro Universitário em Curitiba (PR).</p>
                </div>
            </div>  

            <div className="container">
                <div className="row"> 
                    <h3>Autorização de acesso à pré-preenchida</h3>
                    <p>Uma das novidades deste ano é a opção para que outra pessoa possa acessar a declaração pré-preenchida e incluir ou corrigir informações. Essa autorização pode ser feita pelo aplicativo 'Meu Imposto de Renda' ou pela plataforma digital e-CAC.</p>
                    <p>Essa autorização já existia em 2022. Mas até o ano passado a pessoa ou profissional que preenche a declaração para outros só podia receber uma autorização por vez, e essa autorização só existia para o preenchimento manual.</p>
                </div>  
            </div>

            <div className="container">
                    <div className="row"> 
                        <h3>"Piso" para investimentos em Bolsa</h3>
                        <p>Neste ano, os investidores na Bolsa só precisam informar operações na declaração se tiverem negociado mais de R$ 40 mil, ou se tiveram lucro com pelo menos uma venda em 2022.</p>
                        <p>Embora os investidores na Bolsa só precisem informar suas operações na declaração se tiverem negociado mais de R$ 40 mil ou se tiverem obtido lucro com pelo menos uma venda em 2022, há outras situações que podem exigir a declaração de IRPF 2023. Por exemplo, se o investidor tiver tido rendimentos tributáveis acima de R$ 28.559,70 ou rendimentos isentos de mais de R$ 40, é obrigatório fazer a declaração. É importante estar atento a todas as regras que exigem a declaração, mesmo que a pessoa tenha investido na Bolsa abaixo do limite de R$ 40 mil.</p>
                    </div>
                </div>

            <div className="container">
                    <div className="row"> 
                        <h3>Criptoativos "puxados" na pré-preenchida</h3>
                        <p>Em 2023, a declaração pré-preenchida incluirá automaticamente todos os investimentos em criptoativos do contribuinte, com base nas informações fornecidas pelas empresas em seus informes, seguindo as orientações da Instrução Normativa 1.888/2019. Essa funcionalidade irá importar as informações dos investimentos em criptoativos, independentemente do saldo, proporcionando uma maior facilidade e agilidade na declaração.</p>
                        <p>A mudança implica no fim do limite mínimo anterior de R$ 5.000 que obrigava a informar esses investimentos.</p>
                        <p>Uma nova funcionalidade presente no IRPF 2023 deve gerar um grande volume de informações adicionais para a Receita. Contudo, é importante ressaltar que podem ocorrer lançamentos equivocados devido a informações incorretas fornecidas pelas exchanges. Por isso, é recomendável que os contribuintes revisem cuidadosamente seus dados pré-preenchidos antes de enviá-los à Receita, conforme orienta José Carlos Fernandes da Fonseca, Supervisor Nacional do Imposto de Renda.</p>
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

export default Novidadesnadeclaracaoirpf22;