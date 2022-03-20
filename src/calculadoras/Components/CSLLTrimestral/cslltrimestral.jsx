import React, {useState, useEffect} from 'react';

import './cslltrimestral.css';

function Cslltrimestral(){    

    const [ReceitaServicos, setNro1] = useState();
    const [ReceitaVendas, setNro2] = useState();
    const [DevolucaoVenda, setNro3] = useState();
    const [ReceitaFinanceira, setNro4] = useState();
    const [CSLLRFAntecipacoes, setNro5] = useState();

    const [TotalReceitas, setResultado1] = useState(0);
    const [operacaoTotalReceitas, setOperacao1] = useState('Somar');

    const [Presucao32, setResultado2] = useState(0);
    const [operacaoPresucao32, setOperacao2] = useState('Somar');

    const [Presucao12, setResultado3] = useState(0);
    const [operacaoPresucao12, setOperacao3] = useState('Subtrair');

    const [BaseCalculo, setResultado4] = useState(0);
    const [operacaoBaseCalculo, setOperacao4] = useState('Somar');

    const [ImpostoDevido, setResultado5] = useState(0);
    const [operacaoImpostoDevido, setOperacao5] = useState('Somar');
  
    const [CSLLaRecolher, setResultado6] = useState(0);
    const [operacaoCSLLaRecolher, setOperacao6] = useState('Subtrair');

    const ResultadoValorCSLL = CSLLaRecolher
    
    const situacao1 = 'O CSLL trimestral a recolher será de:'
    const situacao2 = ''

    const SituacaoCSLL = ResultadoIR(ResultadoValorCSLL)

        function ResultadoIR(ResultadoValorCSLL){
            if (ResultadoValorCSLL > 0){
                return situacao1
            } else {
            return situacao2
            }
        } 
  
    const calcular = () =>{  
        if (operacaoTotalReceitas=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas) + parseFloat(ReceitaFinanceira));
    }

    const calcular2 = () =>{  
        if (operacaoPresucao32=="Somar")
        return (parseFloat(ReceitaServicos) * 0.32);
    }

    const calcular3 = () =>{  
        if (operacaoPresucao12=="Subtrair")
        return ((parseFloat(ReceitaVendas) - parseFloat(DevolucaoVenda)) * 0.12);
    }

    const calcular4 = () =>{  
        if (operacaoBaseCalculo=="Somar")
        return (parseFloat(Presucao32) + parseFloat(Presucao12) + parseFloat(ReceitaFinanceira));
    }

    const calcular5 = () =>{  
        if (operacaoImpostoDevido=="Somar")
        return (parseFloat(BaseCalculo) * 0.09);
    }

    const calcular6 = () =>{  
        if (operacaoCSLLaRecolher=="Subtrair")
        return (parseFloat(ImpostoDevido) - parseFloat(CSLLRFAntecipacoes));
    }

    useEffect (() =>{setResultado1(calcular())},[ReceitaServicos, ReceitaVendas, ReceitaFinanceira, operacaoTotalReceitas]);
    useEffect (() =>{setResultado2(calcular2())},[ReceitaServicos, operacaoPresucao32]);
    useEffect (() =>{setResultado3(calcular3())},[ReceitaVendas, DevolucaoVenda, operacaoPresucao12]);
    useEffect (() =>{setResultado4(calcular4())},[Presucao32, Presucao12, ReceitaFinanceira, operacaoBaseCalculo]);
    useEffect (() =>{setResultado5(calcular5())},[BaseCalculo, operacaoBaseCalculo]);
    useEffect (() =>{setResultado6(calcular6())},[ImpostoDevido, CSLLRFAntecipacoes, operacaoCSLLaRecolher]);
        
        return <div>         
        
        <section id="csll-trimestral">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>CSLL Presumido Trimestral</h1>
                    <p>Calcule o valor da CSLL trimestral a pagar com base no lucro presumido</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-csll-trimestral">
                    <div className="col-sm-3">
                        <div>
                            <label>Trimestre</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaServicos} onChange={(e) => setNro1(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaServicos} onChange={(e) => setNro1(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaVendas} onChange={(e) => setNro2(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>Devolução de venda</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DevolucaoVenda} onChange={(e) => setNro3(e.target.value)}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>Receita Financeira</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaFinanceira} onChange={(e) => setNro4(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>CSLL retida na fonte</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={CSLLRFAntecipacoes} onChange={(e) => setNro5(e.target.value)}/>
                            </div>                     
                        </div>                    
                    </div>
                </div>
            </div>               
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoCSLL}</h3>
                {SituacaoCSLL ? <h1>{[CSLLaRecolher].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                {SituacaoCSLL ? <p>Códido do Tributo 2372</p> :''}
                {SituacaoCSLL ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Cslltrimestral;