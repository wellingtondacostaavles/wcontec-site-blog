import react from "react";

function Parceiros(){
    return <section id="parceiros">   
        <div className="parceiros-logos">  
        <div className="container">
            <div className="row coluna1">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                <a href="https://imperio-dos-descartaveis.kyte.site/" target="_blank"><img src="/Images/Parceiros/ImperioDescartaveis.png"/></a>
                </div>
                <div className="col">
                    <a href="https://api.whatsapp.com/send?phone=5581997780156" target="_blank"><img src="/Images/Parceiros/Diniz-contabilidade.png"/></a>
                </div>
                <div className="col">
                    <a href="https://go.hotmart.com/H67767543F?ap=305a" target="_blank"><img src="/Images/Parceiros/Vargas.png"/></a>
                </div>
                <div className="col">
                    <a href="https://api.whatsapp.com/send?phone=5581998753986" target="_blank"><img src="/Images/Parceiros/OGS.png"/></a>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            <div className="row coluna2">
                <div className="col"></div>
                <div className="col">
                    <a href="https://aws.amazon.com/pt/" target="_blank"><img src="/Images/Parceiros/AWS.png"/></a>
                </div>
                <div className="col">
                    <a href="/parceiro-certificacao-digital" target="_blank"><img src="/Images/Parceiros/Certificado.digital.png"/></a>
                </div>
                <div className="col">
                    <a href="https://osayk.com.br/" target="_blank"><img src="/Images/Parceiros/Osayk.png"/></a>
                </div>
                <div className="col">
                    <a href="https://jhmateriaisparaconstrucao.com/" target="_blank"><img src="/Images/Parceiros/JH.png"/></a>
                </div>
                <div className="col">
                    <a href="https://github.com/" target="_blank"><img src="/Images/Parceiros/GitHub.png"/></a>
                </div>
                <div className="col">
                    <a href="https://www.instagram.com/invites/contact/?i=8xi8cgtzehge&utm_content=3egv8nw" target="_blank"><img src="/Images/Parceiros/Issoebom.png"/></a>
                </div>
                <div className="col"></div>
            </div>
        </div>
    </div>    
    <div className="container-fluid">
        <div className="row">
                <p className="position-parceiros-p">Parceiros</p>             
        </div>
    </div>
    <div className="parceiros"> 
     <div className="container">
        <div className="row">
             <div className="col-lg-12">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <a href="https://bit.ly/3pOcj5d" target="_blank"><img src="/Images/Parceiros/Vargas-banner-Lado-B-laranja.png"/></a>
                        </div>                        
                        <div className="carousel-item" data-bs-interval="3000">
                            <a href="http://bit.ly/3UN1KNb" target="_blank"><img src="/Images/Parceiros/Vargas-banner-Lado-A-laranja.png"/></a>
                        </div>
                    </div>
                </div>
            </div>    
            </div>     
        </div>
    </div>   
    </section>;
  }

export default Parceiros;