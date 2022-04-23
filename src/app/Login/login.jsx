import React, {useState, useContext} from 'react';
import {Link, Redirect}  from 'react-router-dom';
import './login.css';
import {AuthContext} from '../Context/auth';
import Navbar from '../Components/Navbar/navbarlogin';
import Capalogin from './capalogin';
import Ultimosartigosblog from '../../site/Components/ultimosartigosblog';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../../site/Components/contato';

import firebase from '../Config/firebase';
import 'firebase/auth';


function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');    
    const {setLogado} = useContext(AuthContext);

    function LoginUsuario(){
      firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function(firebaseUser){
          localStorage.setItem("logado", "S");
          setLogado(true);
          setSucesso('S');          
        })
        .catch(function(error){
          localStorage.setItem("logado", "N");
          setLogado(false);
          setSucesso('N');
        });
    }   
    
    function alterarEmail(event){      
      setEmail(event.target.value);
    }

    function alterarSenha(event){      
      setSenha(event.target.value);
    }

    return <div>
      <Navbar/>
      <Capalogin/>
    
    <section id="login">
    
    <div className="d-flex align-items-center text-center form-container">    
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        
        <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary btn-login" type="button">Acessar</button>

        {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null}
        {sucesso === 'S' ? <Redirect to='/app/calculadoras-pro' /> : null}

        <div className="login-links mt-5">
          <Link to="/app/recuperar-senha" className="mx-3">Esqueci minha senha</Link>
          <Link to="/app/criar-conta" className="mx-3">Criar uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Wcontec</p>
      </form>
    </div>
    </section>
    <Ultimosartigosblog/>
    <Parceiros/>
    <Footer/>
    </div>
  }

export default Login;