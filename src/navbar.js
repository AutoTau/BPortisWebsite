import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div>
          Header Component
          <ul id="headerButtons">
            <router>
            <li className="navButton"><Link to="">Home</Link></li>
            </router>
          </ul>
        </div>
      </header>
    )
  }
}
export default NavBar