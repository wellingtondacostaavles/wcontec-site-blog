import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container">
            <div className="row">
            <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark  slide" data-bs-ride="carousel">            
                <div className="carousel-inner">
                    
                    <div className="carousel-item active" data-bs-interval="15000">
                        <h2>Confesso que no começo achava que seria difícil de operar a ferramenta, mas para minha alegria estava enganada, e está sendo um prazer poder contar com esta plataforma de gestão financeira com assessoria contábil online, por ela consigo me comunicar com meu contador quando necessário.</h2>
                        <img src="Images/Testemunhos/Emmanuele.png" alt="cliente 3"/>
                        <em>Emmanuele Rufino - Pernambuco</em>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <h2>Tudo em um único lugar, a Wcontec facilitou muito meu trabalho desde que disponibilizou esta plataforma de gestão financeira com assessoria contábil online, por ela consigo emitir nota fiscal de venda, de serviço, controlo minhas contas a pagar, a receber, e muito mais, só tenho a agradecer.</h2>
                        <img src="Images/Testemunhos/joaobosco.png" alt="cliente 2"/>
                        <em>João Bosco - São Paulo</em>
                    </div>  

                    <div className="carousel-item" data-bs-interval="15000">
                        <h2>Pediram-me para comentar o que estou achando da plataforma de gestão financeira com assessoria contábil, e uma coisa que estou gostando bastante dentre muitas é a parte de gerenciamento de e-mails, tudo feito de forma automática, e enviar as cobranças para meus clientes nunca foi tão fácil.</h2>
                        <img src="Images/Testemunhos/fabianaolimpio.png" alt="cliente 4"/>
                        <em>Fabiana Olimpio - Pernambuco</em>
                    </div> 

                    <div className="carousel-item" data-bs-interval="15000">
                        <h2>Excelente plataforma de gestão empresarial, além de me fornecer dados financeiro da minha empresa por ela consigo manter uma relação mais direta com meu contador, sem a necessidade de está ligando ou passando e-mail, pelo drive consigo ter acesso a todos os arquivos que preciso.</h2>
                        <img src="Images/Testemunhos/josehelenilson.png" alt="cliente 1"/>
                        <em>José Helenilson - Pernambuco</em>
                    </div> 

                    <div className="carousel-item" data-bs-interval="15000">
                        <h2>Estou gostando de trabalhar com a Wcontec, além de poder controlar minhas entradas e saídas de caixa, posso cadastrar uma conta bancária da minha empresa e desta forma a ferramenta já gera o boleto e envia para nossos clientes a cobrança das mensalidades de forma automática.</h2>
                        <img src="Images/Testemunhos/MarcosAurelio.png" alt="cliente 5"/>
                        <em>Marcos Aurelio - Pernambuco</em>
                    </div>                  
                        
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>;
}

export default Testemunho;