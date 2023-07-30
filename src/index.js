import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from './app/Context/auth';
import AppWithPreloader from './preloader/AppWithPreloader';

ReactDOM.render(
<AuthProvider>
    <AppWithPreloader/>
</AuthProvider>, 
document.getElementById('root')
);