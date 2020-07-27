import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './Component/Home'
import Projects from './Component/Projects'
import Services from './Component/Services'
import Contacts from './Component/Contacts'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <ul className="nav-link">
            <li>
              <NavLink to="/" exact className="li" activeStyle={{ backgroundColor: 'pink', color: 'white' }} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" exact className="li" activeStyle={{ backgroundColor: 'pink', color: 'white' }}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/services" exact className="li" activeStyle={{ backgroundColor: 'pink', color: 'white' }}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" exact className="li" activeStyle={{ backgroundColor: 'pink', color: 'white' }}>Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/contacts" component={Contacts} />

        </div>
      </div>
    </Router>
  );
}

export default App;
