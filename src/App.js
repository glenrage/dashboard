import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainChart from './components/MainChart';
import PieChart from './components/PieChart';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <MainChart />
          <div className="card-body">
            <h5 className="card-title">Daily Temperature</h5>
          </div>
        </div>
        <div className="card">
          <PieChart />

          <div className="card-body">
            <h5 className="card-title">Notifications</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
