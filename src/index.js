import React from 'react';
import createApp from 'restfor/createApp';
import ReactDOM from 'react-dom';
import 'restfor/styles.css';
import views from './views';

ReactDOM.render(
  createApp(
    { apiUrl: process.env.NODE_ENV === 'production' ? 'http://35.156.223.46/api' : 'http://localhost:3001/api' },
    views
  ),
  document.getElementById('root')
);
