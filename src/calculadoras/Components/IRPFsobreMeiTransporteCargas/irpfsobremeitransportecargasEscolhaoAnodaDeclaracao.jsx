import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';
import {Link} from 'react-router-dom';
import Rodapeprodutos from '../../../site/Components/rodapeprodutos';

import './irpfsobremeitransportecargas.css';

function IrpfsobremeitransportecargasEscolhaoAnodaDeclaracao(){  
    
        return <div>
        
        <section id="irpf-sobre-mei-transporte-cargas-Escolha-o-Ano-da-Declaracao">  
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>DIRPF</h1>
                    <h2>Motorista de transporte de cargas</h2>
                    <h4>Microempreendedor Individual</h4>
                    <h4>Selecione o período desejado para realizar o cálculo do seu imposto de renda.</h4>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    
                    <div><Link to='/calculadoras-irpf-mei-transporte-cargas-do-exercicio-2017-ano-calendario-2016-ate-exercicio-2023-ano-calendario-2022' className="btn btn-success btn-irpf-sobre-mei-transporte-cargas-Escolha-o-Ano-da-Declaracao" type="button"> Do exercício 2017 (ano-calendário 2016) até exercício 2023 (ano-calendário 2022)</Link></div>
                    <div><Link to='/calculadoras-irpf-mei-transporte-cargas-no-exercicio-de-2024-ano-calendario-de-2023' className="btn btn-success btn-irpf-sobre-mei-transporte-cargas-Escolha-o-Ano-da-Declaracao" type="button"> No exercício de 2024 (ano-calendário de 2023)</Link></div>
                    <div><Link to='/calculadoras-irpf-mei-transporte-cargas-no-exercicio-de-2025-ano-calendario-de-2024' className="btn btn-success btn-irpf-sobre-mei-transporte-cargas-Escolha-o-Ano-da-Declaracao" type="button"> No exercício de 2025 (ano-calendário de 2024)</Link></div>
                    <div><Link to='/calculadoras-irpf-mei-transporte-cargas-no-exercicio-de-2026-ano-calendario-de-2025' className="btn btn-success btn-irpf-sobre-mei-transporte-cargas-Escolha-o-Ano-da-Declaracao" type="button"> A partir do exercício de 2026 (ano-calendário de 2025)</Link></div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        <Rodapeprodutos/>
        </section>       
      </div> 
    }
  
  export default IrpfsobremeitransportecargasEscolhaoAnodaDeclaracao;