import React from 'react';
import {Link} from 'react-router-dom';
import './artigo12.css';

function Capa(){
    return <section id="capa-dicasparaplanejaroanonovodasuaempresa">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Dicasparaoanonovo/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3>Dicas para planejar o ano novo da sua empresa <span className="terceiro-h3"> e estruturar os principais pilares do seu negócio.</span></h3>                
                    <h6>Com o final do ano se aproximando é comum querer planejar um novo ciclo com metas a conquistar nos próximos 365 dias, para que tudo ocorra conforme o esperado, é importante montar ações para cada pilar do seu negócio: finanças, marketing, vendas, pessoas e estratégias. Confira algumas dicas...</h6>
                    <a href="#dicasparaplanejaroanonovodasuaempresa" className="btn btn-success btn-lg btn-capa-dicasparaplanejaroanonovodasuaempresa">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-dicasparaplanejaroanonovodasuaempresa">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;