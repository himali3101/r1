import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Heelo from './components/Hello(jsx)'
import Hello from './components/Hello(jsx)';
import MessageState from './components/Message(state)';
import Counter from './components/Counter'
import ConditionalRendering from './components/ConditionalRenderig'


function App() {
  return (
    <div className="App">
      <ConditionalRendering />
    </div>
  );
}

export default App;
