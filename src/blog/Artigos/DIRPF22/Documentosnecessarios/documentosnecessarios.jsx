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
                        <p>Quem tem dependentes na declaração precisa informar o CPF de todos eles, inclusive das crianças. Se algum dos seus dependentes ainda não possui o CPF, solicite o documento em qualquer agência do Banco do Brasil, da Caixa Econômica Federal ou dos Correios.</p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Informe de rendimento das empresas</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>Empresas, bancos e corretoras de investimentos têm até 28 de fevereiro para enviar os informes de rendimentos de 2022 pelos Correios ou por e-mail ou disponibilizá-lo pela internet ou por aplicativo.</p>
                        <p>O informe de rendimentos da empresa mostra informações como rendimentos tributáveis (salários, por exemplo), contribuições ao INSS e rendimentos tributáveis exclusivamente na fonte (13º salário). Se for o caso, serão informados também o valor do IR já retido na fonte, os rendimentos isentos (como a venda das férias), eventuais contribuições para planos de previdência privada e despesas com planos de saúde e odontológico coletivos.</p>
                        <p>Quem foi demitido ou pediu demissão de uma empresa em 2021 também deve receber o informe de rendimentos do seu antigo empregador.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF22/Documentosnecessarios/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>
             
            
            <div className="container">
                <div className="row"> 
                    <h3>Informe de rendimento de bancos e corretoras</h3>
                    <p>O informe de rendimentos dos bancos e das corretoras mostra as operações e as posições financeiras de 2021, como valores depositados na conta e valores investidos em produtos financeiros e seus rendimentos.</p>
                    </div>
            </div> 

            <div className="container">
                <div className="row"> 
                    <h3>Extrato do INSS</h3>
                    <p>Aposentados podem acessar o extrato do INSS no Portal Meu INSS ou retirar o extrato nas agências do INSS, com agendamento prévio pela internet.</p>
                    </div>
            </div> 

            <div className="container">
                <div className="row"> 
                    <h3>Comprovante de rendimento e pagamento de aluguéis</h3>
                    <p>Quem paga ou recebe aluguéis também deve reunir documentos que detalham os valores. As imobiliárias podem fornecer esses comprovantes. Se o inquilino for pessoa física e os pagamentos foram feitos diretamente ao proprietário, sem o intermédio de imobiliárias, a comprovação junto à Receita é feita com os recibos dos depósitos bancários.</p>
                    </div>  
            </div>

            <div className="container">
                    <div className="row"> 
                        <h3>Recibos de médicos, dentistas e educação</h3>
                        <p>As despesas com médicos, dentistas e outros profissionais de saúde, exames, internações e planos de saúde podem ser deduzidas integralmente no Imposto de Renda. Separe todos os recibos, notas fiscais e boletos de despesas pagas ao longo do ano passado. Os papéis devem discriminar o nome do prestador, endereço, o serviço prestado, valor, CPF ou CNPJ de quem prestou o serviço, além do seu nome completo e CPF.</p>
                        <p>A Receita Federal também aceita a dedução de despesas com escolas de ensino fundamental, médio, superior, pós-graduação ou técnico. Junte os boletos ou recibos de pagamento, que devem trazer o nome da escola e o CNPJ, além do nome do aluno.</p>
                        </div>
                </div>
            <div className="container">
                    <div className="row"> 
                        <h3>Comprovantes de compra e venda de bens</h3>
                        <p>Quem vendeu ou comprou um carro, imóvel ou qualquer outro bem no ano passado deve ter em mãos o contrato, escritura, nota fiscal ou recibo. As principais informações dos comprovantes são nome e CPF/CNPJ de quem comprou ou vendeu, se o negócio foi pago à vista, a prazo ou financiado.</p>
                        <p>No caso de financiamento, anote também o nome banco, número do contrato, o montante financiado, número e valor das prestações, além do valor de entrada. Todos esses detalhes deverão ser descritos na declaração de bens.</p>
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
