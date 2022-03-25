import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './irsobreacoes.css';

function Irsobreacoes(){    

    const [Quantidade, setNro1] = useState();
    const [Preco, setNro2] = useState();
    const [CustoTotal, setNro3] = useState();
    
    const [SelectedDate, setSelectedDate] = useState();
    
    
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

    const [PrecoTotal, setPrecoTotal] = useState(0);
    const [operacaoPrecoTotal, setOperacao1] = useState('Multiplicar');

    const calcular = () =>{  
        if (operacaoPrecoTotal=="Multiplicar")
        return ((parseFloat(Quantidade) * (parseFloat(Preco)) + parseFloat(CustoTotal)));
    }

    useEffect (() =>{setPrecoTotal(calcular())},[Quantidade, Preco, CustoTotal, operacaoPrecoTotal]);
    
    
        return <div>         
        
        <section id="ir-sobre-acoes">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>IR Sobre Ações</h1>
                    <p>Calcule o valor do Imposto de Renda sobre vendas de ações</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-ir-sobre-acoes">
                    <div className="col-sm-3">    
                            <label>Data</label>                
                            <div className="input-group mb-3">
                                <DatePicker className="form-control text-center" 
                                selected={SelectedDate} 
                                onChange={date => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy" />    
                            </div> 
                        </div>
                <div className="col-sm-3">
                  <div>
                      <label>Código da Ação</label>
                        <div className="input-group mb-3">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>---</option>
                            <option value="Areia">PETR4</option>
                            <option value="Saibro">B3SA3</option>
                            <option value="Pó de Pedra">BIDI11</option>
                            <option value="Cascalhinho">BPAN4</option>
                            <option value="Brita">BBSE3</option>
                        </select>
                      </div>
                  </div>
                </div>
                <div className="col-sm-3">
                    <div>
                        <label>C/V</label>
                        <div className="input-group mb-3">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>---</option>
                            <option value="Compra">Compra</option>
                            <option value="Venda">Venda</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div>
                        <label>Quantidade</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">Qt</span>
                            <input className="form-control" type="number" value={Quantidade} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div>
                        <label>Preço</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={Preco} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div>
                        <label>Custo Total</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={CustoTotal} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div>
                        <label>Preço Total</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={PrecoTotal}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                <h3></h3>
                <h1>{[PrecoTotal].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1>
                <p></p>
                <p><span className="terceiro-p">Atenção: Cacluladora em desensolvimento</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Irsobreacoes;