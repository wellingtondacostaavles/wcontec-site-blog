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
import './deducoeslegais-descontosimplificado.css';

function Deducoeslegaisdescontosimplificado(){
    return <div>
      <Navbar/>
      <Capa/>              
      
    <section id="deducoes-legais-desonto-simplificado">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Quais são as deduções legais no Imposto de Renda</h3>
                    </div>                    

                    <div className="row">
                        <p>Antes de optar entre deduções legais ou desconto simplificado na declaração do Imposto de Renda, é importante compreender dois conceitos fundamentais. As deduções legais consistem em pagamentos realizados que podem ser abatidos da base de cálculo dos rendimentos, tais como despesas com educação dos filhos, plano de saúde e previdência privada. É fundamental ter clareza sobre esses conceitos para tomar a melhor decisão possível e obter o máximo benefício fiscal permitido por lei.</p>
                        <p>Se você optar pelo modelo de declaração completa do Imposto de Renda, precisará classificar todas as suas despesas e apresentar as notas fiscais e recibos que comprovem cada gasto informado. Essa abordagem pode reduzir o valor do imposto a pagar ou mesmo garantir a restituição, dependendo do montante das deduções. Vale lembrar que essa modalidade de declaração pode ser mais trabalhosa, mas também pode gerar economia significativa na hora de acertar as contas com o fisco.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Cálculo do desconto simplificado</h3>
                    </div> 
                    <div className="row">
                        <p>O cálculo será feito de forma automática pelo próprio programa da Declaração de Imposto de Renda, e ao contrário das deduções legais, no desconto simplificado não podemos considerar as despesas informadas como dedução, em vez disso, é aplicado um desconto padrão de 20% sobre os rendimentos tributáveis, limitado a R$ 16.754,34 para o IR exercício de 2023, ano-calendário de 2022.</p>
                        </div>              
                </div>
             
            
            <div className="container">
                <div className="row">
                    <h3>Deduções legais</h3>
                    <p>Abaixo, você encontrará uma lista dos principais gastos dedutíveis na declaração do Imposto de Renda. É importante ressaltar que essas despesas podem ser deduzidas tanto quando se referirem a gastos próprios quanto a gastos com dependentes, desde que estes estejam incluídos na sua declaração como dependentes e não constem em outra declaração. Confira:</p>
                <div className="col-lg-6">                    
                    <p><li className="sbAccessibliltyFontSize">Despesas médicas: As despesas médicas estão entre as principais deduções permitidas na declaração do Imposto de Renda. Entre os gastos dedutíveis, destacam-se: consultas médicas particulares, cirurgias plásticas, hospitais, tratamentos odontológicos, fisioterapia, exames laboratoriais, serviços radiológicos, aparelhos ortopédicos, próteses dentárias e remédios prescritos e incluídos na conta hospitalar, dentre outros. Vale destacar que despesas médicas realizadas no exterior também podem ser deduzidas, sem limite e com dedução integral do IR. No entanto, alguns gastos não são dedutíveis, como as cirurgias estéticas de qualquer tipo, remoção de tatuagem sem pedido médico, despesas médicas cobertas pela apólice de seguro, despesas médicas de acompanhantes, exames de DNA, gastos com qualquer tipo de remédio comprado em farmácias (mesmo com receita) e gastos com passagens e hospedagens no exterior para tratamentos médicos.</li></p>
                    <p><li className="sbAccessibliltyFontSize">Despesas com educação: na declaração do Imposto de Renda, é possível deduzir as despesas com educação, porém, a dedução está limitada ao valor de R$ 3.561,50 por dependente. Não há limite para a inclusão dos dependentes, desde que comprovados.</li></p>
                </div>   
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF/Deducoeslegaisoudescontosimplificado/capasecundaria.png"/></center>
                    </div> 
                    <p> É importante destacar que somente podem ser deduzidos gastos com instrução, ou seja, despesas com: educação infantil (creches e pré-escolas); ensino fundamental e médio; educação superior (graduação, pós-graduação, mestrado, doutorado e especialização); ensino técnico; e especializações. Por outro lado, não são aceitas deduções para gastos com cursos de idiomas (como inglês, espanhol, etc.), academia, aulas de esportes, dança ou música, material escolar de qualquer tipo, transporte até a escola/instituição de ensino, tablet e aparatos de tecnologia que são usados na escola, cursinhos pré-vestibular, passeios da escola e viagens de intercâmbio.</p>
                    <p><li className="sbAccessibliltyFontSize">Despesas com dependentes: é possível abater o IR em R$ 2.275,08 por dependente. Para ser considerado dependente, é preciso que a pessoa se encaixe em algumas condições: filhos e enteados de até 21 anos ou, em qualquer idade, quando incapacitados para o trabalho; filhos e enteados até 24 anos que estejam no ensino superior ou escola técnica; irmão, neto, bisneto, desde que o contribuinte tenha a guarda judicial até 21 anos ou até 24 anos se estiver cursando o ensino superior; mãe, pai ou avós do contribuinte, sogro, sogra e cônjuge ou companheiro(a) desde que o contribuinte conviva há mais de cinco anos. É importante destacar que dependentes não podem aparecer em mais de uma declaração. Se um casal faz declarações separadas, os filhos e enteados devem constar apenas em uma delas.</li></p>
                    <p><li className="sbAccessibliltyFontSize">Plano de previdência: é possível abater do Imposto de Renda as contribuições feitas a um plano de previdência privada tipo PGBL, desde que respeitado o limite de 12% da renda bruta anual tributável. Se o contribuinte possuir mais de um plano de previdência, é necessário somar os rendimentos anuais na hora de declará-los. Na ficha “Pagamentos Efetuados” da declaração, utilizando o código 36, 37 ou 38, o próprio programa calcula o valor dedutível em cada caso e informa o contribuinte. É importante lembrar que a dedução só é válida para quem utiliza o modelo completo de declaração e que, no momento do resgate, tanto o principal quanto os rendimentos serão tributados. No caso do plano VGBL, porém, não é possível deduzir o valor das contribuições na declaração, mas a tributação no momento do resgate incidirá apenas sobre os rendimentos.</li></p>
                    <p><li className="sbAccessibliltyFontSize">Pensão alimentícia: o limite da dedução é de até 100% do valor da pensão registrado em contrato. O contribuinte que faz o pagamento da pensão alimentícia pode deduzir o gasto, desde que a pensão tenha sido definida através de uma decisão judicial ou por escritura pública (extrajudicial). Além disso, o contribuinte que paga a pensão do alimentando (filho que recebe o valor ou ex-cônjuge, por exemplo) pode também deduzir outras despesas, desde que definidas no acordo judicial. Por exemplo, um pai pode deduzir as despesas médicas ou educação do alimentando, desde que na decisão dada pelo juiz ele também seja responsável por arcar com esses custos - sempre seguindo os limites de valores e os critérios estabelecidos nas categorias de educação e saúde. No entanto, é importante destacar que o contribuinte que paga a pensão não pode incluir o alimentando também como dependente. Acordos pessoais também não podem entrar como dedução. Por exemplo, o pai paga a pensão dos filhos seguindo o acordo judicial, mas decide por conta própria pagar um valor extra. Esse valor excedente não pode ser deduzido, pois não faz parte da decisão judicial e não é reconhecido pelo Fisco. Além disso, a pessoa que detém a guarda do alimentando deve declarar o valor da pensão como rendimento tributável recebido de pessoa física.</li></p>
                    <p><li className="sbAccessibliltyFontSize">Livro-caixa: o livro-caixa do profissional autônomo também pode ser incluído com dedução integral. O que pode: gastos de profissionais autônomos que tiverem relação direta com o trabalho por eles exercido. Ou seja, qualquer gasto que ajude o profissional a obter seu rendimento pode valer. Por exemplo, despesas com aluguel de escritório, água, luz, telefone, material de expediente, e viagens com fins profissionais. Esse tipo de dedução é permitido somente ao trabalhador que não tem carteira assinada e é necessário que ele faça o controle desses gastos no livro-caixa, que é o documento onde o profissional vai registrar todas as receitas e despesas de seu negócio. Vale lembrar que esse tipo de profissional está sujeito ao pagamento de imposto via carnê-leão (recolhimento mensal de imposto) pelos rendimentos recebidos de pessoas físicas ao longo do ano. Assim, todo mês precisa recolher o imposto por meio do carnê.</li></p>
                    <p><li className="sbAccessibliltyFontSize">Doações: Limite da dedução: até 3% por doação ou até 6% somando todas as doações; o que pode ser deduzido: doações feitas:</li></p>
                    <p>a) aos fundos controlados pelos conselhos municipais, estaduais, distrital e nacional dos Direitos da Criança e do Adolescente, conforme o Estatuto da Criança e do Adolescente (ECA);</p>
                    <p>b) aos fundos controlados pelos conselhos nacional, distrital, estaduais ou municipais do Idoso;</p>
                    <p>c) ao Fundo Nacional de Cultura (FNC), à produções audiovisuais;</p>
                    <p>d) ao Programa Nacional de Apoio à Atenção da Saúde da Pessoa com Deficiência (Pronas/PCD);</p>
                    <p>e) ao Programa Nacional de Apoio à Atenção Oncológica (Pronon), entre outros.</p>
                    <p>O que não pode: qualquer outro tipo de doação que não seja destinada a instituições devidamente registradas em conselhos municipais, estaduais ou federais. Por exemplo, uma doação a um orfanato que não é credenciado pela prefeitura da cidade não pode ser deduzida. Para saber se a instituição é credenciada ou não, o contribuinte pode perguntar à instituição, buscar no site da instituição pelos logos da prefeitura ou do estado, ou mesmo buscar a prefeitura ou o estado para confirmar.</p>
                    <p><li className="sbAccessibliltyFontSize">Honorários com advogados: Limite total da dedução: 100% do valor total do gasto com o advogado. O que pode: despesas que o contribuinte teve com um advogado, se ganhou uma ação judicial que lhe deu algum rendimento tributável. Apenas nesse caso o Fisco aceita a dedução dos gastos com o profissional. O que não pode: qualquer despesa com advogado em uma ação que não tenha rendimento tributável. Por exemplo, a contratação de um advogado que tem como objetivo gerir um inventário não é dedutível.</li></p>
                    </div>
                    
            </div> 

            <div className="container">
                <div className="row"> 
                    <h3>Qual tipo de declaração escolher</h3>
                    <p>Depois de calcular seu total de despesas dedutíveis, você só precisa comparar o resultado com a sua renda para decidir entre o modelo completo ou o simplificado. A regra é muito simples: se suas despesas ultrapassam 20% da base de cálculo ou forem maior que R$ 16.754,34 (não é necessário ultrapassar os dois valores, mas apenas o que for menor), vale a pena fazer a declaração completa e optar pelas deduções legais — do contrário, é melhor optar pelo desconto padrão de 20% no modelo simplificado.</p>
                    </div>  
            </div>

            <div className="container">
                    <div className="row"> 
                        <h3>Confirme sua opção no programa do IR</h3>
                        <p>O próprio programa IR mostra qual a melhor escolha para o contribuinte. Se quiser comparar as opções com deduções legais e desconto simplificado, é só seguir os passos abaixo:</p>
                        <p><li className="sbAccessibliltyFontSize">Preencha todas as despesas, como se estivesse fazendo o modelo completo</li></p>
                        <p><li className="sbAccessibliltyFontSize">Quando terminar de preencher, selecione a janela “Opção pela Tributação” no canto inferior esquerdo</li></p>
                        <p><li className="sbAccessibliltyFontSize">Compare o valor da tributação “por deduções legais” e “por desconto simplificado” (basta clicar no desconto para ver como ficaria simplificado)</li></p>
                        <p><li className="sbAccessibliltyFontSize">Escolha a opção com o imposto menor ou restituição maior.</li></p>
                        </div>
                </div>
            <div className="container">
                    <div className="row"> 
                        <p></p>
                        <p>Terça-feira 15 de março de 2023</p>
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

export default Deducoeslegaisdescontosimplificado;
