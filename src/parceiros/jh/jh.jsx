import React from 'react';
import Navjh from './navjh';
import Carrosseljh from './carrossel.jh';
import Produtosjh from './produtosjh';
import Footer from '../../site/Components/contato';
import './jh.css';
import Contatojh from './contatojh';

function Jh(){
    return <div>
    <Navjh/>
    <section id="jh">
        <div className="container">                
            <div className="row">
                <h1 className="titulo-jh">JH TRANSPORTE E VENDAS DE MATERIAIS PARA CONSTRUÇÃO</h1>
            </div>
        </div>
    </section>
    <Carrosseljh/>
    <Produtosjh/>
    <Contatojh/>           
  </div> 
  }

export default Jh;