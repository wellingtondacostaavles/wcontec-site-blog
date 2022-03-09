import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import Capa from './capa';
import Artigos2 from '../../Components/Artigos/artigos2';
import Categorias from '../../Components/Categorias/categorias';
import Recomendados from '../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../site/Components/parceiros';
import Footer from '../../../site/Components/contato';
import './novidadesnadeclaracaoirpf22.css';

function Novidadesnadeclaracaoirpf22(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="novidades-na-declaracao-irpf-22">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>Pix, Auxílio emergencial, Testes de Covid...</h3>
                    </div>                    

                    <div className="row">
                        <p>Foi dada a largada, na última segunda-feira dia 07-03-2022 começou o prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2022. Segundo a Receita Federal, a expectativa é que seja recebidas um número próximo ao registrado em 2021, quando superou os 34 milhões de documentos.</p>
                        <p>Uma mudança, que na verdade voltou a ser como era antes, é que o prazo de entrega da declaração será até 29 de abril. Mesmo com um tempo mais curto, tendo em vista que só se pôde baixar o programa da declaração no dia 07, não no fim de fevereiro por causa da operação padrão dos auditores fiscais da Receita Federal, o programa gerador da declaração no entanto, terá novidades tecnológicas.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Pix</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>Pela primeira vez, será possível receber a restituição do imposto de renda por Pix. O sistema instantâneo de pagamentos do Banco Central. De acrodo com a Receita, a ferramenta agilizará o pagamento das restituições nos casos em que houve mudança de conta bancária após a entrega da declaração. Isso porque o correntista pode transferir a chave Pix para conta diferente.</p>
                        <p>Com isso o Fisco informou que reduzirá o reagendamento de depósitos porque a conta informada na declaração mudou. Mas atenção, a Receita Federal adverte que a novidade só estará disponível para quem tem chave Pix associada ao número do CPF. Neste ano, ainda não será possível informar chaves Pix aleatórias, endereços de e-mail ou números de telefone.</p>
                        <p>A ordem da fila de pagamento das restituições não mudou, continuará a seguir as prioridades definidas em lei segundo a Receita Federal.</p>
                    </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Novidadesnadeclaracaoirpf22/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row"> 
                    <p>Também será possível usar o Pix para pagar o DARF emitido pelo programa ou pelo aplicativo do Imposto de Renda, com o Código QR (versão avançada do código de barras), facilitando o pagamento.</p>
                    <h3>Auxílio emergencial</h3>
                    <p>Dificilmente terá que devolver o auxílio emergencial quem conseguiu um emprego no ano passado . O contribuinte só precisará preencher a declaração e pagar imposto caso a soma dos rendimentos tributáveis tenha ultrapassado R$ 28.559,70 em 2021.</p>  
                    <p>De acordo com a Receita Federal, a mudança se deu por falta de previsão legal para a declaração deste ano. Em 2021, beneficiários do auxílio emergencial de 2020 que conseguiram emprego e tiveram rendimentos tributáveis acima de R$ 22.847,76 eram obrigados a entregar a declaração do Imposto de Renda e preencher uma Darf para devolver o valor recebido da União. A exigência constava da lei que criou o benefício em 2020.</p>
                </div>
            </div>  

            <div className="container">
                <div className="row"> 
                    <h3>Declaração pré-preenchida</h3>
                    <p>Até o ano passado, a declaração pré-preenchida só estava disponível a quem tem certificação digital. A partir de 2022, o recurso foi ampliado a quem tem conta nível prata ou ouro no Portal Gov.br. Recentemente, o centro virtual de atendimento da Receita Federal (e-CAC) elevou o nível de segurança para acessar o e-CAC por meio do login Gov.br.</p>
                    <p>A declaração pré-preenchida estará disponível a partir de 15 de março. Nesse tipo de declaração, o contribuinte recebe, no portal e-CAC, informações relativas a rendimentos, deduções, bens e direitos e dívidas e ônus reais obtidas por declarações repassadas por empresas, planos de saúde, instituições financeiras e companhias imobiliárias à Receita, cabendo apenas confirmar os dados ou alterar, incluir ou excluir informações necessárias.</p>
                    <p>Mas atenção! Apesar de dispensar a digitação dos dados, a declaração pré-preenchida exige que o contribuinte confira se as informações estão corretas, comparando com os informes de rendimentos e recibos recolhidos.</p>
                </div>  
            </div>

            <div className="container">
                    <div className="row"> 
                        <h3>Testes de covid</h3>
                        <p>A Receita esclareceu que a realização de testes de covid-19 poderá ser deduzida da declaração como despesa médica. A possibilidade, no entanto, só vale para os exames realizados em laboratório, com comprovação de pagamento. Testes comprados em farmácia não poderão ser deduzidos, nem se o contribuinte tiver a nota fiscal.</p>
                        <p>Na ficha “Pagamentos efetuados”, o contribuinte deverá digitar o código “21” (para laboratórios) e “10” (para exames com médicos), inserir o preço e o Cadastro Nacional de Pessoas Jurídicas (CNPJ), no caso de teste em laboratório, ou o CPF do médico, para exame com profissional particular, que consta no recibo.</p>
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

export default Novidadesnadeclaracaoirpf22;