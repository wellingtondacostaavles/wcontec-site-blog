import React from 'react';
import {Link} from 'react-router-dom';
import './deducoeslegais-descontosimplificado.css';

function Capa(){
    return <section id="capa-deducoes-legais-desonto-simplificado">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/DIRPF/Deducoeslegaisoudescontosimplificado/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3><span className="terceiro-h3">Deduções legais</span> ou<span className="terceiro-h3"> desconto simplificado</span> saiba fazer a escolha certa</h3>                
                    <h6 className="segundo-h6">O tipo de dedução mais adequado para a sua declaração do Imposto de Renda dependerá do montante das suas despesas dedutíveis em relação à sua renda. É importante avaliar cuidadosamente essas informações para determinar se é mais vantajoso optar pelas deduções legais ou pelo desconto simplificado. Dessa forma, você poderá verificar qual alternativa é capaz de reduzir o valor do imposto a pagar ou garantir a restituição.</h6>
                    <a href="#deducoes-legais-desonto-simplificado" className="btn btn-success btn-lg btn-capa-deducoes-legais-desonto-simplificado zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-deducoes-legais-desonto-simplificado zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;