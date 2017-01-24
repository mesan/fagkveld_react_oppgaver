import React from 'react';
import logo from './logo.svg';
import './App.css';
import MountInfoExample from './MountInfoExample';

const App = props =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <MountInfoExample />
  </div>;

export default App;
