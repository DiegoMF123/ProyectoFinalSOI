import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Visiòn</h1>
        </header>
        <p className="App-intro">
          Universidad Mariano Galvez, Esta es la visiòn

        </p>
        <br>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Misiòn</h1>
        </header>
        <p className="App-intro">
          Universidad Mariano Galvez, Esta es la misiòn

        </p>
        <br>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Objetivos</h1>
        </header>
        <p className="App-intro">
          Universidad Mariano Galvez, Estos son los objetivos

        </p>
      </div>
    );
  }
}

export default App;
