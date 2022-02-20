import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './blog.jsx';
import {AuthProvider} from './app/Context/auth';

ReactDOM.render(<AuthProvider><Blog/></AuthProvider>, document.getElementById('root')
);