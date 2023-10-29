import React from 'react';
import './fisconet.css';

function Carrosselfisconet(){
    return <section id="carrossel-fisconet">
        <div className="container">
            <div className="row">
            <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark  slide" data-bs-ride="carousel">            
                <div className="carousel-inner">                    
                    <div className="carousel-item active" data-bs-interval="5000">
                        <a href="https://bit.ly/3tRImpO" target="_blank" rel="nofollow"><img src="/Images/Parceiros/sites/Fisconet/Banner-AnalistaContabil.png" alt="cliente 3"/></a>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                        <a href="https://bit.ly/4704LQ6" target="_blank" rel="nofollow"><img src="/Images/Parceiros/sites/Fisconet/Banner-AnalistaDP.png" alt="cliente 3"/></a>
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
            <div>
                <h1 className="titulo-carrocel-fisconet">Só de estar aqui você já está ganhando!</h1>
                <h3 className="text-center">Acompanhe uma aula completa do curso Formação de Analista Contábil.</h3>
            </div>
            <div className="row">
                <div className="content-fisconet">
			        <iframe width="560" height="315" src="https://www.youtube.com/embed/SQXCV0usHP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			    </div>
            </div>
            <div className="row text-center">    
                <div>  
                    <a href="https://bit.ly/3tRImpO" target="_blank" className="btn btn-primary btn-lg btn-fisconet">Adiquira o Curso Completo</a>
                </div>
            </div>                
        </div>
    </div>
</section>;
}

export default Carrosselfisconet;