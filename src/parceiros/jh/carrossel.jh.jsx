import React from 'react';
import './jh.css';

function Carrosseljh(){
    return <section id="carrossel-jh">
        <div className="container">
            <div className="row">
            <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark  slide" data-bs-ride="carousel">            
                <div className="carousel-inner">
                    
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="https://raw.githubusercontent.com/wcontec-imagens/diversas/main/teste.png" alt="cliente 3"/>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://raw.githubusercontent.com/wcontec-imagens/diversas/main/teste.png" alt="cliente 2"/>
                    </div>  

                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://raw.githubusercontent.com/wcontec-imagens/diversas/main/teste.png" alt="cliente 4"/>
                    </div> 

                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://raw.githubusercontent.com/wcontec-imagens/diversas/main/Banner-728x90.png" alt="cliente 1"/>
                    </div> 

                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="https://raw.githubusercontent.com/wcontec-imagens/diversas/main/Banner-728x90.png" alt="cliente 5"/>
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

export default Carrosseljh;