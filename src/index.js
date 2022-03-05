import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {AuthProvider} from './app/Context/auth';

ReactDOM.render(<AuthProvider><App/></AuthProvider>, document.getElementById('root')
);