import React, {useState, useEffect} from 'react';
import Navbar from '../../../app/Components/Navbar/navbar';
import DatePicker from 'react-datepicker';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import {Link, Redirect}  from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

import "react-datepicker/dist/react-datepicker.css";

import './piscorretora.css';


function EditarPiscorretora(props){    

      
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
    
        console.log(value); // value without mask (ex: 1234.56)
        console.log(maskedValue); // masked value (ex: R$1234,56)

        setNro1(value);        
    };
    const handleChange2 = (event, value, maskedValue) => {
        event.preventDefault();
    
        console.log(value); // value without mask (ex: 1234.56)
        console.log(maskedValue); // masked value (ex: R$1234,56)

        setNro2(value);        
    };
    const handleChange3 = (event, value, maskedValue) => {
        event.preventDefault();
    
        console.log(value); // value without mask (ex: 1234.56)
        console.log(maskedValue); // masked value (ex: R$1234,56)

        setNro3(value);        
    };

    const [ReceitaFinanceiras, setNro1] = useState(0);
    const [PremiosdeSeguros, setNro2] = useState(0);
    const [RetencoesAntecipacoes, setNro3] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    const [SelectedDate, setSelectedDate] = useState('');
    const db = firebase.firestore();

    useEffect(() => {
        firebase.firestore().collection('piscorretora').doc(props.match.params.id).get().then((resultado) => {
            setSelectedDate(resultado.data().Periodo);
            setNro1(resultado.data().ReceitaFinanceiras);
            setNro2(resultado.data().PremiosdeSeguros);
            setNro3(resultado.data().PISretidonafonte);
            setResultado5(resultado.data().PISaPagar);
        })
    }, [props.match.params.id])

    function AlterarPiscorretora(){

      db.collection('piscorretora').doc(props.match.params.id).update({
            Periodo: SelectedDate,
            ReceitaFinanceiras: ReceitaFinanceiras,
            PremiosdeSeguros: PremiosdeSeguros,
            PISretidonafonte: RetencoesAntecipacoes,
            PISaPagar: TributoFinal
          }).then(() => {
            setMensagem('');
            setSucesso('S');
            }).catch((erro) =>{
            setMensagem(erro);
            setSucesso('N'); 
          })
        }
        
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
        new Date(date);
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
        <Navbar/>
        <section id="pis-corretora"> 
         
        
        <div className="row text-center">
                <div className="titulo">
                    <h1>PIS corretora</h1>
                    <p>Edite o valor do PIS mensal a pagar para Corretoras de títulos e valores mobiliários</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-pis-corretora"> 
                <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="codigo-pis-corretora">Código</label>                
                            <div className="input-group mb-3">
                                <input className="form-control inputs" value={props.match.params.id} name="codigo-pis-corretora" id="codigo-pis-corretora"  aria-label="Amount (to the nearest dollar)" disabled /> 
                            </div>                     
                        </div>
                    </div>        
                <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="SelectedDate-pis-corretora">Data</label>                
                            <div className="input-group mb-3">
                            <DatePicker className="form-control inputs text-center" 
                                name="SelectedDate-piscorretora"
                                id="SelectedDate-piscorretora"
                                selected={SelectedDate} 
                                onChange={date => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy" 
                            />    
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="ReceitaFinanceiras-pis-corretora">Receita Financeiras</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaFinanceiras-pis-corretora" id="ReceitaFinanceiras-pis-corretora"  aria-label="Amount (to the nearest dollar)" value={ReceitaFinanceiras} onChange={handleChange} /> 
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="PremiosdeSeguros-pis-corretora">Prêmios de Seguros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="PremiosdeSeguros-pis-corretora" id="PremiosdeSeguros-pis-corretora" aria-label="Amount (to the nearest dollar)" value={PremiosdeSeguros} onChange={handleChange2} />
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label htmlFor="RetencoesAntecipacoes-pis-corretora">PIS retido na fonte</label>                
                                <div className="input-group mb-3">
                                    <span className="input-group-text inputs">R$</span>
                                    <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" type="text" name="RetencoesAntecipacoes-pis-corretora" id="RetencoesAntecipacoes-pis-corretora" aria-label="Amount (to the nearest dollar)" value={RetencoesAntecipacoes} onChange={handleChange3}/>
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
                        <div>
                            <button onClick={AlterarPiscorretora} type="button" className="btn btn-success btn-pis-corretora">Salvar</button>
                            <Link to="/app/pis-corretora-home" className="btn btn-outline-primary btn-pis-corretora">Cancelar</Link>
                        </div>
                        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                        {sucesso === 'S' ? <Redirect to='/app/pis-corretora-home'/> : null}
                        {SituacaoPIS ? <p><span className="terceiro-p">Atenção: Base legal para Corretoras de títulos e valores mobiliários - Instrução Normativa RFB nº 1.911/2019. O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
                    </div>
                </div>
            </section>
        </div> 
    }
  
  export default EditarPiscorretora;