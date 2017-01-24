import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-nc navbar-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <h2 className="logo">Trumpnews</h2>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                {/* Kategorier */}
            </div>
            <div className="col-md-8">
                <h1>Velkommen til fagkveld!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;