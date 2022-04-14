import React, {useState, useEffect} from 'react';
import TabelaPisCorretora from './tabelapiscorretora';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

import './piscorretora.css';

function Piscorretorahome(){

  const [piscorretora, setPiscorretora] = useState([]);
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
    
  let listpiscorretora = [];

    useEffect(function(){
      firebase.firestore().collection('piscorretora').get().then(async function(resultado){
        await resultado.docs.forEach(function(doc){
          if (doc.data().Periodo.indexOf(busca) >= 0) {
          listpiscorretora.push({
                id: doc.id,
                Periodo: doc.data().Periodo,
                ReceitaFinanceiras: doc.data().ReceitaFinanceiras,
                PremiosdeSeguros: doc.data().PremiosdeSeguros,
                PISretidonafonte: doc.data().PISretidonafonte,
                PISaPagar: doc.data().PISaPagar
              });
            }
        })
        setPiscorretora(listpiscorretora);
      })
    }, [busca]);
   
  return <div>         
        
  <section id="pis-corretora-home">  
  
  <div className="row text-center">
          <div className="titulo">
            <h1>PIS corretora</h1>
            <p>Calcule o valor do PIS mensal a pagar para Corretoras de títulos e valores mobiliários</p>
          </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Link to='/app/pis-corretora' className="btn btn-primary" type="button"><i class="fas fa-plus"></i> Pis Corretora</Link>
        </div>
        <div className="col-8">
            <div className="input-group mb-3">
              <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
              <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i class="fas fa-search"></i> Pesquisar</button>
            </div>
          </div>
      </div>
      <div className="row">
        <TabelaPisCorretora arrayPiscorretora={piscorretora} />
      </div>
  </section>       
</div>  
  }

export default Piscorretorahome;