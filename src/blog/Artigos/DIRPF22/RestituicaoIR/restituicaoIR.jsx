import React from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import Capa from './capa';
import Artigos2 from '../../../Components/Artigos/artigos2';
import Categorias from '../../../Components/Categorias/categorias';
import Recomendados from '../../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../../site/Components/parceiros';
import Footer from '../../../../site/Components/contato';
import './restituicaoIR.css';

function RestituicaoIR(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="restituicao-IR">
                                   
                <div className="container">
                    <div className="row"> 
                        <p>Amanhã, dia (23), a partir das 10h, a Receita Federal irá abrir a consulta ao lote residual de restituição do Imposto de Renda de Pessoa Física referente ao mês de novembro. A medida contemplará 556.685 contribuintes entre os grupos prioritários e não prioritários.</p>
                    </div>                    

                    <div className="row">
                    <p>O crédito aos contribuintes será disponibilizado no dia 30 de novembro, totalizando o repasse de R$ 1,2 bilhão. Do total, R$ 607.928.834,99 serão transferidos aos contribuintes com prioridade legal, sendo que 15.889 contribuintes são idosos acima de 80 anos.</p>
                    <p>Já outros 115.654 são contribuintes com idades entre 60 e 79 anos, 10.306 contribuintes com alguma deficiência física ou mental, ou moléstia grave e 47.774 contribuintes cuja maior fonte de renda seja o magistério. Foram contemplados ainda 367.062 contribuintes não prioritários.</p>
                                                            
                    <div className="col-lg-6">
                    <p>Clique no botão abaixo e saiba se o seu nome está na lista</p>
                    <a href="https://solucoes.receita.fazenda.gov.br/Servicos/consrest/Atual.app/paginas/index.asp" className="btn btn-primary btn-restituicao-IR" target="_blank">Consultar na Receita Federal</a>
                    <h3>E se meu nome não estiver na lista?</h3>
                    <p>Caso os dados estejam corretos, a restituição será feita na conta bancária que o contribuinte assinalou na Declaração do Imposto de Renda, de forma direta ou por indicação da chave PIX. Se o valor não for disponibilizado será possível resgatá-lo em até um ano no Banco do Brasil.</p>
                    <p>O contribuinte poderá reagendar a disponibilização do crédito de valores pelo site do banco ou entrando em contato com o BB pelos telefones 4004-0001 (capitais), 0800-729-0001 (demais localidades) e 0800-729-0088 (telefone especial exclusivo para pessoas com deficiência auditiva).</p>
                    </div>                
                    <div className="col-lg-6">
                        <center><img src="/Images/DIRPF/RestituicaoIR/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row">
                    <p>Vale ressaltar que se o resgate da restituição não for realizado em um ano, o contribuinte poderá solicitá-lo pelo Portal e-CAC, disponível no site da Receita Federal, entrando no menu "Declarações e Demonstrativos > Meu Imposto de Renda" e clicando no ícone "Solicitar restituição não resgatada na rede bancária".</p>
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

export default RestituicaoIR;