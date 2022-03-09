import React, {useState, useEffect} from 'react';

import './deducoeslegais.css';

function Deducoeslegais(){    

    const [RendimentosTributaveis, setNro1] = useState(0);
    const [DeducoesLegais, setNro2] = useState(0);
    const [IRRF, setNro3] = useState(0);
    
    const [BaseCalculo, setResultado1] = useState(0);
    const [operacaoBaseCalculo, setOperacao1] = useState('Subtrair');  
    
    const [ResultdoIR, setResultado2] = useState(0); 
    const [operacaoResultdoIR, setOperacao2] = useState('Subtrair');  
    
    const BaseCalculoFaixa = BaseCalculo   

    const faixa1 = BaseCalculoFaixa - BaseCalculoFaixa
    const faixa2 = (BaseCalculoFaixa * 0.07) - 1713.58
    const faixa3 = (BaseCalculoFaixa * 0.15) - 4257.57
    const faixa4 = (BaseCalculoFaixa * 0.22) - 7633.51
    const faixa5 = (BaseCalculoFaixa * 0.27) - 10432.32          
    
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

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">    
                    <div>
                        <label>Rendimentos Tributáveis</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={RendimentosTributaveis} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Deduções Legais*</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DeducoesLegais} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>IRRF</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={IRRF} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                      </div> 
                </div>
                <div className="col-sm-4"></div>    
            </div>
            <br></br>            
            <div className="container">
                <div className="row text-center">
                <h3>O valor do IR com base em Deduções Leagis será de:</h3>
                <h1>{[ResultdoIR].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> 
                <p><span className="segundo-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Deducoeslegais;