import React from 'react';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Routes from './routes';
import App from './App';
import CustomerSearch from './CustomerSearch';
import './index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
