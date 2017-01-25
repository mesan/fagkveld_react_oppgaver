import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import CustomerSearch from './CustomerSearch';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/customers" component={CustomerSearch} />
  </Router>
);

export default Routes;