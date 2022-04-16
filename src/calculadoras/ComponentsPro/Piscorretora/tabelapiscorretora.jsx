import React from 'react';
import {Link} from 'react-router-dom';

import './piscorretora.css';

function TabelaPisCorretora(props){

    function deleteUser(id){
        alert('Excluir usuário ' + id);
    }

    return <table className="table table-responsive table-hover table-bordered"><thead>
    <tr className="table-secondary">
      <th scope="col">id</th>
      <th scope="col">Período</th>
      <th scope="col">Receita Financeiras</th>
      <th scope="col">Prêmios de Seguros</th>
      <th scope="col">PIS retido na fonte</th>
      <th scope="col">PIS a Pagar</th>
      <th scope="col" className="col-acao"></th>
    </tr>
  </thead>
  <tbody>

    {
        props.arrayPiscorretora.map((piscorretora) => {
          return <tr key={piscorretora.id}>
          <th scope="row">{piscorretora.id}</th>
          <td>{piscorretora.Periodo}</td>
          <td>{piscorretora.ReceitaFinanceiras}</td>
          <td>{piscorretora.PremiosdeSeguros}</td>
          <td>{piscorretora.PISretidonafonte}</td>
          <td>{piscorretora.PISaPagar}</td>
          <td>
              <Link to='#'><i className="fas fa-edit icone-acao"></i></Link>
              <Link to='#' onClick={() => deleteUser(piscorretora.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
          </td>
        </tr>
        })
    }        
    
    </tbody>
</table>
    }
  
  export default TabelaPisCorretora;