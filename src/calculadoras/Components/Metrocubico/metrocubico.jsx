import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


import './metrocubico.css';

function Metrocubico(){
    const [nro1, setNro1] = useState(0);
    const [nro2, setNro2] = useState(0);
    const [nro3, setNro3] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [operacao, setOperacao] = useState('Multiplicar');
  
    const calcular = () =>{
  
      if(operacao=="Multiplicar")
      return parseFloat(nro1) * parseFloat(nro2) * parseFloat(nro3) / 100;
    }
  
    useEffect (() =>{setResultado(calcular())},[nro1, nro2, nro3, operacao]);
  
  
      return <div>          
        
        <section id="metroscubicos">    
  
         <div className="row">
             <div className="titulo">
                <h1>Calculadora de Metro Cúbico</h1>
                <h3>Calcule quantos m³ de material você irá precisar para sua obra</h3>
                <p>Preencha os campos abaixo e saiba aproximadamente a quantidade necessária. (Atenção: verifique se a unidade de medida está correta).</p>              
            </div>
        </div>         
  
        <div className="row"> 
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                  <div>
                    <label>Largura (em metros)</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">MT</span>
                        <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)" value={nro1} onChange={(e) => setNro1(e.target.value)} />
                  </div>
                </div>           
                <div>
                  <label>Comprimento (em metros)</label>
                  <div className="input-group mb-3">
                      <span className="input-group-text">MT</span>  
                      <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)" value={nro2} onChange={(e) => setNro2(e.target.value)} />
                  </div>
                </div>            
                <div>          
                  <label>Espessura (em centímetros)</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">CM</span>
                    <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)" value={nro3} onChange={(e) => setNro3(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="col-sm-4"></div> 
          </div>          
              
              
            <div className="container">
              <div className="row text-center">
                <h3>Você irá precisar de aproximadamente:</h3>
                <h1>{resultado} m³</h1>
                <p><span className="segundo-p">ATENÇÃO: O volume estimado na calculadora deverá ser confirmado com o engenheiro responsável pela obra.</span></p>
              </div>
            </div>  
        
        </section>       
      </div> 
    }
  
  export default Metrocubico;