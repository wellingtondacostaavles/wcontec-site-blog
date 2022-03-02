import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../../site/Components/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo3/capa';
import Artigosrelacionados from '../Artigo3/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo3.css';

function Autonomo(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="autonomo">

        <div className="container">
            <div className="row"> 
                <h3>O Autônomo não está comprometido com um dever de obediência</h3>
                <p>Para todos os efeitos, o profissional autônomo não está comprometido com um dever de obediência, não recebendo ordens da pessoa que se beneficia com seu trabalho, no maximo cabe uma orientação como esse trabalho será feito.</p>
            </div> 
        </div>       
            
        <div className="container">
            <div className="row"> 
                <div className="titulo">
                    <h3>Vantagens e Desvantagens de ser um profissional autônomo</h3>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-6">    
                    <p>Uma boa vantagen é a possibilidade de definir seu próprio horário de atividades, sem seguir um modelo fixo definido por uma empresa ou patrão, tão pouco seguir um horário fixo para entrada e saída. Com isso é possível conciliar melhor as atividades profissionais com outras atividades.</p>
                    <p>O fato de não assumir vínculo empregatício, por outro lado nos faz dá de cara com uma importante desvantagem, os privilégios trabalhistas, como carteira assinada, 13º salário, férias, FGTS, folga semanal remunerada e horas extras, além de precisar pagar o INSS para garantir a aposentadoria.</p>
                    <p>Outra vantagen:</p>
                    <p>A carga tributária que é menos pesada e não ter que prestar obediência a uma figura superior, seguir uma hierarquia necessária em empresas.</p>   
                    </div>                
                <div className="col-lg-6">
                    <center><img src="/Images/Autonomo/capasecundaria.png" /></center>
                </div>
            </div>
        </div>

                    
        <div className="container">
            <div className="row">
                <h3>Espécies de trabalhadores autônomos</h3>
                <p>São duas espécies de trabalhadores autônomos:</p>
                <p>Prestadores de serviços de profissões regulamentadas como: nutricionista, psicólogo, advogado, médico, contabilista, engenheiro e outros registrados nos seus respectivos conselhos regionais de fiscalização profissional, e;</p>
                <p>Prestadores de serviços de profissões não regulamentadas, por exemplo: pintor, faxineiro, pedreiro, jornalistaencanador, digitador e outros assemelhados;</p>
                <h3> Contribuição para o INSS</h3>
                <p>As pessoas físicas que trabalham como autônomos têm o direito de se inscrever na Previdência Social e contribuir para o INSS para garantir, aposentadoria, salário-maternidade, auxílio-doença e etc.</p>
                <p>No site da Receita Federal o profissional autônomo tem acesso ao carnê para recolhimento do imposto para contribuição deve ser de 11% sobre o salário mínimo e de 20% quando se tratar de uma quantia maior.</p>
                <h3>Livro-caixa</h3>
                <p>Uma vantagem de atuar como autônomo é o fato de que é possível deduzir dos ganhos os gastos com despesas relativas à ocupação profissional tais como, as contas de aluguel, energia elétrica, telefone, água e outras. Além disso, quem trabalha em casa pode deduzir um quinto das suas despesas residenciais no imposto de renda.</p>
                <p>Mantendo os comprovantes, esses custos podem ser deduzidos no livro-caixa mensalmente e lançados do Carnê-Leão (para quem presta serviços para PF) ou na hora de preencher a Declaração de Ajuste Anual. Clicando no botão abaixo você será direcionado para a Área do Clinte, onde você encontrará uma plataforma de gestão financeira contendo varios livros contábeis ideis para gestão do seu negócio</p>            
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

export default Autonomo;