import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../../site/Components/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo8/capa';
import Artigosrelacionados from '../Artigo8/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo8.css';

function Diferencasmeieirelisluei(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="diferencasmeieirelisluei">

            <div className="container">
                <div className="row"> 
                    <h3>O que é?</h3>
                    <p>EI: Empresário Individual.</p>
                    <p>MEI: Microempreendedor Individual.</p>
                    <p>EIRELI: Empresa Individual de Responsabilidade Limitada.</p>
                    <p>SLU: Sociedade Limitada Unipessoal.</p>
                </div>
            </div>        
                    
                    
            <div className="container">
                <div className="row"> 
                    <h3>Diferenças importantes entre eles:</h3>
                    <p><li className="sbAccessibliltyFontSize">EI - Exerce uma atividade composta apenas pelo proprietário da empresa, e assim como a SLU, não precisa de sócios e não é preciso integrar um valor mínimo de Capital Social. O que diferencia da SLU é que o patrimônio pessoal do empreendedor fica atrelado ao patrimônio da empresa, isso significa que no caso de dívidas ou falência, todos os seus bens podem ser usados para quitação desses déficits. Quanto ao número de empregados que podem ser contratados, diferentemente do MEI, não há limite, ou seja o proprietário pode admitir quantos colaboradores forem necessários para o bom andamento da sua empresa. Agora cuidado! Na EI, profissões regulamentadas como corretor de imóveis, biomédico, jornalista, entre outras, não podem ser legalizadas nessa natureza jurídica, é bom pedir ajuda a seu contador.</li></p>
                    <p><li className="sbAccessibliltyFontSize">MEI - Trata-se tambem de uma empresa com apenas um proprietário, com algumas diferenças muito importante para as demais, o faturamento anual não pode ultrapassar R$ 81 mil, não pode ter sócios, nem ter participação em outra empresa. Além disso, esse modelo empresarial permite a contratação de apenas um empregado, que não pode receber menos que o piso salarial da sua categoria ou um salário mínimo. No entanto, nem todas as atividades econômicas são permitidas nesse tipo de empresa.</li></p>
                    <p><li className="sbAccessibliltyFontSize">EIRELI - Nesta modalidade há a necessidade de Capital Social correspondente a 100 salários mínimos vigentes na época da abertura da empresa, critério não obrigatório na Sociedade Limitada Unipessoal, abrangendo muito mais profissões e atividades econômicas que o MEI e a EI. Por isso, acaba sendo uma alternativa para empreendedores que não se encaixam nas exigências desses tipos de empresa.</li></p>
                    <p><li className="sbAccessibliltyFontSize">SLU - Na hipótese de sua atividade não se encaixar no MEI, nem a EI, e você não quer dispor do valor exigido para o Capital Social da Eireli, a melhor opção passa a ser a Sociedade Unipessoal, assim ela pode ser vista como uma mescla das principais vantagens dos outros tipos de empresa. Isso porque ela dispensa sócios, não exige valor mínimo para abertura, abrange diversas profissões, permite adesão ao Simples Nacional, entre várias outras vantagens.</li></p>
                </div>
            </div>    
            
                
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">   
                        <h3>Quanto preciso ter de capital social?</h3>                        
                        <p>MEI, EI e SLU: Não há exigencia de um valor mínimo.</p>
                        <p>EIRELI: Cem vezes o valor do salário mínimo vigente.</p>
                        <h3>Quanto posso faturar por ano?</h3>                        
                        <p>MEI: Até R$ 81 mil.</p>
                        <p>EI, EIRELI e SLU: Até R$ 4,8 milhões.</p>
                       <h3>Quanto a meu patrimônio?</h3>                        
                        <p>EI e MEI: Empresário individual, responde com bens pessoais por dívidas da empresa.</p>
                        <p>EIRELI e SLU: Responsabilidade limitada ao capital social da empresa, não pode envolver bens pessoais.</p>
                     </div>
                        <div className="col-lg-6">
                                <center><img src="/Images/Diferecasform/capasecundaria.png" /></center>
                            </div>
                        </div> 
                </div>   
                            
                    
          <div className="container">
                <div className="row">
                    <h3>Profissões permitidas</h3>                        
                    <p>MEI: Apenas algumas atividades permitidas.</p>
                    <p>EI: Não pode ser utilizada por profissionais com atividades regulamentadas como médicos, engenheiros e etc.</p>
                    <p>EIRELI e SLU: Aqui todas a profissoes são permitidas.</p>
                </div>
            </div>     

            <div className="container">
                <div className="row">
                    <p>Hoje no Brasil é determinado por lei, exceto o MEI, que as demais empresas precisam ter o acompanhamento mensal de um contador para que se possa evitar erros importantes que podem comprometer a obtenção do seu CNPJ, levar você a pagar mais impostos do que deve, entre vários outros transtornos.</p>
                    <p>A carga tributária brasileira se não é a maior, está entre as maiores do mundo, e isso com certeza é um fator que gera dificuldades as empresas, além das complicações de interpretações tributarias, com a variedade de impostos e formas de tributações: IPI, PIS, COFINS, IRPJ, CSLL, Simples, ICMS, ISS, Substituição Tributária, e ai por diante...</p>
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

export default Diferencasmeieirelisluei;