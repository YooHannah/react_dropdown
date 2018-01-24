import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';

const users = [
  { name: 'Jerry', id: 21, gender: 'male' },
  { name: 'Tomy', id: 22, gender: 'male' },
  { name: 'Lily', id: 19, gender: 'female' },
  { name: 'Lucy', id: 20, gender: 'female' }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Dropdown items={users}/>
      </div>

    );
  }
}

export default App;
