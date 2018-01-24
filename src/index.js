import React from 'react';
import createApp from 'restfor/createApp';
import ReactDOM from 'react-dom';
import 'restfor/styles.css';
import views from './views';

ReactDOM.render(createApp({ apiUrl: 'http://localhost:3001/api' }, views), document.getElementById('root'));
