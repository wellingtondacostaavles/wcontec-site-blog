import React from 'react';
import PushMessage from '../PushMessage/pushmessage';
import Menu from './Components/menu';
import Chamada from './Components/chamadas';
import Inicio from './Components/inicio';
import Beneficios from './Components/beneficios';
import Testemunho from './Components/testemunho';
import Abrirempresagratis from './Components/abrirempresagratis';
import Precos from './Components/precos';
import Ultimosartigosblog from './Components/ultimosartigosblog';
import Cardcalculadoras from './Components/cardcalculadoras';
import Parceiros from './Components/parceiros';
import Contato from './Components/contato';

function Site(){
    return <div>
      <PushMessage/>
      <Menu/>
      <Inicio/>
      <Beneficios/>
      <Testemunho/>
      <Abrirempresagratis/>
      <Precos/>
      <Ultimosartigosblog/>
      <Cardcalculadoras/>
      <Parceiros/>
      <Contato/>
    </div>;
  }

export default Site;