import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';

import './irtrimestral.css';

function Irtrimestral(){
    
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
    const handleChange4 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro4(value);        
    };
    const handleChange5 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro5(value);        
    };

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

    const BasedoadicionalIR = BaseCalculo

    const comAdicional = ((parseFloat(BaseCalculo)) - 60000) * 0.10
    const semAdicional = 0
        
        
    const ValorAdicionalIR = AdicionalIR(BasedoadicionalIR)

        function AdicionalIR(BasedoadicionalIR){
            if (BasedoadicionalIR >= 60000) {
                return comAdicional
            } else {    
            return semAdicional
            }
        }        
    
    
    const [ImpostoDevido, setResultado5] = useState(0);
    const [operacaoImpostoDevido, setOperacao5] = useState('Somar');

    const [ImpostoDevidoMisAdicional, setResultado6] = useState(0);
    const [operacaoImpostoDevidoMisAdicional, setOperacao6] = useState('Somar');
    
    const [IRPJaRecolher, setResultado7] = useState(0);
    const [operacaoIRPJaRecolher, setOperacao7] = useState('Subtrair');
    
    const ResultadoValorIR = IRPJaRecolher
    
    const situacao1 = 'O IRPJ trimestral a recolher será de:'
    const situacao2 = ''

    const SituacaoIR = ResultadoIR(ResultadoValorIR)

        function ResultadoIR(ResultadoValorIR){
            if (ResultadoValorIR > 0){
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
        if (operacaoPresucao32=="Multiplicar")
        return (parseFloat(ReceitaServicos) * 0.32);
    }

    const calcular3 = () =>{  
        if (operacaoPresucao8=="Subtrair")
        return ((parseFloat(ReceitaVendas) - parseFloat(DevolucaoVenda)) * 0.08);
    }

    const calcular4 = () =>{  
        if (operacaoBaseCalculo=="Somar")
        return (parseFloat(Presucao32) + parseFloat(Presucao8) + parseFloat(ReceitaFinanceira));
    }

    const calcular5 = () =>{  
        if (operacaoImpostoDevido=="Somar")
        return (parseFloat(BaseCalculo) * 0.15);
    }

    const calcular6 = () =>{  
        if (operacaoImpostoDevidoMisAdicional=="Somar")
        return (parseFloat(ImpostoDevido) + parseFloat(ValorAdicionalIR));
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
    useEffect (() =>{setResultado6(calcular6())},[ImpostoDevido, ValorAdicionalIR, operacaoImpostoDevidoMisAdicional]);
    useEffect (() =>{setResultado7(calcular7())},[ImpostoDevidoMisAdicional, IRRFAntecipacoes, operacaoIRPJaRecolher]);
        
        return <div>         
        
        <section id="ir-trimestral">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>IRPJ Presumido Trimestral</h1>
                    <p>Calcule o valor do IRPJ trimestral a pagar com base no lucro presumido</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-ir-trimestral">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaServicos-ir-trimestral">Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaServicos-ir-trimestral" id="ReceitaServicos-ir-trimestral" aria-label="Amount (to the nearest dollar)" onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaVendas-ir-trimestral">Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaVendas-ir-trimestral" id="ReceitaVendas-ir-trimestral" aria-label="Amount (to the nearest dollar)"  onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="DevolucaoVenda-ir-trimestral">Devolução de venda</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="DevolucaoVenda-ir-trimestral" id="DevolucaoVenda-ir-trimestral" aria-label="Amount (to the nearest dollar)"  onChange={handleChange3}/>
                            </div>                     
                        </div> 
                    </div>
                    <div className="col-sm-3">     
                        <div className="mb-3">
                            <label htmlFor="ReceitaFinanceira-ir-trimestral">Receita Financeira</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaFinanceira-ir-trimestral" id="ReceitaFinanceira-ir-trimestral" aria-label="Amount (to the nearest dollar)"  onChange={handleChange4}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="IRRFAntecipacoes-ir-trimestral">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="IRRFAntecipacoes-ir-trimestral" id="IRRFAntecipacoes-ir-trimestral" aria-label="Amount (to the nearest dollar)"  onChange={handleChange5}/>
                            </div>                     
                        </div>                    
                    </div>
                </div>
            </div>          
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoIR}</h3>
                {SituacaoIR ? <h1>{[IRPJaRecolher].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                {SituacaoIR ? <p>Códido do Tributo 2089</p> :''}
                {SituacaoIR ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Irtrimestral;