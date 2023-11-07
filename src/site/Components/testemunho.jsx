import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container-fluid">
            <div className="row">
            <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark  slide" data-bs-ride="carousel">            
                <div className="carousel-inner">
                    
                    <div className="carousel-item active" data-bs-interval="15000">
                        <h3>"No começo, eu confesso que estava um pouco apreensiva em relação à plataforma da Wcontec. Mas para minha alegria, descobri que operá-la é muito fácil e intuitivo. Estou encantada com a praticidade que a plataforma proporciona, permitindo que eu me comunique facilmente com meu contador sempre que preciso. Agradeço à Wcontec por disponibilizar uma ferramenta tão eficiente e por oferecer um suporte de qualidade aos seus clientes."</h3>
                        <img src="Images/Testemunhos/Emmanuele.png" alt="cliente 3"/>
                        <em>Emmanuele Rufino - Bananeiras/PB</em>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <h3>"Com a plataforma de gestão financeira e assessoria contábil online da Wcontec, tudo fica mais fácil. Em um único lugar, posso emitir notas fiscais de venda e serviço, controlar minhas contas a pagar e receber, e muito mais. Desde que comecei a usar a plataforma, meu trabalho ficou mais ágil e eficiente. Só tenho a agradecer à Wcontec pela parceria e pelo suporte constante."</h3>
                        <img src="Images/Testemunhos/EduardoFigueiredo.png" alt="cliente 2"/>
                        <em>Eduardo Figueiredo - Recife/PE</em>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <h3>"Como usuária da Wcontec, uma das coisas que mais me impressionou foi a eficiência do gerenciamento de e-mails. Tudo é feito automaticamente, o que torna o envio de cobranças para meus clientes extremamente fácil e rápido. Além disso, a plataforma oferece diversas outras funcionalidades que têm facilitado bastante a minha rotina de trabalho. Estou muito satisfeita com a parceria e recomendo a Wcontec a todos que buscam soluções inteligentes para seus negócios."</h3>
                        <img src="Images/Testemunhos/fabianaolimpio.png" alt="cliente 4"/>
                        <em>Fabiana Olimpio - Itamaracá/PE</em>
                    </div> 

                    <div className="carousel-item" data-bs-interval="15000">
                        <h3>"Estou muito satisfeito com a plataforma de gestão empresarial da Wcontec. Ela me proporciona uma visão clara e detalhada dos dados financeiros da minha empresa, permitindo que eu tome decisões mais assertivas e eficientes. Além disso, a plataforma facilitou bastante a minha relação com o meu contador, pois agora posso acessar todos os arquivos e documentos necessários através do drive, sem precisar ficar ligando ou enviando e-mails. Agradeço à Wcontec por disponibilizar uma ferramenta tão completa e eficiente para a gestão do meu negócio."</h3>
                        <img src="Images/Testemunhos/josehelenilson.png" alt="cliente 1"/>
                        <em>José Helenilson - Pombos/PE</em>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <h3>"Com a plataforma online de gestão financeira e assessoria contábil da Wcontec, tudo se torna mais simplificado. Em um único local, consigo emitir notas fiscais de venda e serviço, gerenciar minhas contas a pagar e receber, e muito mais. Desde que comecei a utilizar esta plataforma, minha produtividade no trabalho aumentou significativamente. Expresso minha gratidão à Wcontec pela parceria e pelo suporte ininterrupto."</h3>
                        <img src="Images/Testemunhos/PaulaPolo.png" alt="cliente 2"/>
                        <em>Paula Polo - Olinda/PE</em>
                    </div> 

                    <div className="carousel-item" data-bs-interval="15000">
                        <h3>"Estou muito satisfeito em trabalhar com a Wcontec, pois além de me proporcionar um controle financeiro completo da minha empresa, também consigo cadastrar a conta bancária da minha empresa para que a plataforma possa gerar os boletos de cobrança de forma automática e enviar para os nossos clientes. Isso tem me ajudado muito a economizar tempo e a evitar atrasos nos pagamentos."</h3>
                        <img src="Images/Testemunhos/MarcosAurelio.png" alt="cliente 5"/>
                        <em>Marcos Aurelio - Igarassu/PE</em>
                    </div>

                    <div className="carousel-item" data-bs-interval="15000">
                        <h3>"Estou muito satisfeito com a eficiência do gerenciamento de e-mails por ser tudo automatizado, isso torna o envio de cobranças para meus clientes mais rápido e fácil. Acrescento também que a plataforma oferece várias outras funcionalidades que têm melhorado muito minha rotina de trabalho. Recomendo a Wcontec a todos que buscam soluções inteligentes para suas empresas."</h3>
                        <img src="Images/Testemunhos/MarcosPaulo.png" alt="cliente 4"/>
                        <em>Marcos França - Paulista/PE</em>
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