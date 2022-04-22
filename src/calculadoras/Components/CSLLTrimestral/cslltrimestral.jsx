import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';

import './cslltrimestral.css';

function Cslltrimestral(){    

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
    const [CSLLRFAntecipacoes, setNro5] = useState(0);

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
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>CSLL Presumido Trimestral</h1>
                    <p>Calcule o valor da CSLL trimestral a pagar com base no lucro presumido</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-csll-trimestral">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaServicos-csll-trimestral">Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaServicos-csll-trimestral" id="ReceitaServicos-csll-trimestral" aria-label="Amount (to the nearest dollar)" value={ReceitaServicos} onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaVendas-csll-trimestral">Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaVendas-csll-trimestral" id="ReceitaVendas-csll-trimestral" aria-label="Amount (to the nearest dollar)" value={ReceitaVendas} onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="DevolucaoVenda-csll-trimestral">Devolução de venda</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="DevolucaoVenda-csll-trimestral" id="DevolucaoVenda-csll-trimestral" aria-label="Amount (to the nearest dollar)" value={DevolucaoVenda} onChange={handleChange3}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaFinanceira-csll-trimestral">Receita Financeira</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaFinanceira-csll-trimestral" id="ReceitaFinanceira-csll-trimestral" aria-label="Amount (to the nearest dollar)" value={ReceitaFinanceira} onChange={handleChange4}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="CSLLRFAntecipacoes-csll-trimestral">CSLL retida na fonte</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="CSLLRFAntecipacoes-csll-trimestral" id="CSLLRFAntecipacoes-csll-trimestral" aria-label="Amount (to the nearest dollar)" value={CSLLRFAntecipacoes} onChange={handleChange5}/>
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