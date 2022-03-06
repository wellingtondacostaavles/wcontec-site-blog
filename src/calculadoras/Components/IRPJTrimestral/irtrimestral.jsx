import React, {useState, useEffect} from 'react';

import './irtrimestral.css';

function Irtrimestral(){    

    const [ReceitaServicos, setNro1] = useState(0);
    const [ReceitaVendas, setNro2] = useState(0);
    const [DevolucaoVenda, setNro3] = useState(0);
    const [ReceitaFinanceira, setNro4] = useState(0);
    const [IRRFAntecipacoes, setNro5] = useState(0);
    
    const [TotalReceitas, setResultado1] = useState(0);
    const [operacaoTotalReceitas, setOperacao1] = useState('Somar');

    const [Presucao32, setResultado2] = useState(0);
    const [operacaoPresucao32, setOperacao2] = useState('Multiplicar');

    const [Presucao8, setResultado3] = useState(0);
    const [operacaoPresucao8, setOperacao3] = useState('Subtrair');

    const [BaseCalculo, setResultado4] = useState(0);
    const [operacaoBaseCalculo, setOperacao4] = useState('Somar');

    let BasedoadicionalIR = BaseCalculo;

    let adicionalIR = BasedoadicionalIR >= 60000 ? [((parseFloat(BaseCalculo)) - 60000) * 0.10] : 0;    
  
    const [ImpostoDevido, setResultado5] = useState(0);
    const [operacaoImpostoDevido, setOperacao5] = useState('Somar');

    const [ImpostoDevidoMisAdicional, setResultado6] = useState(0);
    const [operacaoImpostoDevidoMisAdicional, setOperacao6] = useState('Somar');
    
    const [IRPJaRecolher, setResultado7] = useState(0);
    const [operacaoIRPJaRecolher, setOperacao7] = useState('Subtrair');
    
    
    const calcular = () =>{  
        if (operacaoTotalReceitas=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas) + parseFloat(ReceitaFinanceira));
    }

    const calcular2 = () =>{  
        if (operacaoPresucao32=="Multiplicar")
        return (parseFloat(ReceitaServicos) * 0.32);
    }

    const calcular3 = () =>{  
        if (operacaoPresucao8=="Subtrair")
        return ((parseFloat(ReceitaVendas) - parseFloat(DevolucaoVenda)) * 0.08);
    }

    const calcular4 = () =>{  
        if (operacaoBaseCalculo=="Somar")
        return (+ parseFloat(Presucao32) + parseFloat(Presucao8) + parseFloat(ReceitaFinanceira));
    }

    const calcular5 = () =>{  
        if (operacaoImpostoDevido=="Somar")
        return (parseFloat(BaseCalculo) * 0.15);
    }

    const calcular6 = () =>{  
        if (operacaoImpostoDevidoMisAdicional=="Somar")
        return (parseFloat(ImpostoDevido) + parseFloat(adicionalIR));
    }

    const calcular7 = () =>{  
        if (operacaoIRPJaRecolher=="Subtrair")
        return (parseFloat(ImpostoDevidoMisAdicional) - parseFloat(IRRFAntecipacoes));
    }


    
    useEffect (() =>{setResultado1(calcular())},[ReceitaServicos, ReceitaVendas, ReceitaFinanceira, operacaoTotalReceitas]);
    useEffect (() =>{setResultado2(calcular2())},[ReceitaServicos, operacaoPresucao32]);
    useEffect (() =>{setResultado3(calcular3())},[ReceitaVendas, DevolucaoVenda, operacaoPresucao8]);
    useEffect (() =>{setResultado4(calcular4())},[Presucao32, Presucao8, ReceitaFinanceira, operacaoBaseCalculo]);
    useEffect (() =>{setResultado5(calcular5())},[BaseCalculo, operacaoBaseCalculo]);
    useEffect (() =>{setResultado6(calcular6())},[ImpostoDevido, adicionalIR, operacaoImpostoDevidoMisAdicional]);
    useEffect (() =>{setResultado7(calcular7())},[ImpostoDevidoMisAdicional, IRRFAntecipacoes, operacaoIRPJaRecolher]);
        
        return <div>         
        
        <section id="ir-trimestral">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>IRPJ Presumido Trimestral</h1>
                    <p>Calcule o valor do IRPJ trimestral a pagar com base no lucro presumido</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">    
                    <div>
                        <label>Receita de serviços</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaServicos} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receita de vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaVendas} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Devolução de venda</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DevolucaoVenda} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                      </div>  
                    <div>
                        <label>Receita Financeira</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaFinanceira} onChange={(e) => setNro4(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>IRRF - Anteçipações</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={IRRFAntecipacoes} onChange={(e) => setNro5(e.target.value)}/>
                        </div>                     
                    </div>                    
                </div>
                <div className="col-sm-4"></div>    
            </div>
            <br></br>            
            <div className="container">
                <div className="row text-center">
                <h3>O IRPJ trimestral a recolher será de:</h3>
                <h1>{[IRPJaRecolher].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> 
                <p>Códido do Tributo 2089</p>
                <p><span className="segundo-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Irtrimestral;