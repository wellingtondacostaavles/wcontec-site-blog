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
                        <p>Aqueles com dependentes na declaração são obrigados a informar o CPF de todos os dependentes, inclusive filhos. Caso algum de seus dependentes ainda não possua CPF, solicite este documento em qualquer agência do Banco do Brasil, Caixa Econômica Federal ou Correios.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Informe de rendimento das empresas</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>Empresas, bancos e corretoras de investimentos têm até 28 de fevereiro para enviar seus relatórios de ganhos de 2022 por correio ou e-mail, pela internet ou por um aplicativo.</p>
                        <p>O relatório de rendimentos de uma empresa mostra informações dos rendimentos tributáveis ​como salários, contribuições para o INSS e rendimentos tributáveis ​​apenas na fonte (13º salário). Se for o caso, também serão comunicados o valor do IR retido na fonte, rendimentos isentos de impostos (como vendas de férias), eventuais contribuições para planos de previdência privada e despesas de plano de saúde e odontológico em grupo.</p>
                        <p>Qualquer pessoa que foi demitida ou pediu demissão da empresa em 2021 também deve receber um relatório de ganhos de seu ex-empregador.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF22/Documentosnecessarios/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>
             
            
            <div className="container">
                <div className="row"> 
                    <h3>Informe de rendimento de corretoras e bancos</h3>
                    <p>Os relatórios de resultados de bancos e corretoras mostram as condições operacionais e financeiras de 2021, como valores depositados em contas e valores aplicados em produtos financeiros e suas receitas.</p>
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
                    <p>O contribuinte que pagar ou receber aluguéis também deve reunir documentos que detalham os valores. As imobiliárias podem fornecer essas informações. O inquilino sendo pessoa física e que os pagamentos foram feitos diretamente ao proprietário, sem o intermédio de imobiliárias, a comprovação junto à Receita é feita com os recibos dos depósitos bancários.</p>
                    </div>  
            </div>

            <div className="container">
                    <div className="row"> 
                        <h3>Recibos de educação, dentistas e outros médicos</h3>
                        <p>As despesas com médicos e outros profissionais de saúde, exames, internações e planos de saúde podem ser deduzidas integralmente no Imposto de Renda. Junte todos os recibos, notas fiscais e boletos de despesas pagas ao longo do ano passado. Os papéis devem discriminar o nome do prestador, endereço, o serviço prestado, valor, CPF ou CNPJ do prestador do serviço, além do nome completo e CPF do contribuinte.</p>
                        <p>Também é válida a dedução de despesas com escolas de ensino fundamental, médio, superior, pós-graduação ou técnico. Separe todos os boletos ou recibos de pagamento, que devem trazer o nome da escola e o CNPJ, além do nome do aluno.</p>
                        </div>
                </div>
            <div className="container">
                    <div className="row"> 
                        <h3>Comprovantes de compra e venda de bens</h3>
                        <p>Quem comprou ou vendeu um carro, imóvel ou qualquer outro bem em 2021 deve ter em mãos o contrato, escritura, nota fiscal ou recibo. As principais informações dos comprovantes são nome e CPF/CNPJ de quem comprou ou vendeu, se o negócio foi pago à vista, a prazo ou financiado.</p>
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
