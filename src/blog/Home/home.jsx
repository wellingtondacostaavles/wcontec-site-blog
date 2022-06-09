import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../../site/Components/contato';
import Parceiros from '../../site/Components/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Tecnologiadainformacao from '../Components/Categorias/TecnologiadaInformacao/tecnologiadainformacao';
import Recursoshumanos from '../Components/Categorias/Recursoshumanos/recursoshumanos';
import Empreendedorismo from '../Components/Categorias/Empreendedorismo/empreendedorismo';
import Gestaoempresarial from '../Components/Categorias/Gestaoempresarial/gestaoempresarial';
import Financas from '../Components/Categorias/Financas/financas';
import Tributacao from '../Components/Categorias/Tributacao/tributacao';
import Inicio from '../Components/Inicio/inicio';

function Home(){
    return <div>
      <Navbar/> 
      <Inicio/>
      <Categorias/>
      <Recomendados/>
      <Tecnologiadainformacao/>
      <Recursoshumanos/>
      <Empreendedorismo/>
      <Gestaoempresarial/>
      <Financas/>
      <Tributacao/>
      <Parceiros/>
      <Footer/>   
    </div> 
  }

export default Home;