import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './Apicall.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BLOG APP USING REDDIT API</h1>
        </header>
        <Apicall/>
      </div>
    );
  }
}

export default App;
