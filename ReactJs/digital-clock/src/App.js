import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calender from './Component/Calender'
import DigitalClock from './Component/DigitalClock'

function App() {
  return (
    <div className="App">
      <div className="header"><h1>Digital Clock</h1></div>

      <div>
        <DigitalClock></DigitalClock>
      </div>


    </div>
  );
}

export default App;
