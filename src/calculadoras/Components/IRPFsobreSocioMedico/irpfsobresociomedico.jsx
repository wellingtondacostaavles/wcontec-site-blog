import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';

import './irpfsobresociomedico.css';

function IRPFsobreSocioMedico(){  
    
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
    
    const [Prolabore, setNro1] = useState(0);
    const [Plantoesmedicos, setNro2] = useState(0);
    const [Bolsaresidencia, setNro3] = useState(0);  
    const [DeducoesLegais, setNro4] = useState(0);
    const [IRRF, setNro5] = useState(0);
    
    const [LucroIsento, setResultado1] = useState(0);
    const [operacaoLucroIsento, setOperacao1] = useState('Somar');

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
    
    const SituacaodosCalculos = LucroIsento
    
    const comCalculo = 'Parcela do Faturamento ISENTA na DIRPF'
    const semCalculo = ''

    const MostrarCalculos = Calculos(SituacaodosCalculos)

        function Calculos(SituacaodosCalculos){
            if (SituacaodosCalculos > 0.009){
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
    
    const calcular1 = () =>{  
        if (operacaoLucroIsento=="Somar")
        return (parseFloat(Bolsaresidencia));
    }
    const calcular3 = () =>{  
        if (operacaoReceitaBrua=="Somar")
        return (parseFloat(Prolabore) + parseFloat(Plantoesmedicos) + parseFloat(Bolsaresidencia));
    }
    const calcular4 = () =>{  
        if (operacaoLucroTributavel=="Subtrair")
        return (parseFloat(ReceitaBrua) - parseFloat(LucroIsento));
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

    useEffect (() =>{setResultado1(calcular1())},[Bolsaresidencia, operacaoLucroIsento]);
    useEffect (() =>{setResultado3(calcular3())},[Prolabore, Plantoesmedicos, Bolsaresidencia, operacaoReceitaBrua]);
    useEffect (() =>{setResultado4(calcular4())},[ReceitaBrua, LucroIsento, operacaoLucroTributavel]);
    //Desconto Simplificado
    useEffect (() =>{setResultado5(calcular5())},[LucroTributavel, operacaoBaseCalculoDescontoSimplificado]);
    useEffect (() =>{setResultado6(calcular6())},[ValorIRDescontoSimplificado, IRRF, operacaoResultdoIRDescontoSimplificado]);
    //Deduções Legais
    useEffect (() =>{setResultado7(calcular7())},[LucroTributavel, DeducoesLegais, operacaoBaseCalculoDeducoesLegais]);
    useEffect (() =>{setResultado8(calcular8())},[ValorIRDeducoesLegais, IRRF, operacaoResultdoIRDeducoesLegais]);
      
        
        return <div>         
        
        <section id="irpf-sobre-socio-medico">  
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>DIRPF</h1>
                    <h2>Médico</h2>
                    <h4>Proprietário de empresa ou firma individual</h4>
                    <p>Calcule o valor do imposto de renda pessoa física se você é um Médico sócio, ou proprietário de empresa ou firma individual</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-irpf-sobre-socio-medico">
                    
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="pro-labore-irpf-sobre-socio-medico">Pró-labore</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="pro-labore-irpf-sobre-socio-medico" id="pro-labore-irpf-sobre-socio-medico" aria-label="Amount (to the nearest dollar)" value={Prolabore} onChange={handleChange1}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="plantoes-medicos-irpf-sobre-socio-medico">Plantões médicos</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="plantoes-medicos-irpf-sobre-socio-medico" id="plantoes-medicos-irpf-sobre-socio-medico" aria-label="Amount (to the nearest dollar)" value={Plantoesmedicos} onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Bolsa-residencia-irpf-sobre-socio-medico">Bolsa residência</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Bolsa-residencia-irpf-sobre-socio-medico" id="Bolsa-residencia-irpf-sobre-socio-medico" aria-label="Amount (to the nearest dollar)" value={Bolsaresidencia} onChange={handleChange3}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Deducoeslegais-irpf-sobre-socio-medico">*Deduções Legais</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Deducoeslegais-irpf-sobre-socio-medico" id="Deducoeslegais-irpf-sobre-socio-medico" aria-label="Amount (to the nearest dollar)" value={DeducoesLegais} onChange={handleChange4}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="irrf-irpf-sobre-socio-medico">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="irrf-irpf-sobre-socio-medico" id="irrf-irpf-sobre-socio-medico" aria-label="Amount (to the nearest dollar)" value={IRRF} onChange={handleChange5}/>
                            </div>                     
                        </div>  
                    </div>
                </div>  
            </div>
            <div className="container">
                <div className="row text-center">
                <p><span className="segundo-p">*Veja quais são as<a href="/blog-deducoes-legais-desconto-simplificado-irpf-22" target="_blank" className="terceiro-a"> Deduções Legais</a></span></p>
                <p><span className="segundo-p">Fale com a gente caso não saiba quais foram seus Rendimentos<a href="https://bit.ly/3IWcXYn" target="_blank" className="whatsapp-fa"> <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a></span></p>
                </div>
            </div>
            <div className="container">                
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    {MostrarCalculos ? <div className="table-irpf-sobre-socio-medico">
                    <table className="table table table-responsive table-bordered">
                        <tr>
                            <th className="width80"></th>
                            <th className="width20"></th>                    
                        </tr>
                    <tbody>
                        <tr className="">
                            <th scope="row" className="tabela-p">
                                <p>Bolsa residência médica é não-tributáveil do imposto de renda de acordo com a - <a href="https://www.jusbrasil.com.br/topicos/26869385/paragrafo-1-artigo-26-da-lei-n-9250-de-26-de-dezembro-de-1995" target="_blank" className="tabela-a">Lei n. 9.250, de 26 de dezembro de 1995.</a></p>
                            </th>
                            <td className="bi">{[LucroIsento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                        </tr> 
                        </tbody> 
                    </table>
                </div> :''}       
                        </div>
                    <div className="col-lg-4"></div>                         
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
                            <div className="table-irpf-sobre-socio-medico">
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
                                {MostrarCalculos ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimentos Isentos e Não Tributáveis.</p>
                                        <p>"Ficha 02 - Bolsas de estudo e de pesquisa caracterizadas como doação, quando recebidas exclusivamente para proceder a estudos ou pesquisas, recebidas por médico-residente e por servidor da rede pública de educação profissional, científica e tecnológica que participe das atividades do Pronatec."</p>
                                    </th>
                                    <td className="bi">{[LucroIsento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>: ''}
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
                            <div className="table-irpf-sobre-socio-medico">
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
                                {MostrarCalculos ?<tr>
                                    <th scope="row" className="tabela-p">
                                        <p>Rendimentos Isentos e Não Tributáveis.</p>
                                        <p>"Ficha 02 - Bolsas de estudo e de pesquisa caracterizadas como doação, quando recebidas exclusivamente para proceder a estudos ou pesquisas, recebidas por médico-residente e por servidor da rede pública de educação profissional, científica e tecnológica que participe das atividades do Pronatec."</p>
                                    </th>
                                    <td className="bi">{[LucroIsento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                                </tr>: ''}
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
  
  export default IRPFsobreSocioMedico;