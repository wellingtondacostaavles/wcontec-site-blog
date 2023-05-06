import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import NavbarCalculadora from '../Navbar/navbarcalculadora';
import Rodapeprodutos from '../../../site/Components/rodapeprodutos';

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
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>IR Sobre Ações</h1>
                    <p>Calcule o valor do Imposto de Renda sobre vendas de ações</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-ir-sobre-acoes">
                    <div className="col-sm-3">  
                        <div className="mb-3">  
                            <label htmlFor="SelectedDate-ir-sobre-acoes">Data</label>                
                            <div className="input-group mb-3">
                                <DatePicker className="form-control text-center inputs"
                                name="SelectedDate-ir-sobre-acoes"
                                id="SelectedDate-ir-sobre-acoes" 
                                selected={SelectedDate} 
                                onChange={date => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy" />    
                            </div> 
                        </div>
                    </div>    
                <div className="col-sm-3">
                  <div className="mb-3">
                      <label htmlFor="CodigoAcao-ir-sobre-acoes">Código da Ação</label>
                        <div className="input-group mb-3">
                            <select name="CodigoAcao-ir-sobre-acoes" id="CodigoAcao-ir-sobre-acoes" value={CodigoAcao} onChange={value => setCodigoAcao(value.target.value)} className="form-select inputs" aria-label="Default select example">
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
                    <div className="mb-3">
                        <label htmlFor="ComprarouVender-ir-sobre-acoes">C/V</label>
                        <div className="input-group mb-3">
                            <select name="ComprarouVender-ir-sobre-acoes" id="ComprarouVender-ir-sobre-acoes" value={ComprarouVender} onChange={value => setComprarouVender(value.target.value)} className="form-select inputs" aria-label="Default select example">
                            <option value="">--</option>
                            <option value="Compra">Compra</option>
                            <option value="Venda">Venda</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label htmlFor="Quantidade-ir-sobre-acoes">Quantidade</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">QT</span>
                            <input className="form-control inputs" type="number" name="Quantidade-ir-sobre-acoes" id="Quantidade-ir-sobre-acoes" value={Quantidade} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label htmlFor="Preco-ir-sobre-acoes">Preço</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <input className="form-control inputs" type="number" name="Preco-ir-sobre-acoes" id="Preco-ir-sobre-acoes" aria-label="Amount (to the nearest dollar)"  step="0.01" value={Preco} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label htmlFor="CustoTotal-ir-sobre-acoes">Custo Total</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <input className="form-control inputs" type="number" name="CustoTotal-ir-sobre-acoes" id="CustoTotal-ir-sobre-acoes" aria-label="Amount (to the nearest dollar)"  step="0.01" value={CustoTotal} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label htmlFor="PrecoTotal-ir-sobre-acoes">Preço Total</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <input className="form-control inputs" type="number" name="PrecoTotal-ir-sobre-acoes" id="PrecoTotal-ir-sobre-acoes" aria-label="Amount (to the nearest dollar)"  step="0.01" value={PrecoTotal}/>
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
            <Rodapeprodutos/>          
        </section>       
      </div> 
    }
  
  export default Irsobreacoes;