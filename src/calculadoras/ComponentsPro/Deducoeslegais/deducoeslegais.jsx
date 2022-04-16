import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';

import './deducoeslegais.css';

function Deducoeslegais(){    

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
    const handleChange3 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro3(value);        
    };

    const [RendimentosTributaveis, setNro1] = useState(0);
    const [DeducoesLegais, setNro2] = useState(0);
    const [IRRF, setNro3] = useState(0);
    
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
            
    const PagarouRestituir = ResultdoIR

    const situacao1 = 'O IR a restituir com base em Deduções Legais será de:'
    const situacao2 = 'O IR a pagar com base em Deduções Legais será de:'
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
        return (parseFloat(RendimentosTributaveis) - parseFloat(DeducoesLegais));
    }

    const calcular2 = () =>{  
        if (operacaoResultdoIR=="Subtrair")
        return (parseFloat(ValorIR) - parseFloat(IRRF));
    }    
    
    useEffect (() =>{setResultado1(calcular1())},[RendimentosTributaveis, DeducoesLegais, operacaoBaseCalculo]);
    useEffect (() =>{setResultado2(calcular2())},[ValorIR, IRRF, operacaoResultdoIR]);
    
        
        return <div>         
        
        <section id="deducoes-legais">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>IRPF Deduções legais</h1>
                    <p>Simule o valor do Imposto de Renda com base na declaração na forma de Deduções Legais</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-deducoes-legais">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="RendimentosTributaveis-deducoes-legais">Rendimento Tributável</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="RendimentosTributaveis-deducoes-legais" id="RendimentosTributaveis-deducoes-legais" aria-label="Amount (to the nearest dollar)"  onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3"> 
                            <label htmlFor="DeducoesLegais-deducoes-legais">Deduções Legais</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="DeducoesLegais-deducoes-legais" id="DeducoesLegais-deducoes-legais" aria-label="Amount (to the nearest dollar)"  onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="IRRF-deducoes-legais">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="IRRF-deducoes-legais" id="IRRF-deducoes-legais" aria-label="Amount (to the nearest dollar)"  onChange={handleChange3}/>
                            </div>                     
                        </div> 
                    </div>   
                </div>
            </div>            
            <div className="container">
                <div className="row text-center">
                {SituacaoDesobrigatoriedade ? <p><span className="terceiro-p">Atenção: De acordo com seus rendimentos a DIRPF está dando Isenta do imposto.</span></p> :''}
                <h3>{SituacaoIR}</h3>
                {SituacaoIR ? <h1>{[ResultdoIR].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> : ''}
                <p><span className="segundo-p">Saiba quais são as<a href="/blog-deducoes-legais-desconto-simplificado-irpf-22" target="_blank" className="terceiro-a"> Deduções Legais</a></span></p>
                {SituacaoIR ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora simula quanto seria o valor do imposto, baixe o programa DIRPF no site da Receita Federal e faça sua declração caso seja obrigado, ou contrate um profissional para te ajudar.</span></p> : ''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Deducoeslegais;