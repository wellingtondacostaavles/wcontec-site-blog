import React, {useState, useEffect} from 'react';

import './descontosimplificado.css';

function Descontosimplificado(){    

    const [RendimentosTributaveis, setNro1] = useState();
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
                
    const calcular1 = () =>{  
        if (operacaoBaseCalculo=="Subtrair")
        return ((parseFloat(RendimentosTributaveis)) - (parseFloat(RendimentosTributaveis) * 0.20));
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
                        <label>IRRF</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={IRRF} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                      </div> 
                </div>
                <div className="col-sm-4"></div>    
            </div>
            <br></br>            
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoIR}</h3>
                {SituacaoIR ? <h1>{[ResultdoIR].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> : ''}
                {SituacaoIR ? <p><span className="segundo-p">Atenção: O valor encontrado na calculadora simula quanto seria o valor do imposto, baixe o programa DIRPF no site da Receita Federal e faça sua declração, ou contrate um profissional para te ajudar.</span></p> : ''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Descontosimplificado;