import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';

import './irpfsobreautonomotrasportepassageiro.css';

function IRPFsobreAutonomoTrasportePassageiro(){  
    
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
    const handleChange2 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro2(value);        
    };
    const handleChange3 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro3(value);        
    };
    const handleChange4 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro4(value);        
    };
    const handleChange5 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro5(value);        
    };
    
    const [TransportedePassageiros, setNro1] = useState(0);
    const [Extras, setNro2] = useState(0);
    const [Promocoes, setNro3] = useState(0);  
    const [DeducoesLegais, setNro4] = useState(0);
    const [IRRF, setNro5] = useState(0);
    
    const [DeducaoQuarentaPorCento, setResultado1] = useState(0);
    const [operacaoDeducaoQuarentaPorCento, setOperacao1] = useState('Somar');

    const [TransportedePassageirosAposDeducao, setResultado2] = useState(0);
    const [operacaoTransportedePassageirosAposDeducao, setOperacao2] = useState('Subtrair');
  
    const [BaseCalculoAntesdaPresuncao, setResultado3] = useState(0);
    const [operacaoBaseCalculoBaseCalculoAntesdaPresuncao, setOperacao3] = useState('Somar');
    
    const [Presucao16, setResultado4] = useState(0);
    const [operacaoPresucao16, setOperacao4] = useState('Somar');

    const [LucroIsentoMei, setResultado5] = useState(0);
    const [operacaoLucroIsentoMei, setOperacao5] = useState('Somar');

    const [ReceitaBrua, setResultado6] = useState(0);
    const [operacaoReceitaBrua, setOperacao6] = useState('Somar');

    const [LucroTributavel, setResultado7] = useState(0);
    const [operacaoLucroTributavel, setOperacao7] = useState('Subtrair');

    const SituacaodosCalculos = LucroIsentoMei
    
    const comCalculo = 'Parcela do Faturamento ISENTA na DIRPF'
    const semCalculo = ''

    const MostrarCalculos = Calculos(SituacaodosCalculos)

        function Calculos(SituacaodosCalculos){
            if (SituacaodosCalculos > 0){
                return comCalculo
            } else {
            return semCalculo
            }
        }
    
    const SituacaoNaoObrigatoriedadedaDIRPF = LucroTributavel

    const naotaobrigada = 'Observação: Com base no valor do Rendimento Tributável encontrato, o MEI não está obrigado a apresentar a DIRPF'
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
    const [BaseCalculoDescontoSimplificado, setResultado8] = useState(0);
    const [operacaoBaseCalculoDescontoSimplificado, setOperacao8] = useState('Subtrair'); 
    
    const [ResultdoIRDescontoSimplificado, setResultado9] = useState(0); 
    const [operacaoResultdoIRDescontoSimplificado, setOperacao9] = useState('Subtrair');

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
    const [BaseCalculoDeducoesLegais, setResultado10] = useState(0);
    const [operacaoBaseCalculoDeducoesLegais, setOperacao10] = useState('Subtrair');

    const [ResultdoIRDeducoesLegais, setResultado11] = useState(0); 
    const [operacaoResultdoIRDeducoesLegais, setOperacao11] = useState('Subtrair');
    
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
    
    const calcular1 = () =>{  
        if (operacaoDeducaoQuarentaPorCento=="Somar")
        return (parseFloat(TransportedePassageiros) * 0.40);
    }
    const calcular2 = () =>{  
        if (operacaoTransportedePassageirosAposDeducao=="Subtrair")
        return (parseFloat(TransportedePassageiros) - parseFloat(DeducaoQuarentaPorCento));
    }
    const calcular3 = () =>{  
        if (operacaoBaseCalculoBaseCalculoAntesdaPresuncao=="Somar")
        return (parseFloat(TransportedePassageirosAposDeducao) + parseFloat(Extras) + parseFloat(Promocoes));
    }
    const calcular4 = () =>{  
        if (operacaoPresucao16=="Somar")
        return (parseFloat(BaseCalculoAntesdaPresuncao) * 0.16);
    }
    const calcular5 = () =>{  
        if (operacaoLucroIsentoMei=="Somar")
        return (parseFloat(Presucao16));
    }
    const calcular6 = () =>{  
        if (operacaoReceitaBrua=="Somar")
        return (parseFloat(TransportedePassageiros) + parseFloat(Extras) + parseFloat(Promocoes));
    }
    const calcular7 = () =>{  
        if (operacaoLucroTributavel=="Subtrair")
        return (parseFloat(ReceitaBrua) - parseFloat(DeducaoQuarentaPorCento) - parseFloat(LucroIsentoMei));
    }
    //Desconto Simplificado
    const calcular8 = () =>{  
        if (operacaoBaseCalculoDescontoSimplificado=="Subtrair")
        return ((parseFloat(LucroTributavel)) - (ValordoDescontoSimplificado));
    }
    const calcular9 = () =>{  
        if (operacaoResultdoIRDescontoSimplificado=="Subtrair")
        return (parseFloat(ValorIRDescontoSimplificado) - parseFloat(IRRF));
    }
    //Deduções Legais
    const calcular10 = () =>{  
        if (operacaoBaseCalculoDeducoesLegais=="Subtrair")
        return (parseFloat(LucroTributavel) - parseFloat(DeducoesLegais));
    }
    const calcular11 = () =>{  
        if (operacaoResultdoIRDeducoesLegais=="Subtrair")
        return (parseFloat(ValorIRDeducoesLegais) - parseFloat(IRRF));
    } 

    useEffect (() =>{setResultado1(calcular1())},[TransportedePassageiros, operacaoDeducaoQuarentaPorCento]);
    useEffect (() =>{setResultado2(calcular2())},[TransportedePassageiros, DeducaoQuarentaPorCento, operacaoTransportedePassageirosAposDeducao]);
    useEffect (() =>{setResultado3(calcular3())},[TransportedePassageirosAposDeducao, Extras, Promocoes, operacaoBaseCalculoBaseCalculoAntesdaPresuncao]);
    useEffect (() =>{setResultado4(calcular4())},[BaseCalculoAntesdaPresuncao, operacaoPresucao16]);
    useEffect (() =>{setResultado5(calcular5())},[Presucao16, operacaoLucroIsentoMei]);
    useEffect (() =>{setResultado6(calcular6())},[TransportedePassageiros, Extras, Promocoes, operacaoReceitaBrua]);
    useEffect (() =>{setResultado7(calcular7())},[ReceitaBrua, DeducaoQuarentaPorCento, LucroIsentoMei, operacaoLucroTributavel]);
    //Desconto Simplificado
    useEffect (() =>{setResultado8(calcular8())},[LucroTributavel, operacaoBaseCalculoDescontoSimplificado]);
    useEffect (() =>{setResultado9(calcular9())},[ValorIRDescontoSimplificado, IRRF, operacaoResultdoIRDescontoSimplificado]);
    //Deduções Legais
    useEffect (() =>{setResultado10(calcular10())},[LucroTributavel, DeducoesLegais, operacaoBaseCalculoDeducoesLegais]);
    useEffect (() =>{setResultado11(calcular11())},[ValorIRDeducoesLegais, IRRF, operacaoResultdoIRDeducoesLegais]);
      
        
        return <div>         
        
        <section id="irpf-sobre-autonomo-trasporte-passageiro">  
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>DIRPF</h1>
                    <h3>Motorista de transporte de passageiros</h3>
                    <h4>(Trabalhador Autônomo)</h4>
                    <p>Calcule o valor do imposto de renda pessoa física se você é um trabalhador autonômo que transporta passageiros</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-irpf-sobre-autonomo-trasporte-passageiro">
                    
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TransportedePassageiros-irpf-sobre-autonomo-trasporte-passageiro">Transp. de Passageiros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TransportedePassageiros-irpf-sobre-autonomo-trasporte-passageiro" id="TransportedePassageiros-irpf-sobre-autonomo-trasporte-passageiro" aria-label="Amount (to the nearest dollar)" value={TransportedePassageiros} onChange={handleChange1}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Extras-irpf-sobre-autonomo-trasporte-passageiro">Extras</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Extras-irpf-sobre-autonomo-trasporte-passageiro" id="Extras-irpf-sobre-autonomo-trasporte-passageiro" aria-label="Amount (to the nearest dollar)" value={Extras} onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Promocoes-irpf-sobre-autonomo-trasporte-passageiro">Promoções</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Promocoes-irpf-sobre-autonomo-trasporte-passageiro" id="Promocoes-irpf-sobre-autonomo-trasporte-passageiro" aria-label="Amount (to the nearest dollar)" value={Promocoes} onChange={handleChange3}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Deducoeslegais-irpf-sobre-autonomo-trasporte-passageiro">*Deduções Legais</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Deducoeslegais-irpf-sobre-autonomo-trasporte-passageiro" id="Deducoeslegais-irpf-sobre-autonomo-trasporte-passageiro" aria-label="Amount (to the nearest dollar)" value={DeducoesLegais} onChange={handleChange4}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="irrf-irpf-sobre-autonomo-trasporte-passageiro">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="irrf-irpf-sobre-autonomo-trasporte-passageiro" id="irrf-irpf-sobre-mei-transporte-passageiro" aria-label="Amount (to the nearest dollar)" value={IRRF} onChange={handleChange5}/>
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
            <div className="container">                
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    {MostrarCalculos ? <div className="table-irpf-sobre-autonomo-trasporte-passageiro">
                    <table className="table table table-responsive table-bordered">
                        <tr>
                            <th className="width80"></th>
                            <th className="width20"></th>                    
                        </tr>
                    <tbody>
                        <tr className="">
                            <th scope="row" className="tabela-p">
                                <p>Dedução de 40% - <a href="https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/51525535/do1-2018-11-23-decreto-n-9-580-de-22-de-novembro-de-2018-51525026" target="_blank" className="tabela-a">Decreto Federal nº 9.580/2018, art. 39, inciso II.</a></p>
                            </th>
                            <td className="bi">{[DeducaoQuarentaPorCento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                        </tr> 
                        <tr>
                            <th scope="row" className="tabela-p">
                                <p>Dedução de 16% - <a href="http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm" target="_blank" className="tabela-a">Art. 14, § 1º da LC 123/2006</a>, <a href="http://www.planalto.gov.br/ccivil_03/leis/l9249.htm" target="_blank" className="tabela-a">Art. 15, § 1º, Inciso II, letra a, da Lei 9.249/95.</a></p>
                            </th>
                            <td className="bi">{[LucroIsentoMei].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                        </tr>                
                        </tbody> 
                    </table>
                </div> :''}       
                        </div>
                    <div className="col-lg-4"></div>                         
            </div>  
        </div> 
        {MostrarCalculos ? <div>
            <div className="container">
                <div className="row text-center">
                    <div className="titulo-declaraco">
                        <h1>Como ficará na declaração</h1>
                    </div>
                </div>              
                <div className="row text-center">                 
                    <div className="col-lg-6">
                            <h3>Desconto Simplificado</h3> 
                            <div className="table-irpf-sobre-autonomo-trasporte-passageiro-declaracoes">
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
                                <tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimentos Isentos e Não Tributáveis.</p>
                                        <p>"Ficha 24 - Rendimentos bruto, até o máximo de 40%, da prestação de serviços decorrente do transporte de passageiros"</p>
                                    </th>
                                    <td className="bi">{[DeducaoQuarentaPorCento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimentos Isentos e Não Tributáveis.</p>
                                        <p>"Ficha 13 - Rendimentos de sócio ou titular de microempresa ou empresa de pequeno porte optante do Simples Nacional, exceto pro labore, alugéis e serviços prestados"</p>
                                        </th>
                                    <td className="bi">{[LucroIsentoMei].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
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
                            <div className="table-irpf-sobre-autonomo-trasporte-passageiro-declaracoes">
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
                                <tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimentos Isentos e Não Tributáveis.</p>
                                        <p>"Ficha 24 - Rendimentos bruto, até o máximo de 40%, da prestação de serviços decorrente do transporte de passageiros"</p>
                                    </th>
                                    <td className="bi">{[DeducaoQuarentaPorCento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimentos Isentos e Não Tributáveis.</p>
                                        <p>"Ficha 13 - Rendimentos de sócio ou titular de microempresa ou empresa de pequeno porte optante do Simples Nacional, exceto pro labore, alugéis e serviços prestados"</p>
                                        </th>
                                    <td className="bi">{[LucroIsentoMei].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
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
  
  export default IRPFsobreAutonomoTrasportePassageiro;