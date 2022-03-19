import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../../site/Components/contato';
import Parceiros from '../../site/Components/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Inicio from '../Components/Inicio/inicio';

function Home(){
    return <div>
      <Navbar/> 
      <Inicio/>
      <Categorias/>
      <Recomendados/>
      <Parceiros/>
      <Footer/>   
    </div> 
  }

export default Home;