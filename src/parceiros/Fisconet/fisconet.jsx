import React from 'react';
import Navfisconet from './navfisconet';
import Carrosselfisconet from './carrossel.fisconet';
import Produtosfisconet from './produtosfisconet';
import Contatofisconet from './contatofisconet';
import './fisconet.css';

function Fisconet(){
    return <div>
    <Navfisconet/>
    <Carrosselfisconet/>
    <Produtosfisconet/>
    <Contatofisconet/>           
  </div> 
  }

export default Fisconet;