import React, {useState, useEffect} from 'react';

import './cofinspresumido.css';

function Cofinspresumido(){   
    
    const [nro1, setNro1] = useState(0);
    const [nro2, setNro2] = useState(0);
    const [nro3, setNro3] = useState(0);
    const [nro4, setNro4] = useState(0);
    const [nro5, setNro5] = useState(0);
    const [nro6, setNro6] = useState(0);

    const [resultado1, setResultado1] = useState(0);
    const [operacao1, setOperacao1] = useState('Somar');

    const [resultado2, setResultado2] = useState(0);
    const [operacao2, setOperacao2] = useState('Subtrair');

    const [resultado3, setResultado3] = useState(0);
    const [operacao3, setOperacao3] = useState('Somar');

    const [resultado4, setResultado4] = useState(0);
    const [operacao4, setOperacao4] = useState('Subtrair');

   
  
    const calcular = () =>{  
        if (operacao1=="Somar")
        return (parseFloat(nro1) + parseFloat(nro2));
    }

    const calcular2 = () =>{  
        if (operacao2=="Subtrair")
        return (parseFloat(resultado1) - parseFloat(nro3) - parseFloat(nro4) - parseFloat(nro5));
    }

    const calcular3 = () =>{  
        if (operacao3=="Somar")
        return (parseFloat(resultado2) * 0.03);
    }

    const calcular4 = () =>{  
        if (operacao4=="Subtrair")
        return (parseFloat(resultado3) - parseFloat(nro6));
    }

    useEffect (() =>{setResultado1(calcular())},[nro1, nro2, operacao1]);
    useEffect (() =>{setResultado2(calcular2())},[resultado1, nro3, nro4, nro5, operacao2]);
    useEffect (() =>{setResultado3(calcular3())},[resultado2, operacao3]);
    useEffect (() =>{setResultado4(calcular4())},[resultado3, nro6, operacao4]);
      
        
        return <div>      
        
        <section id="cofins-lucro-presumido">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>COFINS presumido</h1>
                    <p>Calcule o valor da COFINS mensal a pagar com base no lucro presumido</p>
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
                        <label>Devolução de venda</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro3} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                      </div>  
                    <div>
                        <label>ICMS sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro4} onChange={(e) => setNro4(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>IPI sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro5} onChange={(e) => setNro5(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Retenções Feitas - Anteçipações</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro6} onChange={(e) => setNro6(e.target.value)}/>
                        </div>                     
                    </div>                    
                </div>
                <div className="col-sm-4"></div>    
            </div>
            <br></br>            
            <div className="container">
                <div className="row text-center">
                <h3>A COFINS a recolher mensal será de:</h3>
                <h1>{[resultado4].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1>
                <p>Códido do Tributo 2172</p>
                <p><span className="segundo-p">ATENÇÃO: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Cofinspresumido;