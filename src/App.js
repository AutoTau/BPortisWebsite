import React, { Component } from 'react';
import { Button } from "mdbreact";
import headshot from './headshot.png';
import FooterPage from './footerpage.js';
import HeaderPage from './header.js';
import NavBar from './navbar';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './homePage';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <NavBar color="indigo" dark expand="md" fixed="top" scrolling>
            <Route name="home" exact path="/" Component={HomePage} />          
          </NavBar>
        </div>        
          <span className="border border-dark">
            <img src={headshot} alt="headshot" className="App-logo" />
          </span>
          <h1 className="App-title">Ben Portis</h1>
        <p className="mb-2">Software Developer Intern at Intel</p>
        <p className="mb-2">Senior at Portland State University, majoring in Computer Science.</p>
        <FooterPage ></FooterPage>
      </div>
      </Router>
    );
  }
}

export default App;