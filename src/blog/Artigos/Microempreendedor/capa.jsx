import React from 'react';
import {Link} from 'react-router-dom';
import './microempreendedor.css';

function Capa(){
    return <section id="capa-microempreendedor">      
          
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <img src="/Images/Microempreendedor/Mircroempreendedorestemareceber/capaprincipal.png" />
                </div>
                
                <div className="col-lg-6">
                    <h3><span className="terceiro-h3">Microempreendedores individuais</span> e<span className="terceiro-h3"> Trabalhadores Informais</span> terão direito a um Microcrédito Digital</h3>                
                    <h6>A partir desta segunda-feira (28), a Caixa Econômica Federal concede empréstimos de até R$ 1 mil para pessoa física e até R$ 3 mil para Microempreendedor Individual. Com juros de 1,95% ao mês, e a pessoa física ainda poderá dividir em até 24 parcelas. O crédito para o MEI terá juros de 1,99% ao mês, também com quitação em até 24 parcelas.</h6>
                    <a href="#microempreendedor" className="btn btn-success btn-lg btn-capa-microempreendedor">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-microempreendedor">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;