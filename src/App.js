import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Router from './services/router/router';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
