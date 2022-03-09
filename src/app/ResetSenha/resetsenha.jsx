import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './resetsenha.css';

import firebase from '../Config/firebase';
import 'firebase/auth';
import Navbar from '../Components/Navbar/navbarlogin';
import Caparesetsenha from './caparesetsenha';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../../site/Components/contato';

function ResetSenha(){

  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');

  function recuperarSenha(){

    firebase.auth().sendPasswordResetEmail(email).then(resultado => {
      setMensagem('');
      setSucesso('Email enviado com sucesso');
    }).catch(erro => {
      setSucesso('');
      setMensagem('Erro ao enviar email: ' + erro.message);
    })

  }

    return <div>
      <Navbar/>
      <Caparesetsenha/>
      
      <section id="resetsenha">
              
      <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>
             
        <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary mt-3 btn-resetsenha" type="button">Enviar</button>

        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
        {sucesso.length > 0 ? <div className="alert alert-success mt-2" role="alert">{sucesso}</div> : null}

        <div className="login-links mt-5">
          <Link to="/app/criar-conta" className="mx-3">Criar uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Wcontec</p>
      </form>
      </div>
      </section>
      <Parceiros/>
      <Footer/>
      </div>
  }

export default ResetSenha;