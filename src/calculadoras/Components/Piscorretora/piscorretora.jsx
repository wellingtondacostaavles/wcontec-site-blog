import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './piscorretora.css';

function Piscorretora(){    

    const [ReceitaFinanceiras, setNro1] = useState();
    const [PremiosdeSeguros, setNro2] = useState();
    const [RetencoesAntecipacoes, setNro3] = useState();
    
    const [SelectedDate, setSelectedDate] = useState();
    
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

    const dateFormatAux = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(); 

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;    

        return [year, month, day].join('-');    
    }
    
    const dateFormat = (date) => {
        console.log(new Date(date));
        let formatYearMonthDay = dateFormatAux(date);
        console.log(formatYearMonthDay);
    }

    dateFormat(SelectedDate);
    
    
    const ResultadoPIS = TributoFinal
    
    const situacao1 = 'O PIS a recolher mensal será de:'
    const situacao2 = ''

    const SituacaoPIS = ResultadodaCOFINS(ResultadoPIS)

        function ResultadodaCOFINS(ResultadoPIS){
            if (ResultadoPIS > 0){
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
        return (parseFloat(ReceitaFinanceiras) * 0.0065);
    }

    const calcular3 = () =>{  
        if (operacaoTributoPremiosdeSeguros=="Multiplicar")
        return (parseFloat(PremiosdeSeguros) * 0.0065);
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
        
        <section id="pis-corretora">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>PIS corretora</h1>
                    <p>Calcule o valor do PIS mensal a pagar para Corretoras de títulos e valores mobiliários</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-pis-corretora">
                <div className="col-sm-3">    
                        <div>
                            <label>Data</label>                
                            <div className="input-group mb-3">
                            <DatePicker className="form-control text-center" 
                                selected={SelectedDate} 
                                onChange={date => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy" 
                            />    
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>Receita Financeiras</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" nin="0.00" value={ReceitaFinanceiras} onChange={(e) => setNro1(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>Prêmios de Seguros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={PremiosdeSeguros} onChange={(e) => setNro2(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div>
                            <label>PIS retido na fonte</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={RetencoesAntecipacoes} onChange={(e) => setNro3(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoPIS}</h3>
                {SituacaoPIS ? <h1>{[TributoFinal].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                {SituacaoPIS ? <p>Códido do Tributo 4574</p> :''}
                {SituacaoPIS ? <p><span className="terceiro-p">Atenção: Base legal para Corretoras de títulos e valores mobiliários - Instrução Normativa RFB nº 1.911/2019. O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Piscorretora;