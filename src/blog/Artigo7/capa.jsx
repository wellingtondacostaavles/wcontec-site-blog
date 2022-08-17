import React from 'react';
import {Link} from 'react-router-dom';
import './artigo7.css';

function Capa(){
    return <section id="capa-empresarioindividual">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Ei/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Empresário Individual (EI)</h3>   
                    <h3><span className="terceiro-h3">O que é e como funciona?</span></h3>               
                    <h6 className="segundo-h6">Também conhecido como "firma individual", esse formato é diferente de MEI e ideal para quem quer exercer em nome próprio uma atividade empresarial, sem a necessidade de um sócio. Entre as vantagens, não há necessidade de Capital Social mínimo, é possível se enquadrar no Simples Nacional, além de ser permitido contratar vários funcionários.</h6>
                    <a href="#empresarioindividual" className="btn btn-success btn-lg btn-capa-empresarioindividual">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-empresarioindividual">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

export default Capa;