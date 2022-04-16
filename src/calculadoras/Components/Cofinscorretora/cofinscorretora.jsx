import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';

import './cofinscorretora.css';

function Cofinscorretora(){    

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
    
    const [ReceitaFinanceiras, setNro1] = useState(0);
    const [PremiosdeSeguros, setNro2] = useState(0);
    const [RetencoesAntecipacoes, setNro3] = useState(0);
    
    const [TotalReceitas, setResultado1] = useState(0);
    const [operacaoTotalReceitas, setOperacao1] = useState('Somar');

    const [TributoReceitaFinanceiras, setResultado2] = useState(0);
    const [operacaoTributoReceitaFinanceiras, setOperacao2] = useState('Multiplicar');

    const [TributoPremiosdeSeguros, setResultado3] = useState(0);
    const [operacaoTributoPremiosdeSeguros, setOperacao3] = useState('Multiplicar');

    const [TotaldosTributosSobreReceitas, setResultado4] = useState(0);
    const [operacaoTotaldosTributosSobreReceitas, setOperacao4] = useState('Somar');

    const [TributoFinal, setResultado5] = useState(0);
    const [operacaoTributoFinal, setOperacao5] = useState('Subtrair');

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
        return (parseFloat(ReceitaFinanceiras) + parseFloat(PremiosdeSeguros));
    }

    const calcular2 = () =>{  
        if (operacaoTributoReceitaFinanceiras=="Multiplicar")
        return (parseFloat(ReceitaFinanceiras) * 0.04);
    }

    const calcular3 = () =>{  
        if (operacaoTributoPremiosdeSeguros=="Multiplicar")
        return (parseFloat(PremiosdeSeguros) * 0.04);
    }

    const calcular4 = () =>{  
        if (operacaoTotaldosTributosSobreReceitas=="Somar")
        return (parseFloat(TributoReceitaFinanceiras) + parseFloat(TributoPremiosdeSeguros));
    }

    const calcular5 = () =>{  
        if (operacaoTributoFinal=="Subtrair")
        return (parseFloat(TotaldosTributosSobreReceitas) - parseFloat(RetencoesAntecipacoes));
    }

    useEffect (() =>{setResultado1(calcular())},[ReceitaFinanceiras, PremiosdeSeguros, operacaoTotalReceitas]);
    useEffect (() =>{setResultado2(calcular2())},[ReceitaFinanceiras, operacaoTributoReceitaFinanceiras]);
    useEffect (() =>{setResultado3(calcular3())},[PremiosdeSeguros, operacaoTributoPremiosdeSeguros]);
    useEffect (() =>{setResultado4(calcular4())},[TributoReceitaFinanceiras, TributoPremiosdeSeguros, operacaoTotaldosTributosSobreReceitas]);
    useEffect (() =>{setResultado5(calcular5())},[TotaldosTributosSobreReceitas, RetencoesAntecipacoes, operacaoTributoFinal]);
      
        
        return <div>         
        
        <section id="cofins-corretora">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>COFINS corretora</h1>
                    <p>Calcule o valor da COFINS mensal a pagar para Corretoras de títulos e valores mobiliários</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-cofins-corretora">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaFinanceiras-cofins-corretora">Receita Financeiras</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ReceitaFinanceiras-cofins-corretora" id="ReceitaFinanceiras-cofins-corretora" aria-label="Amount (to the nearest dollar)" onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="PremiosdeSeguros-cofins-corretora">Prêmios de Seguros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="PremiosdeSeguros-cofins-corretora" id="PremiosdeSeguros-cofins-corretora" aria-label="Amount (to the nearest dollar)" onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3"> 
                            <label htmlFor="RetencoesAntecipacoes-cofins-corretora">COFINS retida na fonte</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="RetencoesAntecipacoes-cofins-corretora" id="RetencoesAntecipacoes-cofins-corretora" aria-label="Amount (to the nearest dollar)" onChange={handleChange3}/>
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>          
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoCOFINS}</h3>
                {SituacaoCOFINS ? <h1>{[TributoFinal].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                {SituacaoCOFINS ? <p>Códido do Tributo 7987</p> :''}
                {SituacaoCOFINS ? <p><span className="terceiro-p">Atenção: Base legal para Corretoras de títulos e valores mobiliários - Instrução Normativa RFB nº 1.911/2019. O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Cofinscorretora;