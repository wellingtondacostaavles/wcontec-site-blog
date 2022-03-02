import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../Components/Contato/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo7/capa';
import Artigosrelacionados from '../Artigo7/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo7.css';

function Empresarioindividual(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="empresarioindividual">

            <div className="container">
                <div className="row"> 
                <p>Para quem está pensando em começar um negócio sozinho, um dos regimes possíveis é o Empresário Individual. Conhecido antigamente como “firma individual”, esse tipo societário é ideal para quem quer exercer em nome próprio uma atividade empresarial.</p>
                </div> 
            </div>      
            
        
            <div className="container">
                <div className="row">                 
                    <h3>O que é Empresário Individual?</h3>
                    <p>Empresário Individual é um tipo societário para empresas formadas apenas por um sócio. Neste regime, a responsabilidade do empresário é ilimitada; ou seja, ele pode responder com bens pessoais às obrigações assumidas pela empresa, por exemplo: se a empresa não tiver dinheiro para pagar uma ação trabalhista, o patrimônio da pessoa física deve ser usado para isso.</p>
                    <p>Essa, sem dúvida, pode ser considerada a maior desvantagem do Empresário Individual. Afinal, o patrimônio da pessoa física se confunde com o da pessoa jurídica.</p>
                </div>
            </div>     

            <div className="container">
                <div className="row"> 
                    <div className="titulo">
                        <h3>Quem pode ser Empresário Individual?</h3>
                    </div>
                </div>
            </div>   
                
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">   
                        <p>Toda pessoa física pode, desde que não exerca profissão intelectual (como médico, psicólogo e engenheiro por exemplo), essas profissões regulamentadas são consideradas autônomas. Assim só é permitido exercer atividade industrial, comercial ou prestação de serviços.</p>
                        <p>Caso os profissionais intelectuais queiram se tornarem “empresários” será necessário criar uma empresa que entregue os serviços ou produtos relacionados à profissão, como um hospital (no caso do médico) ou construtora (no caso do engenheiro). Caso contrário, devem ser autônomos ou constituir uma Sociedade Simples com dois ou mais sócios.</p>
                        <p>O Ministério do Trabalho disponibiliza em seu site uma lista de profissões regulamentadas não podem ser enquadradas como empresa individual, por exemplo, assistente social, biomédico, biólogo, corretor de imóveis, profissionais da enfermagem, jornalistas, entre outros.</p>
                        </div> 

                    <div className="col-lg-6">
                        <center><img src="/Images/Ei/capasecundaria.png" /></center>
                    </div> 
                </div>
            </div>           
                            
            <div className="container">
                <div className="row">     
                    <h3>Quais são as principais características do proprietário do EI?</h3>
                    <p><li className="sbAccessibliltyFontSize">Regime para quem quer exercer sozinho uma atividade empresarial, sem sócios, porém com a possibilidade de poder contratar um ou mais funcionários, se for necessário;</li></p>
                    <p><li className="sbAccessibliltyFontSize">Não existe capital social mínimo para começar; ou seja, não é preciso investir uma quantia mínima inicial no negócio, só é preciso ter mais de 18 anos ou ser uma pessoa emancipada;</li></p> 
                    <p><li className="sbAccessibliltyFontSize">Pode ser uma microempresa (e faturar até R$ 360 mil por ano) ou empresa de pequeno porte (e faturar até R$ 4,8 milhões por ano);</li></p>
                    <p><li className="sbAccessibliltyFontSize">O regime tributário pode ser Simples Nacional, Lucro Real ou Lucro Presumido;</li></p>
                    <p><li className="sbAccessibliltyFontSize">A razão social da empresa é o nome civil (completo ou abreviado) da pessoa física;</li></p>
                    <p><li className="sbAccessibliltyFontSize">A empresa só pode ser transferida para outra pessoa em caso de falecimento do dono ou por autorização judicial. Em todos os outros casos, como mudança de estado ou país do proprietário, é necessário fechar a empresa.</li></p>
                 </div>
            </div> 

            <div className="container">
                <div className="row"> 
                    <div className="titulo">
                        <h3>Quais são as vantagens e desvantagens de ser empresário individual?</h3>
                        <p>Vantagens:</p>
                        <p><li className="sbAccessibliltyFontSize">Limite de faturamento anual maior que o MEI;</li></p>
                        <p><li className="sbAccessibliltyFontSize">Não há limite para a contratação de funcionários;</li></p>
                        <p><li className="sbAccessibliltyFontSize">Não há valor mínimo exigido de Capital Social</li></p>
                        <p>Desvantagens:</p>
                        <p><li className="sbAccessibliltyFontSize">Não poder separar o patrimônio pessoal do patrimônio empresarial;</li></p>
                        <p><li className="sbAccessibliltyFontSize">A impossibilidade de transferir a titularidade da empresa para outra pessoa, ainda que por motivo de venda.</li></p>
                    </div> 

                    <div className="container">
                        <div className="row">                 
                            <h3>Qual a diferença entre Empresário Individual e MEI?</h3>
                            <p>Empresário Individual e MEI, o Microempreendedor Individual, não são a mesma coisa, e entender essas diferenças é essencial para saber qual o melhor formato para você.</p>
                            <p>MEI é um tipo de empresa para trabalhadores autônomos que faturam até R$ 81 mil por ano. Neste regime, o Microempreendedor Individual só pode exercer as atividades permitidas para a categoria. Além disso, só é permitido ter um empregado no máximo.</p>
                            <p>Já o Empresário Individual, por outro lado, pode ter um faturamento muito maior (até R$ 78 milhões, se o regime tributário for Lucro Presumido); se enquadrar como microempresa ou empresa de pequeno porte (EPP); e exercer praticamente qualquer atividade (exceto as profissões intelectuais, como advogado, arquiteto e médico).</p>
                        </div>
                    </div>   

                    <div className="container">
                        <div className="row">                 
                            <h3>Existe diferença entre Empresário Individual e EIRELI?</h3>
                            <p>Sim, a Empresa Individual de Responsabilidade Limitada, conhecida pela sigla EIRELI, é um tipo societário para quem está empreendendo sozinho, sem sócios, por isso “empresa individual”. Já a responsabilidade limitada vem do fato de que, nesta modalidade, o patrimônio da pessoa jurídica fica separado do da pessoa física – diferentemente do Empresário Individual, que tem responsabilidade ilimitada.</p>
                            <p>Para abrir uma EIRELI, o empreendedor precisa ter um capital social de pelo menos 100 salários mínimos vigentes na época da abertura da empresa. Hoje, por exemplo, esse valor seria de R$110 mil (considerando o salário mínimo de R$1.100).</p>
                            <p>Já o Empresário Individual, por outro lado, pode ter um faturamento muito maior (até R$ 78 milhões, se o regime tributário for Lucro Presumido); se enquadrar como microempresa ou empresa de pequeno porte (EPP); e exercer praticamente qualquer atividade (exceto as profissões intelectuais, como advogado, arquiteto e médico).</p>
                        </div>
                    </div>  

                    <div className="container">
                        <div className="row">                 
                            <h3>Como abrir uma empresa individual?</h3>
                            <p>Abrir uma empresa como Empresário Individual envolve muitas etapas e documentos, por isso pode ser importante contar com a ajuda de um profissional, para isso você encontra-rá mais em baixo um botão da área do cliente, convido a clicar e optar por abrir sua empresa de forma gratúita.</p>
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

export default Empresarioindividual;