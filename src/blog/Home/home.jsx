import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Contato/contato';
import Parceiros from '../Components/Parceiros/parceiros';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Inicio from '../Components/Inicio/inicio';
import Artigos from '../Components/Artigos/artigos';
import './home.css';


function Home(){
    return <div>
      <Navbar/> 
      <Inicio/>
      <Artigos/>  
      <Categorias/>
      <Recomendados/>
      <Parceiros/>
      <Footer/>   
    </div> 
  }

export default Home;