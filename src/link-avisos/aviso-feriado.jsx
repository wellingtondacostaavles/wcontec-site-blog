import React from 'react';
import './links-avisos.css';

function Avisoferiado(){
    return <div>
                   
      
    <section id="aviso-feriado">
      
    <div className="container-aviso-feriado">
        <div className="col-lg-4">
            <img src="/Images/Logo-WCONTEC.P.png"/>
        </div>
		<div className="header-aviso-feriado">
			<h1>Informações importantes sobre os serviços disponíveis</h1>
		</div>
		<div className="content-aviso-feriado">
            <h3>O feriado do dia 2 de Novembro está chegando e traz algumas mudanças no horário de funcionamento de nossos serviços:</h3>
            <h4><img src="Images/check.png" />As solicitações de saques realizadas no dia 01/11 à plataforma, só serão creditadas em sua conta no próximo dia 03/11.</h4>
            <h5>Abraços</h5>
            <h5>Equipe Wcontec</h5>
		</div>
		<footer className="social-media">
			<a href="https://www.facebook.com/profile.php?id=100072384950030" target="_blank"><i className="fab fa-facebook-square"></i></a>
			<a href="https://instagram.com/wcontec?r=nametag" target="_blank"><i className="fab fa-instagram-square"></i></a>
			<a href="https://youtube.com/@wcontec2017" target="_blank"><i className="fab fa-youtube-square"></i></a>
			<a href="https://twitter.com/w_contec" target="_blank"><i className="fab fa-twitter-square"></i></a>
			<p>Copyright © 2023 Wcontec. Todos direitos reservados</p>
		</footer>	  
	</div>

    </section>            
  </div> 
  }

export default Avisoferiado;