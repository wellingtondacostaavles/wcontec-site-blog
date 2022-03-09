import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../../site/Components/contato';
import Parceiros from '../../site/Components/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Inicio from '../Components/Inicio/inicio';
import Todosartigos from '../Components/Artigos/todosartigos';

function Home(){
    return <div>
      <Navbar/> 
      <Inicio/>
      <Todosartigos/>  
      <Categorias/>
      <Recomendados/>
      <Parceiros/>
      <Footer/>   
    </div> 
  }

export default Home;