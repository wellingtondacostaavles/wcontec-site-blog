import react from "react";

function Parceiros(){
    return <section id="parceiros">      
     
        <div className="carousel slide" data-ride="carousel">        

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <a href="https://api.whatsapp.com/send?phone=5581996584830">
                        <img src="Images/CertificadoDigital.png" className="img-fluid w-100" alt="..." />
                        </a>
                    </div>  

                    <div className="carousel-item">
                        <a href="https://mpago.li/1Ts8gW7">
                        <img src="Images/MaquininhaPoint.png" className="img-fluid w-100" alt="..." />
                        </a>
                    </div>

                    <div className="carousel-item">
                        <a href="https://jhmateriaisparaconstrucao.com/">
                        <img src="Images/Jh.png" className="img-fluid w-100" alt="..." />
                        </a>
                    </div>  

                </div>
            </div>            
     </div>     
    </section>;
  }

export default Parceiros;