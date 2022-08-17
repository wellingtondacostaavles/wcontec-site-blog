import React from 'react';
import {Link} from 'react-router-dom';
import './artigo19.css';

function Capa(){
    return <section id="capa-brasileirospreferemcomprasonline">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Brasileirospreferemcomprasonline/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Pesquisa aponta que 71% dos brasileiros preferem compras online,<span className="terceiro-h3"> a pandemia ajudou a mudar a forma de consumo</span></h3>                
                    <h6 className="segundo-h6">Uma pesquisa realizada pela ConQuist Consultoria mostrou que a pandemia mudou a maneira como os consumidores fazem compras ou contratam um serviços. O estudo mapeou o que mudou no atendimento prestado ao consumidor na pandemia.</h6>
                    <a href="#brasileirospreferemcomprasonline" className="btn btn-success btn-lg btn-capa-brasileirospreferemcomprasonline">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-brasileirospreferemcomprasonline">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;