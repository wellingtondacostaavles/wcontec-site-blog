import React from 'react';
import {Link} from 'react-router-dom';
import './artigo21.css';

function Capa(){
    return <section id="capa-consulta-ao-sistema-valores-a-receber-bcb">      
          
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/Images/Consultasaosistemavaloresareceberbcb/capaprincipal.png" />
                </div>                
                <div className="col-lg-6">
                    <h3>Já estão disponíveis as<span className="terceiro-h3">  consultas ao Sistema Valores a Receber</span></h3>                
                    <h6 className="segundo-h6">Através desta consulta você saberá se tem valor a receber ou não, caso tenha, ficará por dentro da data e o período para consultar e solicitar o resgate do saldo existente.</h6>
                    <a href="#consulta-ao-sistema-valores-a-receber-bcb" className="btn btn-success btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb zoom-img">Continue lendo</a>
                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb zoom-img">Área do Cliente</a>
                </div>               
            </div>
        </div>

    </section>;
  }

  export default Capa;