import React from 'react';
import {Link} from 'react-router-dom';
import './artigo10.css';

function Capa(){
    return <section id="capa-inssentendacomoeaaposentadoriadequemmudadesexo">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Inssmudacasexo/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>INSS</h3>   
                    <h3><span className="terceiro-h3">Entenda como fica a aposentadoria para as pessoas que trocou de sexo</span></h3>               
                    <h6>A idade é um requisito importante a ser analisado pelo sistema previdenciário. Atualmente, a regra geral é de 65 anos para homens e 62 anos para mulheres. Mas o contribuinte do INSS pode ter mudanças nessas referências quando são transgêneros. Entenda...</h6>
                    <a href="#inssentendacomoeaaposentadoriadequemmudadesexo" className="btn btn-success btn-lg btn-capa-inssentendacomoeaaposentadoriadequemmudadesexo">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-inssentendacomoeaaposentadoriadequemmudadesexo">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;