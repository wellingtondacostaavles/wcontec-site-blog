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
import './documentosnecessarios.css';

function Documentosnecessarios(){
    return <div>
      <Navbar/>
      <Capa/>              
      
    <section id="documentos-necessarios">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>CPF dos dependentes</h3>
                    </div>                    

                    <div className="row">
                        <p>Na declaração do Imposto de Renda, é obrigatório informar o CPF de todos os dependentes, incluindo filhos. Caso algum dependente ainda não tenha CPF, é necessário solicitar o documento em uma agência do Banco do Brasil, Caixa Econômica Federal ou Correios. É importante lembrar que o processo de obtenção do CPF pode levar alguns dias, então é recomendável providenciar o documento com antecedência para evitar atrasos na declaração.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Informe de rendimento das empresas</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>Empresas, bancos e corretoras de investimentos têm até o dia 28 de fevereiro do ano seguinte ao ano-calendário para enviar aos seus clientes os informes de rendimentos, que contêm os valores dos ganhos auferidos no período. Esses informes podem ser enviados por correio, e-mail ou disponibilizados pela internet ou aplicativos.</p>
                        <p>O relatório de rendimentos de uma empresa contém informações sobre os rendimentos tributáveis, tais como salários, contribuições para o INSS e rendimentos tributáveis na fonte (como 13º salário). Além disso, o relatório pode incluir informações sobre o valor do Imposto de Renda retido na fonte, rendimentos isentos de impostos (como vendas de férias), contribuições para planos de previdência privada e despesas com plano de saúde e odontológico em grupo, se houver.</p>
                        <p>Todas as pessoas que foram demitidas ou pediram demissão de uma empresa em 2022 têm direito de receber um relatório de rendimentos do seu ex-empregador, contendo informações sobre os ganhos obtidos durante o período em que trabalharam na empresa, como salários, contribuições para o INSS, IR retido na fonte, rendimentos isentos de impostos e outras informações relevantes.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF/Documentosnecessarios/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>
             
            
            <div className="container">
                <div className="row"> 
                    <h3>Informe de rendimento de corretoras e bancos</h3>
                    <p>Os relatórios de resultados de bancos e corretoras fornecem informações detalhadas sobre o desempenho operacional e financeiro dessas instituições durante o ano de 2022. Eles incluem dados sobre a receita e despesa das empresas, bem como os valores depositados em contas e aplicados em produtos financeiros, tais como empréstimos, investimentos e seguros. O relatório também pode apresentar informações sobre a performance da empresa no mercado, como o volume de negociação de ações, cotações e índices financeiros.</p>
                    </div>
            </div> 

            <div className="container">
                <div className="row"> 
                    <h3>Extrato do INSS</h3>
                    <p>Acessando o Portal Meu INSS os aposentados podem consultar o extrato do INSS, ou retirar nas agências do INSS, com agendamento prévio pela internet.</p>
                    </div>
            </div> 

            <div className="container">
                <div className="row"> 
                    <h3>Comprovante de rendimento e pagamento de aluguéis</h3>
                    <p>Para fins de declaração do Imposto de Renda, é importante que o contribuinte que paga ou recebe aluguéis reúna os documentos que detalham os valores envolvidos. Caso a locação tenha sido intermediada por uma imobiliária, esta pode fornecer as informações necessárias. Já no caso em que o inquilino é pessoa física e os pagamentos foram realizados diretamente ao proprietário, sem a intervenção de uma imobiliária, a comprovação deve ser feita por meio dos recibos dos depósitos bancários, que devem ser apresentados à Receita Federal caso solicitado.</p>
                    </div>  
            </div>

            <div className="container">
                    <div className="row"> 
                        <h3>Recibos de educação, dentistas e outros médicos</h3>
                        <p>As despesas médicas, assim como outras despesas com profissionais de saúde, exames, internações e planos de saúde, podem ser integralmente deduzidas no Imposto de Renda. Para isso, é necessário juntar todos os recibos, notas fiscais e boletos referentes às despesas pagas no ano anterior. Esses documentos devem conter informações como o nome do prestador de serviço, endereço, serviço prestado, valor, CPF ou CNPJ do prestador do serviço, além do nome completo e CPF do contribuinte.</p>
                        <p>Também é possível deduzir as despesas com educação, incluindo escolas de ensino fundamental, médio, superior, pós-graduação ou técnico. Para isso, é necessário separar todos os boletos ou recibos de pagamento que contenham informações importantes como o nome da escola, seu CNPJ e o nome completo do aluno. Esses documentos devem ser mantidos em ordem e à disposição para eventual comprovação à Receita Federal.</p>
                        </div>
                </div>
            <div className="container">
                    <div className="row"> 
                        <h3>Comprovantes de compra e venda de bens</h3>
                        <p>Quem comprou ou vendeu um carro, imóvel ou qualquer outro bem em 2022 deve ter em mãos o contrato, escritura, nota fiscal ou recibo. É importante verificar se esses documentos contêm informações essenciais como o nome e CPF/CNPJ de quem comprou ou vendeu, data da transação, forma de pagamento (à vista, a prazo ou financiado), valor e eventualmente a descrição do bem transacionado. Certifique-se de manter esses documentos organizados e acessíveis para futuras consultas ou, se necessário, para comprovação perante a Receita Federal.</p>
                        <p>Em caso de financiamento, anote também o nome banco, número do contrato, o montante financiado, número e valor das prestações, além do valor de entrada. Todos esses detalhes deverão ser descritos na declaração de bens.</p>
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

export default Documentosnecessarios;
