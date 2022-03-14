import React from 'react';
import {Link} from 'react-router-dom';
import './deducoeslegais-descontosimplificado.css';

function Capa(){
    return <section id="capa-deducoes-legais-desonto-simplificado">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/DIRPF22/Deducoeslegaisoudescontosimplificado/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3><span className="terceiro-h3">Deduções legais</span> ou<span className="terceiro-h3"> desconto simplificado</span> qual escolher?</h3>                
                    <h6>A escolha depende do total de despesas dedutíveis que você tem em relação à renda. A partir desse dado, você pode avaliar se é mais vantajoso optar por deduções legais ou desconto simplificado — ou seja, verificar qual pode reduzir o imposto devido ou garantir a restituição.</h6>
                    <a href="#deducoes-legais-desonto-simplificado" className="btn btn-success btn-lg btn-capa-deducoes-legais-desonto-simplificado">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-deducoes-legais-desonto-simplificado">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;