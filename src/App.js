import React, { Component } from 'react';
import Navigation from './Navigation';
import Form from './Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>a react form</h1>
        <Form />
      </div>
    );
  }
}

export default App;
