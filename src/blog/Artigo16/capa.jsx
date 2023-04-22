import React from 'react';
import {Link} from 'react-router-dom';
import './artigo16.css';

function Capa(){
    return <section id="capa-normasparaemissaoeentregadocomprovantederendimentos">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Normasparaemissao/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Normas para emissão e entrega<span className="terceiro-h3"> do Comprovante de Rendimentos</span></h3>                
                    <h6 className="segundo-h6">Por meio da <a href="http://www.normaslegais.com.br/legislacao/instrucao-normativa-rfb-2060-2021.htm" className="segundo-a"> Instrução Normativa RFB 2.060/2021</a> foram estabelecidas normas sobre o comprovante de rendimentos pagos e de imposto sobre a renda retido na fonte a vigorar a partir de 01.01.2022.</h6>
                    <a href="#normasparaemissaoeentregadocomprovantederendimentos" className="btn btn-success btn-lg btn-capa-normasparaemissaoeentregadocomprovantederendimentos">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-normasparaemissaoeentregadocomprovantederendimentos">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;