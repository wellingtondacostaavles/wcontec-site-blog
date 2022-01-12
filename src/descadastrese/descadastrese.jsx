import React from 'react';
import Navbar from '../blog/Components/Navbar/navbar';
import Footer from '../blog/Components/Contato/contato';
import Parceiros from '../blog/Components/Parceiros/parceiros';
import Categorias from '../blog/Components/Categorias/categorias';
import Recomendados from '../blog/Components/Recomendados/recomendados';
import './descadastrese.css';

function Descadastrese(){
    return <div>
      <Navbar/>                
      
    <section id="descadastrese">

        <div className="container">
            <div className="row"> 
             
            </div> 
        </div>    
            
         
           
    </section>              
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Descadastrese;