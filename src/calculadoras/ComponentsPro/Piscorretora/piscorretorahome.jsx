import React, {useState, useEffect} from 'react';
import TabelaPisCorretora from './tabelapiscorretora';
import NavbarApp from '../../../app/Components/Navbar/navbar';
import {Link} from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import PiscorretoraPDF from './piscorretorapdf';

import firebase from 'firebase';
import 'firebase/firestore';

import './piscorretorapro.css';


function Piscorretorahome(){

  const [piscorretora, setPiscorretora] = useState([]);
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
  const [excluido, setExcluido] = useState('');
  const [confirmacao, setConfirmacao] = useState(false); 
  const [confirmacaoId, setConfirmacaoId] = useState(''); 


      function deletepiscorretorapro(id){
          firebase.firestore().collection('piscorretora').doc(id).delete().then(() => {
            setExcluido(id);
            setConfirmacao(false);
          })
      }

      function confirmDeletepiscorretorapro(id){
        setConfirmacaoId(id);
        setConfirmacao(true);
      }
    
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
    }, [busca, excluido]);
   
  return <div>  
    <NavbarApp/>       
        
  <section id="pis-corretora-home">  
  
  <div className="row text-center">
          <div className="titulo">
            <h1>PIS corretora</h1>
            <p>Calcule o valor do PIS mensal a pagar para Corretoras de títulos e valores mobiliários</p>
          </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Link to='/app/calculadoras-pro-pis-corretora' className="btn btn-success btn-pis-corretora-home" type="button"><i className="fas fa-plus"></i> Pis Corretora</Link>
          <button onClick={(e) => PiscorretoraPDF(piscorretora)} className="btn btn-danger btn-pis-corretora-home" type="button" id="button-addon2"><i className="far fa-file-pdf"></i> Gerar PDF</button>
        </div>
        <div className="col-6">
            <div className="input-group mb-3">
              <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control input-busca" placeholder="Pesquisar por período" aria-describedby="button-addon2"/>
              <button onClick={(e) => setBusca(texto)} className="btn btn-primary btn-pis-corretora-home-pesquisar" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
            </div>
          </div>
      </div>
      <div className="row">
        <TabelaPisCorretora arrayPiscorretora={piscorretora} clickDelete={confirmDeletepiscorretorapro} />

      {
        confirmacao ? <SweetAlert 
                        custom
                        showCancel
                        showCloseButton
                        confirmBtnText="Sim"
                        confirmBtnBsStyle="danger"
                        confirmBtnCssClass="btn-alerta"
                        btnSize="50px"
                        cancelBtnText="Não"
                        cancelBtnBsStyle="light"
                        cancelBtnCssClass="btn-alerta"
                        customIcon="https://www.wcontec.com.br/Images/apple-icon.png" 
                        title="Exclusão"
                        onConfirm={() => deletepiscorretorapro(confirmacaoId)}
                        onCancel={() => setConfirmacao(false)}
                        reverseButtons={true}
                      >
                        Deseja excluir o valor do Pis corretora selecionado?
                      </SweetAlert> : null }
      </div>
  </section>       
</div>  
  }

export default Piscorretorahome;