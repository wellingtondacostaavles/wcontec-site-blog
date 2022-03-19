import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import Capa from './capa';
import Artigosrelacionados from './artigosrelacionados';
import Artigos2 from '../../Components/Artigos/artigos2';
import Categorias from '../../Components/Categorias/categorias';
import Recomendados from '../../Components/Recomendados/recomendados';
import Cardareadocliente from '../../Components/Cardareadoclente/cardareadocliente';
import Parceiros from '../../../site/Components/parceiros';
import Footer from '../../../site/Components/contato';
import './microempreendedor.css';

function Microempreendedor(){
    return <div>
      <Navbar/>
      <Capa/>
          
      
    <section id="microempreendedor">
                                   
                <div className="container">
                    <div className="row"> 
                        <h3>SIM Digital</h3>
                    </div>                    

                    <div className="row">
                        <p>Uma Medida Provisória (MP) assinada pelo presidente Jair Bolsonaro na última quinta-feira (17), durante cerimônia no Palácio do Planalto, idealizado pelo Ministério do Trabalho e Previdência, garantiu aos Microempreendedores individuais e trabalhadores informais acesso a uma nova modalidade de microcrédito, O programa Microcrédito Digital para Empreendedores - SIM Digital. A iniciativa pode alcançar cerca de 4,5 milhões de trabalhadores, entre pessoas físicas e MEIs.</p>
                        <p></p>
                    </div>  
                </div>       
            
               <div className="container">
                    <div className="row"> 
                        <h3>Limites e prazo para pagamentos</h3>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                        <p>Será de até R$ 1 mil para pessoa física e até R$ 3 mil para pessoa jurídica (MEI). No caso da pessoa física, o crédito terá uma taxa de juros será de 1,95% ao mês e o empréstimo poderá ser dividido em 24 parcelas. Já o crédito para o Microempreendedor individual terá juros de 1,99% ao mês, também com quitação em até 24 parcelas.</p>
                        <p>De acordo com Pedro Guimarães, presidente da Caixa Econômica Federal, a nova modalidade estará disponível a partir do dia 28 de março e as pessoas físicas poderão contratar o empréstimo diretamente pelo aplicativo Caixa Tem. Mesmo as pessoas que estejam com nome negativado para crédito poderão participar do programa.</p>
                        <p>No caso dos Microempreendedores individuais, inicialmente, a contratação de empréstimo só poderá ser feita nas agências da Caixa, de forma presencial. A expectativa que, posteriormente, o crédito também possa ser contratado de forma totalmente digital.</p>
                        </div>
                
                    <div className="col-lg-6">
                        <center><img src="/Images/Microempreendedor/Mircroempreendedorestemareceber/capasecundaria.png"/></center>
                    </div>  
                </div>              
            </div>

            <div className="container">
                <div className="row"> 
                    <p>O governo garante que o programa não tem impacto fiscal e utilizará R$ 3 bilhões em recursos do Fundo de Garantia por Tempo de Serviço (FGTS) para aquisição de cotas do Fundo Garantidor de Microfinanças (FGM) como forma de mitigar os riscos das operações.  A nova modalidade é voltada para pessoas sem histórico creditício e que, por isso, têm dificuldade de obter financiamento em bancos e instituições financeiras convencionais.</p>
                    </div>
            </div>  

            <div className="container">
                    <div className="row"> 
                        <p></p>
                        <p>Fonte de informações: AgênciaBrasil</p>
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

export default Microempreendedor;