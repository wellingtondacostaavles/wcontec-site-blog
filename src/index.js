import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './app/Context/auth';
import App from './app';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
