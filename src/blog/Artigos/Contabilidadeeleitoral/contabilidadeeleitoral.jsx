import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import Capa from './capa';
import Artigos from '../../Components/Artigos/artigos';
import Categorias from '../../Components/Categorias/categorias';
import Recomendados from '../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../site/Components/parceiros';
import Footer from '../../../site/Components/contato';
import './contabilidadeeleitoral.css';

function Contabilidadeeleitoral(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="contabilidade-eleitoral">    
        <div className="container">
            <div className="row"> 
                <h3>Contabilidade eleitoral ajudando na prestação de contas</h3>
                <p>O candidato a cargo político eletivo pode contar com uma contabilidade online para informar o que arrecadam ou gastam em campanha, e assim atender à justiça eleitoral. Uma contabilidade online ajuda a realizar os registros contábeis pertinentes, auxiliando o candidato e o partido na elaboração da prestação de contas, observando as normas estabelecidas pelo Conselho Federal de Contabilidade.</p>
                <h3>Prazos que o candidato a cargo político eletivo precisa atender</h3>
                <p><li className="sbAccessibliltyFontSize">Até 10 dias após a divulgação do CNPJ da campanha: é o prazo para a abertura da conta corrente na instituição financeira de sua escolha.</li></p>
                <p><li className="sbAccessibliltyFontSize">Até 72 horas: é o prazo para que sejam divulgadas as doações recebidas pela campanha.</li></p>
                <p><li className="sbAccessibliltyFontSize">De 09 a 13 de setembro será o prazo para a primeira prestação de contas, “parcial”, que deverá deve ser encaminhada para a Justiça Eleitoral.</li></p>
                <p><li className="sbAccessibliltyFontSize">De 03 de outubro à 01 de novembro deve ocorrer a prestação final das contas de todos os candidatos que não concorrem ao segundo turno.</li></p>
                <p><li className="sbAccessibliltyFontSize">De 31 de outubro à 19 de novembro deve ocorrer a prestação final das contas de todos os candidatos que disputarem o segundo turno.</li></p>
                
            <div className="row">
                <h3>Contabilidade eleitoral para as doações de partido político</h3>
                <div className="col-lg-6">                     
                <p>A contabilidade eleitoral tem como objetivo acompanhar o recebimento de doações para a campanha, envolvendo ou não recursos financeiros diretamente. A legislação determina que toda forma de doação precisa ser comprovada, o que depende da emissão de recibo. Isso acontece também a partir do SPCE, que veremos mais adiante.</p>
                <p>Para bens estimáveis em dinheiro, como não há relação com a conta bancária, a exigência na prestação de contas é de comprovação documental e é possível utilizar nota fiscal, contrato ou recibo para isso, só estão isentas de comprovação por recibo a cessão de bens móveis até R$ 4 mil e a cessão de veículo do candidato ou de parente até terceiro grau para uso pessoal na campanha.</p>
                <p>Vale salientar que a legislação não permite o recebimento de recursos sem identificação do CPF do doador, ainda que a ausência se justifique por erro da instituição financeira, desta forma o candidato deve devolver o valor recebido. No caso das doações com cartão de crédito, o recibo deve ser emitido no ato, mas cancelado posteriormente se houver estorno, desistência ou não confirmação da despesa do cartão.</p>
                </div>                  
                <div className="col-lg-6">
                    <center><img src="/Images/Artigos/Contabilidade-eleitoral/capasecundaria.png"/></center>
                </div>  
            </div>
            <div className="row">
                <h3>A contabilidade eleitoral online facilita na prestação de contas</h3>                                           
                <p>Sabemos que a eleição representa momentos de muita tensão para candidatos e demais envolvidos na campanha. Mas não dá para se descuidar da contabilidade eleitoral, já que erros na prestação de contas podem prejudicar o projeto político, então podemos contar com este sistema que realiza tarefas automatizadas e muito menos trabalho manual, e as chances de erros caem bastante.</p>
                <p>Clique no botão abaixo, cadastre-se e faça já sua contabilidade eleitoral online, utilizando uma solução com armazenamento em nuvem para realizar a gestão financeira do candidato em campanha. Dessa forma, os dados podem ser consultados de qualquer lugar, sem que haja o risco de perder alguma informação necessária para posterior declaração no sistema de Prestação de Contas Eleitorais.</p>
            </div>
            <div className="col">
                <a href="https://wcontec.osayk.com.br/#/cadastro" target="_blank" className="btn btn-success btn-corpo-contabilidade-eleitoral">Quero fazer minha contabilidade eleitoral online</a>
            </div>
            <div className="row">
                <h3>Sistema de Prestação de Contas Eleitorais (SPCE)</h3>
                <p>De acordo com a Resolução-TSE nº 23.607/2019, que dispõe sobre a arrecadação e os gastos de recursos por partidos políticos e candidatos e sobre a prestação de contas nas eleições de 2022, a prestação de contas deve ser elaborada por meio do Sistema de Prestação de Contas Eleitorais (SPCE).</p>
                <p>O SPCE-Cadastro é o sistema desenvolvido pela Justiça Eleitoral para auxiliar candidatos e partidos políticos na elaboração da prestação de contas de campanhas eleitorais e deverá ser instalado no computador do usuário para preenchimento das informações.</p>
                <p>Os dados inseridos no SPCE-Cadastro, relativos à movimentação de campanha, devem ser encaminhados à Justiça Eleitoral pela internet por meio do próprio sistema.</p>
            </div>                 
        </div> 
        </div> 
            <div className="container">
                <div className="row">
                    <p></p>
                    <p>Fonte de informações: blog contaazul - <a href="https://contadores.contaazul.com/blog/contabilidade-eleitoral-uma-oportunidade-para-empresas-contabeis" target="_blank" className="tabela-a">Contabilidade eleitoral: uma oportunidade para empresas contábeis.</a></p>
                </div>
            </div>              
    </section>
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Contabilidadeeleitoral;