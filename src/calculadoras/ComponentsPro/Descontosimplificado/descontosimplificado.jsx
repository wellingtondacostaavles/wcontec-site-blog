import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';

import './descontosimplificado.css';

function Descontosimplificado(){
    
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

    const handleChange = (event, value, maskedValue) => {
        event.preventDefault();
        setNro1(value);        
    };
    const handleChange2 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro2(value);        
    };
    
    const [RendimentosTributaveis, setNro1] = useState(0);
    const [IRRF, setNro2] = useState(0);
    
    const [BaseCalculo, setResultado1] = useState(0);
    const [operacaoBaseCalculo, setOperacao1] = useState('Subtrair');  
    
    const [ResultdoIR, setResultado2] = useState(0); 
    const [operacaoResultdoIR, setOperacao2] = useState('Subtrair');  
    
    const BaseCalculoFaixa = BaseCalculo   

    const faixa1 = 0
    const faixa2 = (BaseCalculoFaixa * 7.5 / 100) - 1713.58
    const faixa3 = (BaseCalculoFaixa * 0.15) - 4257.57
    const faixa4 = (BaseCalculoFaixa * 22.5 / 100) - 7633.51
    const faixa5 = (BaseCalculoFaixa * 27.5 / 100) - 10432.32          
    
    const ValorIR = ValorDeducao(BaseCalculoFaixa)
    
        function ValorDeducao(BaseCalculoFaixa){            
                if (BaseCalculoFaixa <= 22847.76) {
                    return faixa1
                } else if (BaseCalculoFaixa <= 33919.80) {
                    return faixa2
                } else if (BaseCalculoFaixa <= 45012.60) {
                    return faixa3
                } else if (BaseCalculoFaixa <= 55976.16){
                    return faixa4
                } else { 
                    return faixa5
                }
            } 

    const Descontosimplificado = RendimentosTributaveis   

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
            

    const PagarouRestituir = ResultdoIR

    const situacao1 = 'O IR a restituir com base em Desconto Simplificado será de:'
    const situacao2 = 'O IR a pagar com base em Desconto Simplificado será de:'
    const situacao3 = ''
        
        
    const SituacaoIR = RestituirPagar(PagarouRestituir)

        function RestituirPagar(PagarouRestituir){
            if (PagarouRestituir < 0){
                return situacao1
            } else if (PagarouRestituir > 0.004250000000183718){
                return situacao2
            } else {    
            return situacao3
            }
        }
        
        const Desobrigatoriedade = BaseCalculo

        const situacao10 = 'Desobrigado'
        const situacao20 = ''
            
            
        const SituacaoDesobrigatoriedade = MostrarDesobrigatoriedade(Desobrigatoriedade)
    
            function MostrarDesobrigatoriedade(Desobrigatoriedade){
                if (Desobrigatoriedade <= 22847.76){
                    return situacao10                
                } else {    
                return situacao20
                }
            }      
                
    const calcular1 = () =>{  
        if (operacaoBaseCalculo=="Subtrair")
        return ((parseFloat(RendimentosTributaveis)) - (ValordoDescontoSimplificado));
    }

    const calcular2 = () =>{  
        if (operacaoResultdoIR=="Subtrair")
        return (parseFloat(ValorIR) - parseFloat(IRRF));
    }    
    
    useEffect (() =>{setResultado1(calcular1())},[RendimentosTributaveis, operacaoBaseCalculo]);
    useEffect (() =>{setResultado2(calcular2())},[ValorIR, IRRF, operacaoResultdoIR]);
    
        
        return <div>         
        
        <section id="desconto-simplificado">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>IRPF Desconto Simplificado</h1>
                    <p>Simule o valor do Imposto de Renda com base na declaração na forma de Desconto Simplificado</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-desconto-simplificado">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="RendimentosTributaveis-desconto-simplificado">Rendimento Tributável</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="RendimentosTributaveis-desconto-simplificado" id="RendimentosTributaveis-desconto-simplificado" aria-label="Amount (to the nearest dollar)"  onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="IRRF-desconto-simplificado">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="IRRF-desconto-simplificado" id="IRRF-desconto-simplificado" aria-label="Amount (to the nearest dollar)"  onChange={handleChange2}/>
                            </div>                     
                        </div> 
                    </div>                    
                </div>
            </div>      
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoIR}</h3>
                {SituacaoIR ? <h1>{[ResultdoIR].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> : ''}
                {SituacaoDesobrigatoriedade ? <p><span className="terceiro-p">Atenção: De acordo com os rendimentos informados, o contribuinte está desobrigado a apresentar a DIRPF.</span></p> :''}
                {SituacaoIR ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora simula quanto seria o valor do imposto, baixe o programa DIRPF no site da Receita Federal e faça sua declaração, ou contrate um profissional para te ajudar.</span></p> : ''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Descontosimplificado;