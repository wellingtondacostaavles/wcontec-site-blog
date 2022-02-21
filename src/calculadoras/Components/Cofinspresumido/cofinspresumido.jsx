import React, {useState, useEffect} from 'react';

import './cofinspresumido.css';

function Cofinspresumido(){   
    
    const [nro1, setNro1] = useState(0);
    const [nro2, setNro2] = useState(0);
    const [nro3, setNro3] = useState(0);
    const [nro4, setNro4] = useState(0);

    const [resultado1, setResultado1] = useState(0);
    const [operacao1, setOperacao1] = useState('Somar');

    const [resultado2, setResultado2] = useState(0);
    const [operacao2, setOperacao2] = useState('Somar');

    const [resultado3, setResultado3] = useState(0);
    const [operacao3, setOperacao3] = useState('Somar');

   
  
    const calcular = () =>{  
        if (operacao1=="Somar")
        return (parseFloat(nro1) + parseFloat(nro2) + parseFloat(nro3));
    }

    const calcular2 = () =>{  
        if (operacao2=="Somar")
        return (parseFloat(resultado1) * 0.03);
    }

    const calcular3 = () =>{  
        if (operacao3=="Somar")
        return (parseFloat(resultado2) + parseFloat(nro4));
    }

    useEffect (() =>{setResultado1(calcular())},[nro1, nro2, nro3, operacao1]);
    useEffect (() =>{setResultado2(calcular2())},[resultado1, operacao2]);
    useEffect (() =>{setResultado3(calcular3())},[resultado2, nro4, operacao3]);
      
        
        return <div>         
        
        <section id="cofins-lucro-presumido">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>COFINS presumido</h1>
                    <p>Calcule o valor da cofins mensal a pagar com base no lucro presumido</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">    
                    <div>
                        <label>Receita de serviços</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" nin="0.00" value={nro1} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receita de vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro2} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>(-) Devolução de venda</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro3} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                      </div>  
                    <div>
                        <label>(-) Deduções</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro4} onChange={(e) => setNro4(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-4"></div>    
            </div>         
        
        
        <div className="table-responsive">
            <table className="table">
                <tr>
                    <th className="width80"></th>
                    <th className="width20"></th>                    
                </tr>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">BASE DE CALCULO</th>
                    <td className="bi">{[resultado1].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                                                                
            </tbody> 
            </table>
        </div>

            <div className="container">
            <div className="row text-center">
              <h3>A COFINS a recolher mensal será de:</h3>
              <h1>{[resultado3].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1>
              <p>Códido do Tributo 2172</p>
              <p><span className="segundo-p">Sobre a base de cálculo foi aplicado 3% e subtraído as deduções. O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p>
            </div>
        </div>          
        </section>       
      </div> 
    }
  
  export default Cofinspresumido;