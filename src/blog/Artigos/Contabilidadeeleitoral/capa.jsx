import React from 'react';
import {Link} from 'react-router-dom';
import './contabilidadeeleitoral.css';

function Capa(){
    return <section id="capa-contabilidade-eleitoral">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Artigos/Contabilidade-eleitoral/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>O candidato a cargo político pode contar com uma <span className="terceiro-h3">contabilidade eleitoral online</span></h3>                
                    <h6 className="segundo-h6">A prestação de contas precisa ser realizada em obediência à legislação federal, e contar com uma “contabilidade eleitoral online” tornou-se uma excelente opção, modernizando o processo contábil tradicional que se volta à apuração de receitas e despesas realizadas por candidatos e partidos políticos.</h6>
                    <a href="#contabilidade-eleitoral" className="btn btn-success btn-lg btn-capa-contabilidade-eleitoral zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-contabilidade-eleitoral zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;