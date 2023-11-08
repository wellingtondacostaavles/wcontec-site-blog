import React from 'react';

function Beneficios(){
    return <section id="beneficios">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-heart fa-5x"></i>
                    <h3>Fácil de usar</h3>                    
                    <p>Conte com atendimento personalizado e contadores para ajudar em todas as etapas do negócio. A interface intuitiva torna a gestão empresarial mais eficiente.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-globe-americas fa-5x"></i>
                    <h3>Em qualquer lugar</h3> 
                    <p>Aprimore sua gestão empresarial com eficiência e praticidade, independentemente de onde esteja, apenas com um computador ou notebook com acesso à internet.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-desktop fa-5x"></i>
                    <h3>Painel intuitivo</h3>
                    <p>Controle suas entradas e saídas, emita nota fiscal, gere relatórios financeiros, fluxo de caixa detalhado, demonstrativos contábeis e muito mais de forma simples e eficiente.</p>
                </div>                                         
            </div>
        </div>
    </section>;
  }

export default Beneficios;