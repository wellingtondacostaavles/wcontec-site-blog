import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from './app/Context/auth';
import AppWithPreloader from './preloader/AppWithPreloader';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      <AuthProvider>
        <AppWithPreloader />
      </AuthProvider>,
      document.getElementById('root')
    );
  });
  
  
  