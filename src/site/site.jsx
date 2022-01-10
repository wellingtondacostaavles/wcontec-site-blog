import React from 'react';
import Menu from './Components/menu';
import Inicio from './Components/inicio';
import Beneficios from './Components/beneficios';
import Testemunho from './Components/testemunho';
import Abrirempresagratis from './Components/abrirempresagratis';
import Ultimosartigosblog from './Components/ultimosartigosblog';
import Precos from './Components/precos';
import Parceiros from './Components/parceiros';
import Contato from './Components/contato';

function Site(){
    return <div>
      <Menu/>
      <Inicio/>
      <Beneficios/>
      <Testemunho/>
      <Abrirempresagratis/>
      <Ultimosartigosblog/>      
      <Precos/>
      <Parceiros/>
      <Contato/>
    </div>;
  }

export default Site;