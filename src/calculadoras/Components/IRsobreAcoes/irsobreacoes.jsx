import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './irsobreacoes.css';

function Irsobreacoes(){    

    const [Quantidade, setNro1] = useState();
    const [Preco, setNro2] = useState();
    const [CustoTotal, setNro3] = useState();
    
    const [SelectedDate, setSelectedDate] = useState();
    const [CodigoAcao, setCodigoAcao] = useState();
    const [ComprarouVender, setComprarouVender] = useState();
    
    
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

    //Rascunho

    const PrecoTotal2 = ComprarouVender

    const PrecoTotalCompra = ((parseFloat(Quantidade) * (parseFloat(Preco)) + parseFloat(CustoTotal)));
    const PrecototalVenda = ((parseFloat(Quantidade) * (parseFloat(Preco)) + parseFloat(CustoTotal)));    
    
    const PrecoTotalCompraouVenda = PrecoTotaldeCompraouVenda(PrecoTotal2)

        function PrecoTotaldeCompraouVenda(PrecoTotal2){
            if (PrecoTotal2 == 'Compra') {
                return PrecoTotalCompra
            } else {    
            return PrecototalVenda
            }
        }             

    const [PrecoMedio, setPrecoMedio] = useState(0);
    const [operacaoPrecoMedio, setOperacaoPrecoMedio] = useState('Dividir');

    const [GanhoPerda, setGanhoPerda] = useState(0);
    const [operacaoGanhoPerda, setOperacaoGanhoPerda] = useState('Subtrair');
    
    const calcularPrecoMedio = () =>{  
        if (operacaoPrecoMedio=="Dividir")
        return ((parseFloat(PrecoTotalCompraouVenda) / (parseFloat(Quantidade))));
    }

    const calcularGanhoPerda = () =>{  
        if (operacaoGanhoPerda=="Subtrair")
        return (parseFloat(PrecoTotalCompraouVenda) - ((parseFloat(Quantidade)) * parseFloat(PrecoMedio)));
    }

    useEffect (() =>{setPrecoMedio(calcularPrecoMedio())},[PrecoTotalCompraouVenda, Quantidade, operacaoPrecoMedio]);
    useEffect (() =>{setGanhoPerda(calcularGanhoPerda())},[PrecoTotalCompraouVenda, Quantidade, PrecoMedio, operacaoGanhoPerda]);

    console.log(PrecoTotalCompraouVenda, PrecoMedio, GanhoPerda);
        
    //fim de racunho
   

    const [PrecoTotal, setPrecoTotal] = useState(0);
    const [operacaoPrecoTotal, setOperacao1] = useState('Multiplicar');

    
    const calcularPrecoTotal = () =>{  
        if (operacaoPrecoTotal=="Multiplicar")
        return ((parseFloat(Quantidade) * (parseFloat(Preco)) + parseFloat(CustoTotal)));
    }  
      
    useEffect (() =>{setPrecoTotal(calcularPrecoTotal())},[Quantidade, Preco, CustoTotal, operacaoPrecoTotal]);
    
    
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
                            <select name="CodigoAcao" value={CodigoAcao} onChange={value => setCodigoAcao(value.target.value)} class="form-select" aria-label="Default select example">
                            <option value="">--</option>
                            <option value="PETR4">PETR4</option>
                            <option value="B3SA3">B3SA3</option>
                            <option value="BIDI11">BIDI11</option>
                            <option value="BPAN4">BPAN4</option>
                            <option value="BBSE3">BBSE3</option>
                        </select>
                      </div>
                  </div>
                </div>
                <div className="col-sm-3">
                    <div>
                        <label>C/V</label>
                        <div className="input-group mb-3">
                            <select name="ComprarouVender" value={ComprarouVender} onChange={value => setComprarouVender(value.target.value)} class="form-select" aria-label="Default select example">
                            <option value="">--</option>
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
                            <span className="input-group-text">QT</span>
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
                <p><span className="terceiro-p">Atenção: Cacluladora em desenvolvimento</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Irsobreacoes;