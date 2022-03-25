import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


import './metrocubico.css';

function Metrocubico(){
    const [Largura, setNro1] = useState();
    const [Comprimento, setNro2] = useState();
    const [Espessura, setNro3] = useState();
    
    const [resultado, setResultado] = useState(0);
    const [operacao, setOperacao] = useState('Multiplicar');

    const ResultadoMetroCubico = resultado
    
    const situacao1 = 'Você irá precisar de aproximadamente:'
    const situacao2 = ''

    const SituacaoResultadoMetroCubico = ResultadodoMetroCubico(ResultadoMetroCubico)

        function ResultadodoMetroCubico(ResultadoMetroCubico){
            if (ResultadoMetroCubico > 0){
                return situacao1
            } else {
            return situacao2
            }
        }   
  
    const calcular = () =>{
  
      if(operacao=="Multiplicar")
      return parseFloat(Largura) * parseFloat(Comprimento) * parseFloat(Espessura) / 100;
    }
  
    useEffect (() =>{setResultado(calcular())},[Largura, Comprimento, Espessura, operacao]);
  
  
      return <div>          
        
        <section id="metroscubicos">    
  
         <div className="row">
             <div className="titulo">
                <h1>Calculadora de Metro Cúbico</h1>
                <h3>Calcule quantos m³ de material você irá precisar para sua obra</h3>
                <p>Preencha os campos abaixo e saiba aproximadamente a quantidade necessária. (Atenção: verifique se a unidade de medida está correta).</p>              
            </div>
        </div>         
  
        <div className="container">
          <div className="row inputs-metroscubicos"> 
                <div className="col-sm-3">
                  <div>
                      <label>Material</label>
                      <div className="input-group mb-3">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>---</option>
                        <option value="Areia">Areia</option>
                        <option value="Saibro">Saibro</option>
                        <option value="Pó de Pedra">Pó de Pedra</option>
                        <option value="Cascalhinho">Cascalhinho</option>
                        <option value="Brita">Brita</option>
                        <option value="Concreto">Concreto</option>
                      </select>
                      </div>
                  </div>
                </div>
                <div className="col-sm-3">
                    <div>
                      <label>Largura</label>
                      <div className="input-group mb-3">
                          <span className="input-group-text">MT</span>
                          <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)" value={Largura} onChange={(e) => setNro1(e.target.value)} />
                    </div>
                  </div>  
                </div>
                <div className="col-sm-3">           
                  <div>
                    <label>Comprimento</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">MT</span>  
                        <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)" value={Comprimento} onChange={(e) => setNro2(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">              
                  <div>          
                    <label>Espessura</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text">CM</span>
                      <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)" value={Espessura} onChange={(e) => setNro3(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>          
          </div>    
              
          <div className="container">
              <div className="row text-center">
                <h3>{SituacaoResultadoMetroCubico}</h3>
                {SituacaoResultadoMetroCubico ? <h1>{resultado} m³</h1> :''}
                {SituacaoResultadoMetroCubico ? <p><span className="terceiro-p">Atenção: O volume estimado na calculadora deverá ser confirmado com o engenheiro responsável pela obra.</span></p> :''}
              </div>
            </div>  
        
        </section>       
      </div> 
    }
  
  export default Metrocubico;