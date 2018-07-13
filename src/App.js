import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainChart from './components/MainChart';
import PieChart from './components/PieChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainChart />
        <PieChart />
      </div>
    );
  }
}

export default App;
