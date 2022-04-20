import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';

import './cofinspresumido.css';

function Cofinspresumido(){   
    
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
    const handleChange6 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro6(value);        
    };
    
    const [ReceitaServicos, setNro1] = useState(0);
    const [ReceitaVendas, setNro2] = useState(0);
    const [DevolucaoVenda, setNro3] = useState(0);
    const [ICMSsobreVendas, setNro4] = useState(0);
    const [IPIsobreVendas, setNro5] = useState(0);
    const [RetencoesAntecipacoes, setNro6] = useState(0);

    const [TotalReceitas, setResultado1] = useState(0);
    const [operacaoTotalReceitas, setOperacao1] = useState('Somar');

    const [BaseCalculo, setResultado2] = useState(0);
    const [operacaoBaseCalculo, setOperacao2] = useState('Subtrair');

    const [TributoAntesAntecipacao, setResultado3] = useState(0);
    const [operacaoTributoAntesAntecipacao, setOperacao3] = useState('Somar');

    const [TributoFinal, setResultado4] = useState(0);
    const [operacaoTributoFinal, setOperacao4] = useState('Subtrair');

    const ResultadoCOFINS = TributoFinal
    
    const situacao1 = 'A COFINS a recolher mensal será de:'
    const situacao2 = ''

    const SituacaoCOFINS = ResultadodaCOFINS(ResultadoCOFINS)

        function ResultadodaCOFINS(ResultadoCOFINS){
            if (ResultadoCOFINS > 0){
                return situacao1
            } else {
            return situacao2
            }
        }   
  
    const calcular = () =>{  
        if (operacaoTotalReceitas=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas));
    }

    const calcular2 = () =>{  
        if (operacaoBaseCalculo=="Subtrair")
        return (parseFloat(TotalReceitas) - parseFloat(DevolucaoVenda) - parseFloat(ICMSsobreVendas) - parseFloat(IPIsobreVendas));
    }

    const calcular3 = () =>{  
        if (operacaoTributoAntesAntecipacao=="Somar")
        return (parseFloat(BaseCalculo) * 0.03);
    }

    const calcular4 = () =>{  
        if (operacaoTributoFinal=="Subtrair")
        return (parseFloat(TributoAntesAntecipacao) - parseFloat(RetencoesAntecipacoes));
    }

    useEffect (() =>{setResultado1(calcular())},[ReceitaServicos, ReceitaVendas, operacaoTotalReceitas]);
    useEffect (() =>{setResultado2(calcular2())},[TotalReceitas, DevolucaoVenda, ICMSsobreVendas, IPIsobreVendas, operacaoBaseCalculo]);
    useEffect (() =>{setResultado3(calcular3())},[BaseCalculo, operacaoTributoAntesAntecipacao]);
    useEffect (() =>{setResultado4(calcular4())},[TributoAntesAntecipacao, RetencoesAntecipacoes, operacaoTributoFinal]);
      
        
        return <div>      
        
        <section id="cofins-lucro-presumido">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>COFINS presumido</h1>
                    <p>Calcule o valor da COFINS mensal a pagar com base no lucro presumido</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-cofins-lucro-presumido">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaServicos-cofins-lucro-presumido">Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaServicos-cofins-lucro-presumido" id="ReceitaServicos-cofins-lucro-presumido" aria-label="Amount (to the nearest dollar)" onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaVendas-cofins-lucro-presumido">Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaVendas-cofins-lucro-presumido" id="ReceitaVendas-cofins-lucro-presumido" aria-label="Amount (to the nearest dollar)" onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="DevolucaoVenda-cofins-lucro-presumido">Devolução de venda</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="DevolucaoVenda-cofins-lucro-presumido" id="DevolucaoVenda-cofins-lucro-presumido" aria-label="Amount (to the nearest dollar)" onChange={handleChange3}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">      
                        <div className="mb-3">
                            <label htmlFor="ICMSsobreVendas-cofins-lucro-presumido">ICMS sobre vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ICMSsobreVendas-cofins-lucro-presumido" id="ICMSsobreVendas-cofins-lucro-presumido" aria-label="Amount (to the nearest dollar)" onChange={handleChange4}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="IPIsobreVendas-cofins-lucro-presumido">IPI sobre vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="IPIsobreVendas-cofins-lucro-presumido" id="IPIsobreVendas-cofins-lucro-presumido" aria-label="Amount (to the nearest dollar)" onChange={handleChange5}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="RetencoesAntecipacoes-cofins-lucro-presumido">COFINS retida na fonte</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="RetencoesAntecipacoes-cofins-lucro-presumido" id="RetencoesAntecipacoes-cofins-lucro-presumido" aria-label="Amount (to the nearest dollar)" onChange={handleChange6}/>
                            </div>                     
                        </div>                    
                    </div>
                </div>
            </div>          
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoCOFINS}</h3>
                {SituacaoCOFINS ? <h1>{[TributoFinal].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                {SituacaoCOFINS ? <p>Códido do Tributo 2172</p> :''}
                {SituacaoCOFINS ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Cofinspresumido;