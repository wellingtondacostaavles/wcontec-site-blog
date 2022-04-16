import React, {useState, useEffect} from 'react';
import TabelaPisCorretora from './tabelapiscorretora';
import Navbar from '../../../app/Components/Navbar/navbar';
import {Link} from 'react-router-dom';

import firebase from 'firebase';
import 'firebase/firestore';


import './piscorretora.css';

function Piscorretorahome(){

  const [piscorretora, setPiscorretora] = useState([]);
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
    
      useEffect(function(){
      

        firebase.firestore().collection('piscorretora').get().then(async function(resultado){

        let listpiscorretora = [];
          
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
    <Navbar/>       
        
  <section id="pis-corretora-home">  
  
  <div className="row text-center">
          <div className="titulo">
            <h1>PIS corretora</h1>
            <p>Calcule o valor do PIS mensal a pagar para Corretoras de títulos e valores mobiliários</p>
          </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Link to='/app/pis-corretora' className="btn btn-success btn-pis-corretora-home" type="button"><i className="fas fa-plus"></i> Pis Corretora</Link>
        </div>
        <div className="col-6">
            <div className="input-group mb-3">
              <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por período" aria-describedby="button-addon2" />
              <button onClick={(e) => setBusca(texto)} className="btn btn-primary btn-pis-corretora-home" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
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