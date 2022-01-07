import React from 'react';
import {Link} from 'react-router-dom';
import './artigo11.css';

function Capa(){
    return <section id="capa-horaextrapassoapassodecomocalcular">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Horaextra/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Hora Extra</h3>   
                    <h3><span className="terceiro-h3">Passo a passo de como calcular</span></h3>               
                    <h6>Ás vezes o tempo que temos não é o suficiente para terminarmos alguma tarefa importante, e é nessas ocasiões precisamos estender o expediente.</h6>
                    <h6>Saiba como calcular hora extra, inclusive com adicional noturnos e aos sábados e feriados...</h6>
                    <a href="#horaextrapassoapassodecomocalcular" className="btn btn-success btn-lg btn-capa-horaextrapassoapassodecomocalcular">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-horaextrapassoapassodecomocalcular">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;