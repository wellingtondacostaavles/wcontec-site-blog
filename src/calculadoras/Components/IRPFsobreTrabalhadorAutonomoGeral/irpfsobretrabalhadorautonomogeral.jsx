import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';

import './irpfsobretrabalhadorautonomogeral.css';

function IRPFsobreTrabalhadorAutonomoGeral(){  
    
    const currencyConfig = {
        locale: "pt-BR",
        formats: {
          number: {
            BRL: {
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      };
      
    const handleChange1 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro1(value);        
    };
    const handleChange4 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro4(value);        
    };
    const handleChange5 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro5(value);        
    };
    
    const [Rendimentos, setNro1] = useState(0);
    const [DeducoesLegais, setNro4] = useState(0);
    const [IRRF, setNro5] = useState(0);
    
    const [ReceitaBrua, setResultado3] = useState(0);
    const [operacaoReceitaBrua, setOperacao3] = useState('Somar');

    const [LucroTributavel, setResultado4] = useState(0);
    const [operacaoLucroTributavel, setOperacao4] = useState('Subtrair');

    const MostarTabelasCalculos = ReceitaBrua
    
    const comTabela = 'Mostrando Tabelas de Calculos'
    const semTabela = ''

    const MostrarTabelas = Tabelas(MostarTabelasCalculos)

        function Tabelas(MostarTabelasCalculos){
            if (MostarTabelasCalculos > 0.009){
                return comTabela
            } else {
            return semTabela
            }
        }     
    
    const SituacaoNaoObrigatoriedadedaDIRPF = LucroTributavel

    const naotaobrigada = 'Observação: Com base no valor do Rendimento Tributável encontrato, o trabalhador autônomo não está obrigado a apresentar a DIRPF'
    const taobrigada = ''

    const MostrarSituacaoNaoObrigatoriedadedaDIRPF = SituacaodaNaoObrigatoriedadedaDIRPF(SituacaoNaoObrigatoriedadedaDIRPF)

        function SituacaodaNaoObrigatoriedadedaDIRPF(SituacaoNaoObrigatoriedadedaDIRPF){
            if (SituacaoNaoObrigatoriedadedaDIRPF <= 28559.70) {
                return naotaobrigada
            } else {
            return taobrigada
            }
        }

    //Desconto Simplificado
    const [BaseCalculoDescontoSimplificado, setResultado5] = useState(0);
    const [operacaoBaseCalculoDescontoSimplificado, setOperacao5] = useState('Subtrair'); 
    
    const [ResultdoIRDescontoSimplificado, setResultado6] = useState(0); 
    const [operacaoResultdoIRDescontoSimplificado, setOperacao6] = useState('Subtrair');

    const BaseCalculoFaixaDescontoSimplificado = BaseCalculoDescontoSimplificado   

    const faixa1DescontoSimplificado = 0
    const faixa2DescontoSimplificado = (BaseCalculoFaixaDescontoSimplificado * 7.5 / 100) - 1713.58
    const faixa3DescontoSimplificado = (BaseCalculoFaixaDescontoSimplificado * 0.15) - 4257.57
    const faixa4DescontoSimplificado = (BaseCalculoFaixaDescontoSimplificado * 22.5 / 100) - 7633.51
    const faixa5DescontoSimplificado = (BaseCalculoFaixaDescontoSimplificado * 27.5 / 100) - 10432.32          
    
    const ValorIRDescontoSimplificado = ValorDeducaoDescontoSimplificado(BaseCalculoFaixaDescontoSimplificado)
    
        function ValorDeducaoDescontoSimplificado(BaseCalculoFaixaDescontoSimplificado){            
                if (BaseCalculoFaixaDescontoSimplificado <= 22847.76) {
                    return faixa1DescontoSimplificado
                } else if (BaseCalculoFaixaDescontoSimplificado <= 33919.80) {
                    return faixa2DescontoSimplificado
                } else if (BaseCalculoFaixaDescontoSimplificado <= 45012.60) {
                    return faixa3DescontoSimplificado
                } else if (BaseCalculoFaixaDescontoSimplificado <= 55976.16){
                    return faixa4DescontoSimplificado
                } else { 
                    return faixa5DescontoSimplificado
                }
            } 
    const Descontosimplificado = LucroTributavel   

    const desconto = (Descontosimplificado * 0.20)
    const limitededesconto = 16754.34
    
    const ValordoDescontoSimplificado = ValorDescontoSimplificado(Descontosimplificado)
    
        function ValorDescontoSimplificado(Descontosimplificado){            
                if (Descontosimplificado <= 83771.69) {
                    return desconto
                } else { 
                    return limitededesconto
                }
            }
             
    const PagarouRestituirDescontoSimplificado = ResultdoIRDescontoSimplificado

    const situacao1DescontoSimplificado = 'IR a restituir com base em Desconto Simplificado'
    const situacao2DescontoSimplificado = 'IR a pagar com base em Desconto Simplificado'
    const situacao3DescontoSimplificado = ''
        
        
    const SituacaoIRDescontoSimplificado = RestituirPagarDescontoSimplificado(PagarouRestituirDescontoSimplificado)

        function RestituirPagarDescontoSimplificado(PagarouRestituirDescontoSimplificado){
            if (PagarouRestituirDescontoSimplificado < 0){
                return situacao1DescontoSimplificado
            } else if (PagarouRestituirDescontoSimplificado > 0.004250000000183718){
                return situacao2DescontoSimplificado
            } else {    
            return situacao3DescontoSimplificado
            }
        }  
    
    //Deduções Legais
    const [BaseCalculoDeducoesLegais, setResultado7] = useState(0);
    const [operacaoBaseCalculoDeducoesLegais, setOperacao7] = useState('Subtrair');

    const [ResultdoIRDeducoesLegais, setResultado8] = useState(0); 
    const [operacaoResultdoIRDeducoesLegais, setOperacao8] = useState('Subtrair');
    
    const BaseCalculoFaixaDeducoesLegais = BaseCalculoDeducoesLegais   

    const faixa1 = 0
    const faixa2 = (BaseCalculoFaixaDeducoesLegais * 7.5 / 100) - 1713.58
    const faixa3 = (BaseCalculoFaixaDeducoesLegais * 0.15) - 4257.57
    const faixa4 = (BaseCalculoFaixaDeducoesLegais * 22.5 / 100) - 7633.51
    const faixa5 = (BaseCalculoFaixaDeducoesLegais * 27.5 / 100) - 10432.32          
    
    const ValorIRDeducoesLegais = ValorDeducaoDeducoesLegais(BaseCalculoFaixaDeducoesLegais)
    
        function ValorDeducaoDeducoesLegais(BaseCalculoFaixaDeducoesLegais){            
                if (BaseCalculoFaixaDeducoesLegais <= 22847.76) {
                    return faixa1
                } else if (BaseCalculoFaixaDeducoesLegais <= 33919.80) {
                    return faixa2
                } else if (BaseCalculoFaixaDeducoesLegais <= 45012.60) {
                    return faixa3
                } else if (BaseCalculoFaixaDeducoesLegais <= 55976.16){
                    return faixa4
                } else { 
                    return faixa5
                }
            } 
            
    const PagarouRestituirDeducoesLegais = ResultdoIRDeducoesLegais

    const situacao1DeducoesLegais = 'IR a restituir com base em Deduções Legais'
    const situacao2DeducoesLegais = 'IR a pagar com base em Deduções Legais'
    const situacao3DeducoesLegais = ''
        
        
    const SituacaoIRDeducoesLegais = RestituirPagarDeducoesLegais(PagarouRestituirDeducoesLegais)

        function RestituirPagarDeducoesLegais(PagarouRestituirDeducoesLegais){
            if (PagarouRestituirDeducoesLegais < 0){
                return situacao1DeducoesLegais
            } else if (PagarouRestituirDeducoesLegais > 0.004250000000183718){
                return situacao2DeducoesLegais
            } else {    
            return situacao3DeducoesLegais
            }
        }
    
    const calcular3 = () =>{  
        if (operacaoReceitaBrua=="Somar")
        return (parseFloat(Rendimentos));
    }
    const calcular4 = () =>{  
        if (operacaoLucroTributavel=="Subtrair")
        return (parseFloat(ReceitaBrua));
    }
    //Desconto Simplificado
    const calcular5 = () =>{  
        if (operacaoBaseCalculoDescontoSimplificado=="Subtrair")
        return ((parseFloat(LucroTributavel)) - (ValordoDescontoSimplificado));
    }
    const calcular6 = () =>{  
        if (operacaoResultdoIRDescontoSimplificado=="Subtrair")
        return (parseFloat(ValorIRDescontoSimplificado) - parseFloat(IRRF));
    }
    //Deduções Legais
    const calcular7 = () =>{  
        if (operacaoBaseCalculoDeducoesLegais=="Subtrair")
        return (parseFloat(LucroTributavel) - parseFloat(DeducoesLegais));
    }
    const calcular8 = () =>{  
        if (operacaoResultdoIRDeducoesLegais=="Subtrair")
        return (parseFloat(ValorIRDeducoesLegais) - parseFloat(IRRF));
    } 

    useEffect (() =>{setResultado3(calcular3())},[Rendimentos, operacaoReceitaBrua]);
    useEffect (() =>{setResultado4(calcular4())},[ReceitaBrua, operacaoLucroTributavel]);
    //Desconto Simplificado
    useEffect (() =>{setResultado5(calcular5())},[LucroTributavel, operacaoBaseCalculoDescontoSimplificado]);
    useEffect (() =>{setResultado6(calcular6())},[ValorIRDescontoSimplificado, IRRF, operacaoResultdoIRDescontoSimplificado]);
    //Deduções Legais
    useEffect (() =>{setResultado7(calcular7())},[LucroTributavel, DeducoesLegais, operacaoBaseCalculoDeducoesLegais]);
    useEffect (() =>{setResultado8(calcular8())},[ValorIRDeducoesLegais, IRRF, operacaoResultdoIRDeducoesLegais]);
      
        
        return <div>         
        
        <section id="irpf-sobre-trabalhador-autonomo-geral">  
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>DIRPF</h1>
                    <h2>Trabalhador Autônomo - Regra Geral</h2>
                    <p>Calcule o valor do imposto de renda pessoa física se você é um trabalhador autônomo</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-irpf-sobre-trabalhador-autonomo-geral">
                    
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="pro-labore-irpf-sobre-trabalhador-autonomo-geral">Rendimentos Recebidos</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="pro-labore-irpf-sobre-trabalhador-autonomo-geral" id="pro-labore-irpf-sobre-trabalhador-autonomo-geral" aria-label="Amount (to the nearest dollar)" value={Rendimentos} onChange={handleChange1}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Deducoeslegais-irpf-sobre-trabalhador-autonomo-geral">*Deduções Legais</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Deducoeslegais-irpf-sobre-trabalhador-autonomo-geral" id="Deducoeslegais-irpf-sobre-trabalhador-autonomo-geral" aria-label="Amount (to the nearest dollar)" value={DeducoesLegais} onChange={handleChange4}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="irrf-irpf-sobre-trabalhador-autonomo-geral">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="irrf-irpf-irpf-sobre-trabalhador-autonomo-geral" id="irrf-irpf-sobre-trabalhador-autonomo-geral" aria-label="Amount (to the nearest dollar)" value={IRRF} onChange={handleChange5}/>
                            </div>                     
                        </div>  
                    </div>
                </div>  
            </div>
            <div className="container">
                <div className="row text-center">
                <p><span className="segundo-p">*Saiba quais são as<a href="/blog-deducoes-legais-desconto-simplificado-irpf-22" target="_blank" className="terceiro-a"> Deduções Legais</a></span></p>
                </div>
            </div> 
            {MostrarTabelas ? <div>
            <div className="container">
                <div className="row text-center">
                    <div className="titulo-declaraco">
                        <h1>Como ficaria na declaração</h1>
                    </div>
                </div>              
                <div className="row text-center">                 
                    <div className="col-lg-6">
                            <h3>Desconto Simplificado</h3> 
                            <div className="table-irpf-sobre-trabalhador-autonomo-geral">
                            <table className="table table-responsive table-bordered">
                                <tr>
                                    <th className="width80"></th>
                                    <th className="width20"></th>                    
                                </tr>
                            <tbody>
                                <tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimento Tributável</p>
                                    </th>
                                    <td className="bi">{[LucroTributavel].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>
                                {SituacaoIRDescontoSimplificado ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Desconto Simplificado</p>
                                    </th>
                                    <td className="bi">{[ValordoDescontoSimplificado].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>: ''}
                                {SituacaoIRDescontoSimplificado ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Base de Calculo do Imposto</p>
                                    </th>
                                    <td className="bi">{[BaseCalculoFaixaDescontoSimplificado].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>: ''}
                                {SituacaoIRDescontoSimplificado ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Imposto Devido</p>
                                    </th>
                                    <td className="bi">{[ValorIRDescontoSimplificado].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>: ''}
                                {SituacaoIRDescontoSimplificado ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Imposto Retido na Fonte</p>
                                    </th>
                                    <td className="bi">{[IRRF].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>: ''}
                                <tr>
                                    {SituacaoIRDescontoSimplificado ?<th scope="row" className="tabela-p">
                                        <p>{SituacaoIRDescontoSimplificado}</p>
                                    </th> : ''}
                                    {SituacaoIRDescontoSimplificado ?<td className="bi">{[ResultdoIRDescontoSimplificado].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td> : ''}
                                </tr> 
                                </tbody> 
                            </table>
                            </div>
                        </div>
                   <div className="col-lg-6">
                            <h3>Deduções Legais</h3> 
                            <div className="table-irpf-sobre-trabalhador-autonomo-geral">
                            <table className="table table-responsive table-bordered">
                                <tr>
                                    <th className="width80"></th>
                                    <th className="width20"></th>                    
                                </tr>
                            <tbody>
                                <tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimento Tributável</p>
                                    </th>
                                    <td className="bi">{[LucroTributavel].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>
                                {SituacaoIRDeducoesLegais ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Deduções Legais</p>
                                    </th>
                                    <td className="bi">{[DeducoesLegais].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr> : ''}
                                {SituacaoIRDeducoesLegais ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Base de Calculo do Imposto</p>
                                    </th>
                                    <td className="bi">{[BaseCalculoFaixaDeducoesLegais].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr> : ''}
                                {SituacaoIRDeducoesLegais ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Imposto Devido</p>
                                    </th>
                                    <td className="bi">{[ValorIRDeducoesLegais].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr> : ''}
                                {SituacaoIRDeducoesLegais ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Imposto Retido na Fonte</p>
                                    </th>
                                    <td className="bi">{[IRRF].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr> : ''}
                                <tr>                                    
                                    {SituacaoIRDeducoesLegais ?<th scope="row" className="tabela-p">
                                       <p>{SituacaoIRDeducoesLegais}</p>
                                    </th> : ''}
                                    {SituacaoIRDeducoesLegais ?<td className="bi">{[ResultdoIRDeducoesLegais].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td> : ''}
                                </tr>
                                </tbody> 
                            </table>
                        </div> 
                    </div>
                    <p><span className="segundo-p">{MostrarSituacaoNaoObrigatoriedadedaDIRPF}</span></p>
                    {SituacaoIRDescontoSimplificado ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora simula quanto seria o valor do imposto, baixe o programa DIRPF no site da Receita Federal e faça sua declaração, ou contrate um profissional para te ajudar.</span></p> : ''} 
                </div>       
            </div>       
        </div> :''}  

        </section>       
      </div> 
    }
  
  export default IRPFsobreTrabalhadorAutonomoGeral;