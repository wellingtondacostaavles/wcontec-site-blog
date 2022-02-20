import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import firebase from '../Config/firebase'
import 'firebase/auth';

import './novocliente.css';

function NovoCliente(){
    return <div>
        <h1>Novo Cliente</h1>          
    </div>;
  }

export default NovoCliente;