import React from 'react';

function Beneficios(){
    return <section id="beneficios">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-heart fa-5x"></i>
                    <h3><span className="quarto-h3">Fácil de usar.</span></h3>                    
                    <p>A Wcontec possui uma interface fácil de usar, não somos robôs, por ela você tem acesso a contadores para te atender quando precisar.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-globe-americas fa-5x"></i>
                    <h3><span className="quarto-h3">Em qualquer lugar.</span></h3> 
                    <p>Gerencie sua empresa de forma eficiente, onde quer que você esteja, basta ter acesso a um computador ou notbook com internet.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-desktop fa-5x"></i>
                    <h3><span className="quarto-h3">Painel intuitivo.</span></h3>
                    <p>Controle suas entradas e saídas de dinheiro e gere relatórios, fluxo de caixa, demonstrativos e muito mais de forma simples e fácil.</p>
                </div>                                         
            </div>
        </div>
    </section>;
  }

export default Beneficios;