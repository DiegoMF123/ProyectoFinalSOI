import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Pàgina principal">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Visiòn</h1>
        </header>
        <p className="App-intro">
          Universidad Mariano Galvez, Curso de SO.I Diego Mijangos

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
