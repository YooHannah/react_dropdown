import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';

const users = [
  { name: 'Jerry ', id: 21},
  { name: 'Tomy ', id: 22},
  { name: 'HANKS', id: 19},
  { name: 'Lucy', id: 20}
]
class App extends Component {
  dropdownfunc(obj){
    console.log(obj)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Dropdown EXERCISE.
        </p>
         <Dropdown items={users} changeFunc={this.dropdownfunc.bind(this)} />
      </div>

    );
  }
}

export default App;
